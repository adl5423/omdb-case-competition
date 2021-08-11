import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import '../../styles/index.scss'
import SimpleCard from '../../components/SimpleCard/SimpleCard'
import MovieSection from '../../components/MovieSection/MovieSection'
// eslint-disable-next-line
import {
  fetchUpcomingMovies,
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
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [query, setQuery] = useState("Search here");
    console.log(query)

    useEffect(() => {
      const fetchAPI = async () => {
        setNowPlaying(await fetchMovies());
        setUpcomingMovies(await fetchUpcomingMovies());
        setGenres(await fetchGenre());
        setMovieByGenre(await fetchMovieByGenre(28));
        setTopRated(await fetchTopratedMovie());
      };

      fetchAPI();
    }, []);

    const onFormSubmit = e => {
      e.preventDefault();
    }

    const handleChange = event => {
      localStorage.setItem('query', event.target.value);
      setQuery(event.target.value);
    }

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
  
    const movieList = movieByGenre.slice(0, 20).map((item, index) => {
      return (
        <SimpleCard item={item} index={index} />
      );
    });

    const upcomingList = upcomingMovies.slice(0, 20).map((item, index) => {
      return (
        <SimpleCard item={item} index={index} />
      );
    });
  
    const topRatedList = topRated.slice(0, 20).map((item, index) => {
      return (
        <SimpleCard item={item} index={index} />  
      );
    });

    return (
      <>
        <div id="search" className="search-container">
            <h1 id="search-title">Need something to watch?</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder = {query} id="search-field" name="search-field" onChange={handleChange}/>
                <Link to="/results">
                    <button type="submit">
                        Search
                    </button>
                </Link>
            </form>
            <a href="#movies" id="search-btn">I'm not sure...</a>
        </div>

        <div id="movies" className="movies-container">
            <h1 id="more-content-title">If you're indecisive...</h1>

            <MovieSection streaming={true} headerText="What to stream..." netflix={topRatedList} hulu={movieList} disneyplus={upcomingList}/>

            <MovieSection headerText="Top Rated Content" posterList={topRatedList} />

            <MovieSection headerText="Content By Genre" posterList={movieList} genreList={genreList}/>

            <MovieSection headerText="Upcoming Movies" posterList={upcomingList} />

            <a id="scroll-btn" href="#">Scroll to top</a>
          </div>
      </>
    );
  }
export default Home;
