import React, {useLayoutEffect, useEffect, useState} from 'react';
import * as WebBrowser from "expo-web-browser";
import {tvAPI, movieAPI} from '../../api';

import DetailPresenter from "./DetailPresenter";


export default ({
    navigation,
    route : {
        params : {id, isTV, title, overview, backgroundImage, poster, votes}
    }
}) => {

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({
        loading :true,
        result : {
            title,
            overview,
            poster,
            votes,
            backgroundImage,
        }
    })

    const getData = async () => {
        const [getDetail, getDetailError] = isTV ? await tvAPI.show(id) : await movieAPI.movie(id)

        setDetail({
            loading : false,
            result: {
                ...getDetail,
                title :getDetail.title || getDetail.name,
                backgroundImage : getDetail.backdrop_path,
                poster : getDetail.poster_path,
                overview : getDetail.overview,
                votes : getDetail.vote_average
            }
        })

    };

    const openBrowser = async url => {
        await WebBrowser.openBrowserAsync(url);
    }


    useEffect(() => {
        getData();
    }, [id])

    useLayoutEffect(() => {
        navigation.setOptions({title})
    });

    return (
        <DetailPresenter
            {...detail}
            openBrowser={openBrowser}
        />
    )
}
