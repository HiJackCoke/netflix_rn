import React, {useState} from 'react';
import {View, Text} from 'react-native'
import SearchPresenter from "./SearchPresenter";
import {movieAPI, tvAPI} from '../../api'

export default () => {

    const [keyWord, setKeyWord] = useState("");
    const [results, setResults] = useState({
        movies : [],
        shows : [],
        movieError : null,
        showError : null
    });

    const onChange = text => setKeyWord(text);
    const search = async () => {
        const [movies, movieError] = await movieAPI.search(keyWord);
        const [shows, showError] = await tvAPI.search(keyWord);

        setResults({
            movies : movies,
            shows : shows,
            movieError : movieError,
            showError : showError
        })

    };

    render() {
        return (
            <SearchPresenter
                {...results}
                onChange={onChange}
                onSubmit={search}
                keyWord={keyWord}
            />
        );
    }
}

