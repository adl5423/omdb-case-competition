import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import '../../styles/index.scss'


function Home() {
    const onFormSubmit = e => {
        e.preventDefault();
    }
    return (
        <>
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
