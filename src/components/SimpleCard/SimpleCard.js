import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function SimpleCard(props){

  return(
    <div className="card" key={props.index}>
      <Link to={`/movie/${props.item.id}`}>
        <img src={props.item.poster} alt={props.item.title}></img>
      </Link>
      <h3>{props.item.title}</h3>
    </div>
  );
}

export default SimpleCard