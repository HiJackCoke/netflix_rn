import React, {useState} from 'react';
import SearchPresenter from "./SearchPresenter";
import {movieAPI, tvAPI} from "../../api"

export default () => {

    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState({
        movies : [],
        shows : [],
        movieError : null,
        showError : null
    });

    const onChanger = text => setKeyword(text);
    const search = async () => {
        const [movies, movieError] = await movieAPI.search(keyword);
        const [shows, showError] = await tvAPI.search(keyword);

        setResults({
            movies,
            shows,
            movieError,
            showError
        });
    };

    return (
        <SearchPresenter
            {...results}
            onChange={onChanger}
            onSubmit={search}
            keyword={keyword}
        />
    )
};