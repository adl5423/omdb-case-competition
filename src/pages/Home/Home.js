import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import '../../styles/index.scss'
// eslint-disable-next-line 
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import {
  searchMovieList,
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
} from '../../actions/service';
import RBCarousel from "react-bootstrap-carousel";
import ReactStars from "react-rating-stars-component";

function Home() {
    const [nowPlaying, setNowPlaying] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
          setNowPlaying(await searchMovieList('spider'));
        };
        fetchAPI();
      }, []);
 
    const onFormSubmit = e => {
        e.preventDefault();
     }

      const movies = nowPlaying.slice(0, 5).map((item, index) => {
        return (
          <div style={{ height: 500, width: "100%" }} key={index}>
            <div className="carousel-center">
              <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
            </div>
            <div className="carousel-center">
              <i
                className="far fa-play-circle"
                style={{ fontSize: 95, color: "#f4c10f" }}
              ></i>
            </div>
            <div
              className="carousel-caption"
              style={{ textAlign: "center", fontSize: 35 }}
            >
              {item.title}
            </div>
          </div>
        );
      });


    return (     
        <div>
            <Link to="/login">
                <a id="login-btn">Login</a>
            </Link>
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
                <a href="#movies" id="scroll-btn">More Content</a>
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
                        xxx
                    </div>
                </div>

                <h3>Popular Content</h3>
                <div class="movies-section">
                    <div class="movie-content">
                        xxxx
                    </div>
                </div>

                <h3>Movies That Came Out Today</h3>
                <div class="movies-section">
                    <div class="movie-content">
                        xxx
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
