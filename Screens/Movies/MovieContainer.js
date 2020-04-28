import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native'
import {movieAPI} from "../../api";



export default () => {

    const [movies, setMovies] = useState({
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
        <View>
            <Text>nowPlaying data is {movies.nowPlaying?.length}</Text>
            <Text>popular data is {movies.popular?.length}</Text>
            <Text>upcoming data is {movies.upcoming?.length}</Text>
        </View>
    )
}