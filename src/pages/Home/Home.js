import { Link } from 'react-router-dom'
// eslint-disable-next-line 
import { fetchMovieList, searchMovieList } from '../../actions/index'
// import {URL_LIST,URL_SEARCH, URL_DETAIL, URL_PERSON, URL_CAST, URL_VIDEO, API_KEY, API_KEY_ALT} from '../../const';

function Home() {
    fetchMovieList();
    return (     
        <div>
            <h1>looking for smthn?</h1>
            <input type="text" id="searchField" name="searchField" />
            <Link to="/results">
                <button class="searchBtn" type="submit">Search</button>
            </Link>
            <button class="trendingContent" type="button">Trending Content</button>
            <Link to="/login">
                <button class="loginBtn" type="button">Login or Sign Up</button>
            </Link>
        </div>
    );
}

export default Home;
