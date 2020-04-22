import axios from 'axios';


const TMDB_KEY = "da8324cd688ff9706ecae7f17f146e85";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params : {
            ...params,
            api_key : TMDB_KEY
        }
    });

export const movieAPI = {
    nowPlaying : () => makeRequest("/movie/now_playing"),
    popular : () => makeRequest("/movie/popular"),
    upcoming : () => makeRequest("/movie/upcoming", {region: "kr"}),
    search : query => makeRequest("/search/movie", {query}),
    movie: id => makeRequest(`/movie/${id}`),
    discover : () => makeRequest('/discover/movie')
};

export const tvAPI = {
    today : () => makeRequest('/tv/airing_today'),
    thisWeek : () => makeRequest('/tv/on_the_air'),
    topRated : () => makeRequest('/tv/top_rated'),
    popular : () => makeRequest('/tv/popular'),
    search : query => makeRequest('/search/tv', {query}),
    tv : id => makeRequest(`/tv/${id}`)
};