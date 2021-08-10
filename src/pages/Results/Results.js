import React from 'react'
import Card from '../../components/Card/Card'

import './index.scss';
import '../../styles/index.scss'

function Results() {
    return (
        <div class="results-page">
            <h1>Looking for something?</h1>
            <input type="text" id="searchField" name="searchField" />
            <Card />
            <Card />
            <Card />
            <Card />

            <a id="scroll-btn" href="#">Scroll to top</a>
        </div>
    );
}

export default Results;
