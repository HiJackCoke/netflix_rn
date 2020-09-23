import React, {useEffect, useState, useLayoutEffect} from 'react';
import RecommendationPresenter from "./RecommendationPresenter";
import {movieAPI, tvAPI} from "../../api";
import * as WebBrowser from "expo-web-browser";

export default ({
    navigation,
    route : {
        params: {id, title, backgroundImage, poster, votes}
    }
}) => {
    const [recommendation, setRecommendation] = useState({
        loading: true,
        recommendation: [],
        recommendationError: null
    })

    const getData = async () => {

        const [recommendation, recommendationError] = await movieAPI.recommendations(id);

        setRecommendation({
            loading: false,
            recommendation: recommendation,
            recommendationError: recommendationError
        })
        // const [getRecommendation, getRecommendationError] = await movieAPI.recommendations(id)
        //
        // setRecommendation({
        //     loading: false,
        //     result: {
        //         ...getRecommendation,
        //         title : getRecommendation.title || getRecommendation.name,
        //         backgroundImage: getRecommendation.backdrop_path,
        //         poster : getRecommendation.poster_path,
        //         votes: getRecommendation.vote_average
        //     }
        // })
    }

    useEffect(() => {
        getData()
    }, [id])

    useLayoutEffect(() => {
        navigation.setOptions({title})
    });
    return (
        <RecommendationPresenter
            {...recommendation}
            refreshFn={getData}
        />
    )
}

