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

//     return (     
//         <div>
//             <h1>looking for smthn?</h1>
//             <input type="text" id="searchField" name="searchField" />
//             <Link to="/results">
//                 <button class="searchBtn" type="submit">Search</button>
//             </Link>
//             <button class="trendingContent" type="button">Trending Content</button>
//             <Link to="/login">
//                 <button class="loginBtn" type="button">Login or Sign Up</button>
//             </Link>
//         </div>
//     );
// }
function Home() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [persons, setPersons] = useState([]);
    const [topRated, setTopRated] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setNowPlaying(await fetchMovies());
        setGenres(await fetchGenre());
        setMovieByGenre(await fetchMovieByGenre(28));
        setPersons(await fetchPersons());
        setTopRated(await fetchTopratedMovie());
      };
  
      fetchAPI();
    }, []);
  
    const handleGenreClick = async (genre_id) => {
      setMovieByGenre(await fetchMovieByGenre(genre_id));
    };
    // const movies = nowPlaying.slice(0, 10).map((item, index) => {
    //   return (
    //     <div style={{ height: 50, width: "100%" }} key={index}>
    //       <div className="carousel-center">
    //         <img style={{ height: 100 }} src={item.backPoster} alt={item.title} />
    //       </div>
    //       <div className="carousel-center">
    //         <i
    //           className="far fa-play-circle"
    //           style={{ fontSize: 95, color: "#f4c10f" }}
    //         ></i>
    //       </div>
    //       <div
    //         className="carousel-caption"
    //         style={{ textAlign: "center", fontSize: 35 }}
    //       >
    //         {item.title}
    //       </div>
    //     </div>
    //   );
    // });
  
    const genreList = genres.map((item, index) => {
      return (
        <li className="list-inline-item" key={index}>
          <button
            type="button"
            className="btn btn-outline-info"
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
        <div className="col-md-3 col-sm-6" key={index}>
          <div className="card">
            <Link to={`/movie/${item.id}`}>
              <img className="img-fluid" src={item.poster} alt={item.title}></img>
            </Link>
          </div>
          <div className="mt-3">
            <p style={{ fontWeight: "bolder" }}>{item.title}</p>
            <p>Rated: {item.rating}</p>
            <ReactStars
              count={item.rating}
              size={10}
              color1={"#f4c10f"}
            ></ReactStars>
          </div>
        </div>
      );
    });

    const trendingPersons = persons.slice(0, 4).map((p, i) => {
      return (
        <div className="col-md-3 text-center" key={i}>
          <img
            className="img-fluid rounded-circle mx-auto d-block"
            src={p.profileImg}
            alt={p.name}
          ></img>
          <p className="font-weight-bold text-center">{p.name}</p>
          <p
            className="font-weight-light text-center"
            style={{ color: "#5a606b" }}
          >
            Trending for {p.known}
          </p>
        </div>
      );
    });
  
    const topRatedList = topRated.slice(0, 8).map((item, index) => {
      return (
        <div className="col-md-3" key={index}>
          <div className="card">
            <Link to={`/movie/${item.id}`}>
              <img className="img-fluid" src={item.poster} alt={item.title}></img>
            </Link>
          </div>
          <div className="mt-3">
            <p style={{ fontWeight: "bolder" }}>{item.title}</p>
            <p>Rated: {item.rating}</p>
            <ReactStars
              count={item.rating}
              size={20}
              color1={"#f4c10f"}
            ></ReactStars>
          </div>
        </div>
      );
    });
  
    return (
        <div className="container">
        <div className="row mt-3">
          <div className="col">
            <ul className="list-inline">{genreList}</ul>
          </div>
        </div>
  
        <div className="row mt-3">
          <div className="col">
            <div className="float-right">
              <i className="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>

        <div className="row mt-3">{movieList}</div>
  
        <div className="row mt-3">
          <div className="col">
            <p className="font-weight-bold" style={{ color: "#5a606b" }}>
              TRENDING PERSONS ON THIS WEEK
            </p>
          </div>
        </div>
  
        <div className="row mt-3">
          <div className="col">
            <div className="float-right">
              <i className="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>
        <div className="row mt-3">{trendingPersons}</div>
  
        <div className="row mt-3">
          <div className="col">
            <p className="font-weight-bold" style={{ color: "#5a606b" }}>
              TOP RATED MOVIES
            </p>
          </div>
        </div>
  
        <div className="row mt-3">
          <div className="col">
            <div className="float-right">
              <i className="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>
        <div className="row mt-3">{topRatedList}</div>
  
        <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
        
      </div>
    );
  }
export default Home;
