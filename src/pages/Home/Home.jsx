import React from "react";
import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";





const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
            <Navbar/>            
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