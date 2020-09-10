import React from 'react';
import '../Login/login.css';

const Login = () => {
    return (
        <div className="login">
            <h1 className="text">Login</h1>
            <form action="" className="form">
                <div className="email">
                    <label htmlFor="" className="text">Email:</label>
                    <input type="email" className="no-outline" />
                </div>
                <div className="password">
                    <label htmlFor="" className="text">Password: </label>
                    <input type="password" className="no-outline"/>
                </div>
                <button type="submit" className="login-button text">Login</button>
            </form>
        </div>
    )
}

export default Login;
