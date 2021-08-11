import React, { useEffect } from 'react';
import './index.scss'

function MovieSection(props){
  const [clickArray, setClickArray] = React.useState([true, false, false, false]);

  const clickTab = (tabID) => {
    let updatedTab = [false, false, false, false];

    updatedTab[tabID] = true;

    setClickArray(updatedTab);
  }

  const showPoster = () => {
    if(!props.streaming){
      return props.posterList;
    } else{
      if(clickArray[0]){
        return props.netflix;
      } else if(clickArray[1]){
        return props.hulu;
      } else if (clickArray[2]){
        return props.disneyplus;
      }
    }
  }

  return(
    <>
      <h2>{props.headerText}</h2>
      {props.genreList == null ? null : <ul className="list-inline">{props.genreList}</ul>}
      {props.streaming ? <div className = "streambtn-container">
        <button onClick={() => clickTab(0)} className={clickArray[0] ? "active" : null}>Netflix</button>
        <button onClick={() => clickTab(1)} className={clickArray[1] ? "active" : null}>Hulu</button>
        <button onClick={() => clickTab(2)} className={clickArray[2] ? "active" : null}>Disney Plus</button>
      </div> : null}
      <div className="movies-section">
        <div className="movie-content">
          {showPoster()}
        </div>
      </div>
    </>
  );
}

export default MovieSection