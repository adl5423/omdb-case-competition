import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'

import './index.scss';
import '../../styles/index.scss'

function Results() {
    return (
        <div class="results-page">
            <h1>Looking for something?</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder= {query === "" ? "Search here" : query} id="search-field" name="search-field" />
                <Link to="/results">
                    <button type="submit">
                        Search
                    </button>
                </Link>
            </form>

            <Card />
            <Card />
            <Card />
            <Card />

            <a id="scroll-btn" href="#">Scroll to top</a>
        </div>
    );
}

export default Results;
