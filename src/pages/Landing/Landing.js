import React from 'react';

function Landing() {
    return (
        <div>
            <h1>Hello</h1>
            <h3>You've watched a lot of movies from [streaming platform]</h3>
            <h3>Your favorite genre seems to be [genre] with it being [%] of your likes</h3>
            <h3>Ready to see [something here]?</h3>
            <button class="likedMovies" type="button">Liked Movies</button>
            <button class="recommended" type="button">Recommended</button>
            <button class="moreFromGenre" type="button">More From [genre]</button>
        </div>
    );
}

export default Landing;
