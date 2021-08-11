import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import '../../styles/index.scss'
import Searchbar from "../../components/Searchbar/Searchbar.js";
// eslint-disable-next-line
import {
  searchMovieList,
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchTopratedMovie,
} from '../../actions/service';

function Home(props) {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
      const fetchAPI = async () => {
        setNowPlaying(await fetchMovies());
        setGenres(await fetchGenre());
        setMovieByGenre(await fetchMovieByGenre(28));
        setTopRated(await fetchTopratedMovie());
      };

      fetchAPI();
    }, []);



    const handleGenreClick = async (genre_id) => {
      setMovieByGenre(await fetchMovieByGenre(genre_id));
    };

    const genreList = genres.map((item, index) => {
      const pickedGenres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Horror', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller'];
      return (
        <>
          {pickedGenres.includes(item.name) ?
            (<li className="list-inline-item" key={index}>
                <button
                  type="button"
                  onClick={() => {
                    handleGenreClick(item.id);
                  }}
                >
                  {item.name}
                </button>
            </li>)
        : null}
        </>
      );
    });

    const movieList = movieByGenre.slice(0, 8).map((item, index) => {
      return (
        <div className="card" key={index}>
          <Link to={`/movie/${item.id}`}>
            <img src={item.poster} alt={item.title}></img>
          </Link>
          <h3>{item.title}</h3>
        </div>
      );
    });

    const topRatedList = topRated.slice(0, 8).map((item, index) => {
      return (
        <div className="card" key={index}>
          <Link to={`/movie/${item.id}`}>
            <img src={item.poster} alt={item.title}></img>
          </Link>
        </div>
      );
    });

    return (
      <>

        <div id="search" class="search-container">
            <h1 id="search-title">Need something to watch?</h1>
            <Searchbar />
            <a href="#movies" id="search-btn">I'm not sure...</a>
        </div>

        <div id="movies" class="movies-container">
            <h1 id="more-content-title">If you're indecisive...</h1>

            <h2>What to stream...</h2>
            <div class="movies-section">
                <div class="button-container">
                    {/* //insert tabs here */}
                </div>
            </div>

            <h2>Top Rated Content</h2>
            <div class="movies-section">
                <div class="movie-content">
                  {topRatedList}
                </div>
            </div>

            <h2>Content by Genre</h2>
            <ul className="list-inline">{genreList}</ul>
            <div class="movies-section">
                <div class="movie-content">
                  {movieList}
                </div>
            </div>

            <h2>Movies That Came Out Today</h2>
            <div class="movies-section">
                <div class="movie-content">
                    xxx
                </div>
            </div>

            <a id="scroll-btn" href="#">Scroll to top</a>
          </div>
      </>
    );
  }
export default Home;
