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

    const onChange = text => setKeyword(text);
    const search = async () => {

        if(keyword === "") {
            return;
        }

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
            onChange={onChange}
            onSubmit={search}
            keyword={keyword}
        />
    )
};