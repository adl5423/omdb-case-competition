import React from 'react'
import './index.scss';
import '../../styles/index.scss'


function Logging() {
    return (
        <>
            <div id="dashboard">
                <div class = "landing-content">
                    <h1>Hey there [name]!</h1>
                    <p>You've watched a lot of movies (exactly __!) from [streaming platform]. Your favorite genre seems to be [genre] with it being [__%] of your overall likes. We've used this information to create a unique set of recommendations just for you.</p>

                    <br/>

                    <p>Ready to see your personalized dashboard?</p>

                    <div class="button-container">
                        <button id="back-home-btn">Home</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Logging;
