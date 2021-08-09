import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
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
