import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <input type="text" placeholder="Username" name="username" required></input>
            <input type="password" placeholder="Password" name="password" required></input>
            <Link to="/landing">
                <button type="submit">Login</button>
            </Link>

        </div>
    );
}

export default Login;
