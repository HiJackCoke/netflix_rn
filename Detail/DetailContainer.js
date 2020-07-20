import React, {useLayoutEffect, useEffect, useState} from 'react';
import {tvAPI, movieAPI} from '../api';

import DetailPresenter from "./DetailPresenter";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default ({
    navigation,
    route : {
        params : {id, title, overview, backgroundImage, poster, votes}
    }
}) => {
    const [movie, setMovie] = useState({
        title,
        overview,
        poster,
        votes,
        backgroundImage,
    });

    const [tv, setTv] = useState({

    });

    const getData = async () => {
        const [getMovie, getMovieError] = await movieAPI.movie(id);
        setMovie({
            ...getMovie,
            title : getMovie.title,
            backgroundImage : getMovie.backgroundImage,
            poster : getMovie.poster_path,
            overview : getMovie.overview,
            votes : getMovie.votes_average
        })
    };

    useEffect(() => {
        getData();
    }, [id])

    useLayoutEffect(() => {
        navigation.setOptions({title})
    })

    return (
        <DetailPresenter
            {...movie}
        />
    )
}
