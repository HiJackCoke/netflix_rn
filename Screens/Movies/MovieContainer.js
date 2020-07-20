import React, {useEffect, useState} from 'react';
import {movieAPI} from "../../api";
import MoviePresenter from "./MoviePresenter";



export default () => {

    const [refreshing, setRefreshing] = useState(false)

    const [movies, setMovies] = useState({
        loading : true,
        nowPlaying : [],
        popular : [],
        upcoming : [],
        nowPlayingError : null,
        popularError : null,
        upcomingError : null
    })

    const getData = async () => {
        const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying();
        const [popular, popularError] = await movieAPI.popular();
        const [upcoming, upcomingError] = await movieAPI.upcoming();


        setMovies({
            loading: false,
            nowPlaying: nowPlaying,
            popular : popular,
            upcoming : upcoming,
            nowPlayingError : nowPlayingError,
            popularError : popularError,
            upcomingError : upcomingError
        })

    };

    useEffect(() => {
        getData();
    }, []);




    return (
        <MoviePresenter
            {...movies}
            refreshFn={getData}
        />
    )
}