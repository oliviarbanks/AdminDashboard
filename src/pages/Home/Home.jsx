import React from "react";
import "./Home.scss"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
            <h1>Welcome to the Ambassador Management System</h1>
            <p>Please select one of the following options</p>
            </div>
            <div className="buttons">
                <div className="homeButton">
                <Link to="/register">
                    <button>Register</button>
                </Link>
                </div>
                <div className="homeButton">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                </div>
            </div>
            
        </div>
    )

}

export default Home;