import React from 'react'
import './index.scss';

function Card() {
    return (
        <div class= "card-container">
            <img src="https://via.placeholder.com/220x350.png" alt="Card img here" />
            <div class="card-body">
                <div class="card-header">
                    <h2 class="title">Movie Title (Year)</h2>
                    <h3 class="rating">[rating]</h3>
                </div>
                <p class="description">Description</p>

                <div class="card-btn-container">
                    <a class="card-btn" href="somethinghere">Watch on [streaming platform]</a>
                    <button class="card-btn">Like</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
