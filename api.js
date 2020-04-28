import axios from 'axios';


const TMDB_KEY = "da8324cd688ff9706ecae7f17f146e85";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params : {
            ...params,
            api_key : TMDB_KEY
        }
    });

const geyAnything = async (path, params = {}) => {
    try {
        const {
            data : {results},
            data
        } = await makeRequest(path, params)
        return [results || data, null]
    } catch (e) {
        return [null, e]
    }
};

export const movieAPI = {
    nowPlaying : () => geyAnything("/movie/now_playing"),
    popular : () => geyAnything("/movie/popular"),
    upcoming : () => geyAnything("/movie/upcoming", {region: "kr"}),
    search : query => geyAnything("/search/movie", {query}),
    movie: id => geyAnything(`/movie/${id}`),
    discover : () => geyAnything('/discover/movie')
};

export const tvAPI = {
    today : () => geyAnything('/tv/airing_today'),
    thisWeek : () => geyAnything('/tv/on_the_air'),
    topRated : () => geyAnything('/tv/top_rated'),
    popular : () => geyAnything('/tv/popular'),
    search : query => geyAnything('/search/tv', {query}),
    tv : id => geyAnything(`/tv/${id}`)
};

export const apiImage = path => `https://imgae.tmdb.org/t/p/w500${path}`;