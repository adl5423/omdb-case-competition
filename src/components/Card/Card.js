import React, { useState, useEffect } from 'react'
import './index.scss';

import {
    getStreamingProvider
} from '../../actions/service';

function Card(props) {
    const [stream, setStream] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setStream(await getStreamingProvider(props.item.id));
        };

        fetchAPI();
    }, []);

    return (
        <div className= "card-container">
            <img src={props.item.backPoster} alt="Card img here" />
            <div className="card-body">
                <div className="card-header">
                    <h2 className="title">{props.item.title} ({props.item.releaseDate})</h2>
                    <h3 className="rating">{props.item.rating}</h3>
                </div>
                <p className="description">{props.item.overview}</p>

                <div className="card-btn-container">
                    <a className="card-btn" href="somethinghere">Watch on {stream}</a>
                    <button className="card-btn">Like</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
