import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import '../../styles/index.scss'
// eslint-disable-next-line
import {
  searchMovieList,
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchTopratedMovie,
} from '../../actions/service';

function Home() {
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

    const onFormSubmit = e => {
      e.preventDefault();
   }
  
    const handleGenreClick = async (genre_id) => {
      setMovieByGenre(await fetchMovieByGenre(genre_id));
    };
    
    const genreList = genres.map((item, index) => {
      return (
        <li className="list-inline-item" key={index}>
          <button
            type="button"
            onClick={() => {
              handleGenreClick(item.id);
            }}
          >
            {item.name}
          </button>
        </li>
      );
    });
  
    const movieList = movieByGenre.slice(0, 4).map((item, index) => {
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
            <h1 id="search-title">looking for something?</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="search here" id="search-field" name="search-field" />
                <Link to="/results">
                    <button type="submit">
                        Search
                    </button>
                </Link>
            </form>
            <a href="#movies" id="search-btn">More Content</a>
        </div>

        <div id="movies" class="movies-container">
            <h1 id="more-content-title">If you're indecisive...</h1>

            <h3>What to stream...</h3>
            <div class="movies-section">
                <div class="button-container">
                    {/* //insert tabs here */}
                </div>
            </div>

            <h3>Top Rated Content</h3>
            <div class="movies-section">
                <div class="movie-content">
                  {topRatedList}
                </div>
            </div>

            <h3>Content by Genre</h3>
            <ul className="list-inline">{genreList}</ul>
            <div class="movies-section">
                <div class="movie-content">
                  {movieList} 
                </div>
            </div>

            <h3>Movies That Came Out Today</h3>
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
