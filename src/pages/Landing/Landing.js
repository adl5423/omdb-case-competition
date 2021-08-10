import React from 'react';
import './index.scss';
import '../../styles/index.scss'

function Landing() {
    return (
        <>
            <div id="dashboard">
                <div class = "landing-content">
                    <h1>Hey there [name]!</h1>
                    <p>You've watched a lot of movies (exactly __!) from [streaming platform]. Your favorite genre seems to be [genre] with it being [__%] of your overall likes. We've used this information to create a unique set of recommendations just for you.</p>

                    <br/>
                    
                    <p>Ready to see your personalized dashboard?</p>

                    <div class="button-container">
                        <a href="#likedMovies" class="scroll-btn">LIKED MOVIES</a>
                        <a href="#recommended" class="scroll-btn">RECOMMENDED</a>
                        <a href="#moreFromGenre" class="scroll-btn">MORE FROM [GENRE]</a>
                    </div>
                </div>
            </div>

            <div id="likedMovies">
                <h2>Here are all your liked movies...</h2>
                <div class="landing-content">

                </div>
                <div class="button-container">
                    <a href="#dashboard" class="scroll-btn">DASHBOARD</a>
                    <a href="#likedMovies" class="scroll-btn disabled">LIKED MOVIES</a>
                    <a href="#recommended" class="scroll-btn">RECOMMENDED</a>
                    <a href="#moreFromGenre" class="scroll-btn">MORE FROM [GENRE]</a>
                </div>
            </div>

            <div id="recommended">
                <h2>Recommendations based on your liked list...</h2>
                <div class="landing-content">
                </div>
                <div class="button-container">
                    <a href="#dashboard" class="scroll-btn">DASHBOARD</a>
                    <a href="#likedMovies" class="scroll-btn">LIKED MOVIES</a>
                    <a href="#recommended" class="scroll-btn disabled">RECOMMENDED</a>
                    <a href="#moreFromGenre" class="scroll-btn">MORE FROM [GENRE]</a>
                </div>
            </div>

            <div id="moreFromGenre">
                <h2>Because you like [genre]...</h2>
                <div class="landing-content">
                </div>
                <div class="button-container">
                    <a href="#dashboard" class="scroll-btn">DASHBOARD</a>
                    <a href="#likedMovies" class="scroll-btn">LIKED MOVIES</a>
                    <a href="#recommended" class="scroll-btn">RECOMMENDED</a>
                    <a href="#moreFromGenre" class="scroll-btn disabled">MORE FROM [GENRE]</a>
                </div>
            </div>
        </>
    );
}

export default Landing;
