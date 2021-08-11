import React from 'react'
import './index.scss';

function Card() {
    return (
        <div className= "card-container">
            <img src="https://via.placeholder.com/220x350.png" alt="Card img here" />
            <div className="card-body">
                <div className="card-header">
                    <h2 className="title">Movie Title (Year)</h2>
                    <h3 className="rating">[rating]</h3>
                </div>
                <p className="description">Description</p>

                <div className="card-btn-container">
                    <a className="card-btn" href="somethinghere">Watch on [streaming platform]</a>
                    <button className="card-btn">Like</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
