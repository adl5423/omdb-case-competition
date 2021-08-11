import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

function Searchbar(props){
  const [query, setQuery] = useState("");

  const onFormSubmit = e => {
      e.preventDefault();
      console.log(`Query in home: ${query}`);
      localStorage.setItem('query', query);
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    props.query === "" ? setQuery("Search here") : setQuery(props.query);
  }, []);


  return(
    <form onSubmit={onFormSubmit}>
      <input type="text" value={query} placeholder="search here" id="search-field" name="search-field" onChange={handleChange} />
      <Link to="/results">
          <button type="submit">
              Search
          </button>
      </Link>
    </form>
  );
}

export default Searchbar
