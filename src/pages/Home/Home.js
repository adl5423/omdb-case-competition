import { Link } from 'react-router-dom'
// eslint-disable-next-line 
import React, { useState, useEffect } from "react";
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
            <h1>looking for smthn?</h1>
            <input type="text" id="searchField" name="searchField" />
            <Link to="/results">
                <button class="searchBtn" type="submit">Search</button>
            </Link>
            <button class="trendingContent" type="button">Trending Content</button>
            <Link to="/login">
                <button class="loginBtn" type="button">Login or Sign Up</button>
            </Link>
        </div>
    );
}
export default Home;
