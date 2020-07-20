import axios from 'axios';


const TMDB_KEY = "da8324cd688ff9706ecae7f17f146e85";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params : {
            ...params,
            api_key : TMDB_KEY
        }
    });

const getAnything = async (path, params = {}) => {
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
    nowPlaying : () => getAnything("/movie/now_playing"),
    popular : () => getAnything("/movie/popular"),
    upcoming : () => getAnything("/movie/upcoming", {region: "kr"}),
    search : query => getAnything("/search/movie", {query}),
    movie: id => getAnything(`/movie/${id}`, {append_to_response : "videos"}),
    discover : () => getAnything('/discover/movie')
};

export const tvAPI = {
    today : () => getAnything('/tv/airing_today'),
    thisWeek : () => getAnything('/tv/on_the_air'),
    topRated : () => getAnything('/tv/top_rated'),
    popular : () => getAnything('/tv/popular'),
    search : query => getAnything('/search/tv', {query}),
    show: id => getAnything(`/tv/${id}`, {append_to_response : "videos"})
};

// export const apiImage = path => `https://imgae.tmdb.org/t/p/w500${path}`;
export const apiImage = (
    path,
    defaultPoster = "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster);

