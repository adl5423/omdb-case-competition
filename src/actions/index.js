import { SEARCH_URL, DETAIL_URL, PERSON_URL, CAST_URL, URL_VIDEO, API_KEY, API_KEY_ALT, MOVIES_URL} from '../const';

// action types
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const RESET_MOVIES = 'RESET_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
export const FETCH_STAR_SUCCESS = 'FETCH_STAR_SUCCESS';
export const FETCH_STAR_FAILURE = 'FETCH_STAR_FAILURE';
export const FETCH_CASTS = 'FETCH_CASTS';
export const FETCH_CASTS_SUCCESS = 'FETCH_CASTS_SUCCESS';
export const FETCH_CASTS_FAILURE = 'FETCH_CASTS_FAILURE';
export const FETCH_TRAILERS = 'FETCH_TRAILERS';
export const FETCH_TRAILERS_SUCCESS = 'FETCH_TRAILERS_SUCCESS';
export const FETCH_TRAILERS_FAILURE = 'FETCH_TRAILERS_FAILURE';


function searchMovieSuccess(data, keyword) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data,
    keyword
  };
}

function searchMovieFail(error) {
  return {
    type: SEARCH_MOVIE_FAILURE,
    error
  };
}

function fetchMoviesSuccess(data) {
 console.log(data)
  return {
    type: FETCH_MOVIES_SUCCESS,
    data
  };
}

function fetchMoviesFail(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  };
}

function fetchMovieSuccess(data) {
    console.log(data)
  return {
    type: FETCH_MOVIE_SUCCESS,
    data
  };
}

function fetchMovieFail(error) {
    console.log(error)
  return {
    type: FETCH_MOVIE_FAILURE,
    error
  };
}

function fetchStarSuccess(data) {
  return {
    type: FETCH_STAR_SUCCESS,
    data
  };
}

function fetchStarFail(error) {
  return {
    type: FETCH_STAR_FAILURE,
    error
  };
}

function fetchCastsSuccess(data) {
  return {
    type: FETCH_CASTS_SUCCESS,
    data
  };
}

function fetchCastsFail(error) {
  return {
    type: FETCH_CASTS_FAILURE,
    error
  };
}

function fetchTrailersSuccess(data) {
  return {
    type: FETCH_TRAILERS_SUCCESS,
    data
  };
}

function fetchTrailersFail(error) {
  return {
    type: FETCH_TRAILERS_FAILURE,
    error
  };
}


export function searchMovieList(keyword){
    let url = SEARCH_URL + keyword + API_KEY_ALT;
     fetch(url)
        .then(response => response.json())
        .then(json => json.results)
        .then(data => searchMovieSuccess(data,keyword))
        .catch(error => searchMovieFail(error))
  }
  
  export function fetchMovieList(option){
    let url;
    if(option) url = MOVIES_URL + API_KEY + '&with_cast=' + option;
    else url = MOVIES_URL + API_KEY;
       fetch(url).then(response => response.json())
            .then(json => json.results)
            .then(data => fetchMoviesSuccess(data))
            .catch(error => fetchMoviesFail(error))
           // .then(console.log)
  
  }
  
  export function fetchMovieDetail(id){
    const url_movie = DETAIL_URL + id + API_KEY;
       fetch(url_movie)
        .then(response => response.json())
        .then(data => fetchMovieSuccess(data))
        .catch(error => fetchMovieFail(error))
    
  }
  
  export function fetchStarDetail(id){
    const url_star = PERSON_URL + id + API_KEY;
    fetch(url_star)
        .then(response => response.json())
        .then(data => fetchStarSuccess(data))
        .catch(error => fetchStarFail(error))
  }
  
  export function fetchCastList(id){
    const url_casts = DETAIL_URL + id + CAST_URL + API_KEY;
     fetch(url_casts)
        .then(response => response.json())
        .then(json => json.cast)
        .then(data => fetchCastsSuccess(data))
        .catch(error => fetchCastsFail(error))
    
  }

  export function fetchTrailerList(id){
    const url_trailers = DETAIL_URL + id + URL_VIDEO + API_KEY;
     fetch(url_trailers)
        .then(response => response.json())
        .then(json => json.results)
        .then(data => {
          let youtubeTrailers = data.filter(function(trailer){
            return trailer.site === 'YouTube';
          });
         fetchTrailersSuccess(youtubeTrailers);
        }).catch(error => fetchTrailersFail(error))
  }