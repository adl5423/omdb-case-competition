import React from 'react'
import Card from '../../components/Card'

function Results() {
    return (
        <div>
            <h1>looking for smthn?</h1>
            <input type="text" id="searchField" name="searchField" />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Results;
