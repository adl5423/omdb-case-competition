import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'

import './index.scss';
import '../../styles/index.scss'

function Results() {

    const onFormSubmit = e => {
        e.preventDefault();
    }

    return (
        <div class="results-page">
            <h1>Looking for something?</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="search here" id="search-field" name="search-field" />
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
