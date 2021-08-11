import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'

import './index.scss';
import '../../styles/index.scss'

import {
    searchMovieList
} from '../../actions/service';

function Results() {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setQuery(await localStorage.getItem('query'));
            console.log("value of query: ", localStorage.getItem('query'));
            setSearch(await searchMovieList(localStorage.getItem('query')));
            
            // setResults(search.slice(0, 10).map((item, index) => {
            //     return (
            //         <Card item={item} index={index} />  
            //         );
            //     }));
            };
            
        fetchAPI();
    }, []);

    function refreshPage(){
        window.location.reload(false);
    }
    
    const searchList = search.slice(0, 10).map((item, index) => {
        return (
            <Card item={item} index={index} />  
        );
    });


    const handleChange = event => {
        setQuery(event.target.value);
        localStorage.setItem('query', event.target.value);
    }

    return (
        <div className="results-page">
            <h1>Looking for something?</h1>
            <form>
                <input type="text" placeholder= {query} id="search-field" name="search-field" onChange={handleChange}/>
                <Link to="/results">
                    <button type="submit" onClick={refreshPage}>
                        Search
                    </button>
                </Link>
            </form>

            {searchList}

            <a id="scroll-btn" href="#">Scroll to top</a>
        </div>
    );
}

export default Results;
