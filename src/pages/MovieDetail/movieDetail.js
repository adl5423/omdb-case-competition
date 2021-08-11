import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    fetchMovieDetail,
    fetchMovieVideos,
    fetchCasts,
    fetchSimilarMovie,
  } from "../../actions/service";
  import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
  import { Modal } from "react-bootstrap";
  import ReactStars from "react-rating-stars-component";
  import ReactPlayer from "react-player";
  import SimpleCard from '../../components/SimpleCard/SimpleCard'
  import MovieSection from '../../components/MovieSection/MovieSection'

function MovieDetail ({match}) {
let params = match.params;
const [isOpen, setIsOpen] = useState(false);
const [detail, setDetail] = useState([]);
const [video, setVideo] = useState([]);
const [casts, setCasts] = useState([]);
const [similarMovie, setSimilarMovie] = useState([]);


useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts(await fetchCasts(params.id));
      setSimilarMovie(await fetchSimilarMovie(params.id));
    };
    fetchAPI();
  }, [params.id]);


  const castList = casts.slice(0, ).map((c, i) => {
    return (
      <div className="col-md-3 text-center" key={i}>
        <img
          className="img-fluid rounded-circle mx-auto d-block"
          src={c.img}
          alt={c.name}
        ></img>
        <p className="font-weight-bold text-center">{c.name}</p>
        <p
          className="font-weight-light text-center"
          style={{ color: "#5a606b" }}
        >
          {c.character}
        </p>
      </div>
    );
  });

  const similarMovieList = similarMovie.slice(0, 15).map((item, index) => {
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
            size={20}
            color1={"#f4c10f"}
          ></ReactStars>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col text-center" style={{ width: "100%" }}>
          <center>
          <img
            className="img-fluid"
            src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
            width="1300"
            height="700"
          ></img>
          </center>
          <div
            className="carousel-caption"
            style={{ textAlign: "center", fontSize: 35 }}
          >
            {detail.title}
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="text-center">
            <ReactStars
              count={detail.vote_average}
              size={20}
              color1={"#f4c10f"}
            ></ReactStars>
          </div>
          <div className="mt-3">
            <p style={{ color: "#5a606b", fontWeight: "bolder", paddingTop:"10px" }}>OVERVIEW</p>
            {detail.overview}
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-3">
          <p style={{ color: "#5a606b", fontWeight: "bolder", paddingTop:"20px" }}>RELEASE DATE</p>
          <p>
              {detail.release_date}</p>
        </div>
        <div className="col-md-3">
          <p style={{ color: "#5a606b", fontWeight: "bolder", paddingTop:"20px" }}>RUN TIME</p>
          <p style={{ color: "#f4c10f",  }}>{detail.runtime}</p>
        </div>
        <div className="col-md-3">
          <p style={{ color: "#5a606b", fontWeight: "bolder", paddingTop:"20px" }}>BUDGET</p>
          <p style={{ color: "#f4c10f" }}>{detail.budget}</p>
        </div>
        <div className="col-md-3">
          <p style={{ color: "#5a606b", fontWeight: "bolder" , paddingTop:"20px"}}>HOMEPAGE</p>
          <p style={{ color: "#f4c10f", paddingBottom:"20px" }}>{detail.homepage}</p>
        </div>
      </div>
      <MovieSection headerText="Cast List" posterList={castList}/>
      <MovieSection headerText="Similar Movies" posterList={similarMovieList}/>
      <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

    </div>
  );
}
export default MovieDetail;