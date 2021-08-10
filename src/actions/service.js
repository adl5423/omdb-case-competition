import axios from 'axios';
import {MOVIES_URL,SEARCH_URL, DETAIL_URL, GENRE_URL, API_KEY, NOW_PLAYING_URL, TOP_RATED_URL, PERSON_WEEK_URL} from '../const';


export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(NOW_PLAYING_URL, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        console.log(modifiedData)
        return modifiedData;
    } catch (error) { }
}

export const fetchMovieByGenre = async (genre_id) => {
    try {
        const { data } = await axios.get(MOVIES_URL, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
                page: 1,
                with_genres: genre_id
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(GENRE_URL, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    } catch (error) { }
}

export const fetchTopratedMovie = async () => {
    try {
        const { data } = await axios.get(TOP_RATED_URL, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) {

    }
}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${DETAIL_URL}/${id}`, {
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        });
        return data;
    } catch (error) { }
}

export const fetchSimilarMovie = async (id) => {
    try {
        const { data } = await axios.get(`${DETAIL_URL}/${id}/similar`, {
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const searchMovieList = async (keyword) => {
    try{
        let url = SEARCH_URL + keyword;
        const {data} = await axios.get(url, {
            params: {
                api_key: API_KEY,
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        console.log(modifiedData)
        return modifiedData;
        
    } catch (error) { }
    }


export const fetchCasts = async (id) => {
    try {
        const { data } = await axios.get(`${DETAIL_URL}/${id}/credits`, {
            params: {
                api_key: API_KEY,
            }
        });
        const modifiedData = data['cast'].map((c) => ({
            id: c['cast_id'],
            character: c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        }))
        return modifiedData;
    } catch (error) { }
}

export const fetchPersons = async () => {
    try {
        const { data } = await axios.get(PERSON_WEEK_URL, {
            params: {
                api_key: API_KEY
            }
        })
        const modifiedData = data['results'].map((p) => ({
            id: p['id'],
            popularity: p['popularity'],
            name: p['name'],
            profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
            known: p['known_for_department']
        }))
        return modifiedData;
    } catch (error) { }
}