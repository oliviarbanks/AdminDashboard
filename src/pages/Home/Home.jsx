import React from "react";
import "./Home.scss"
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget/>
                <Widget/>
                <Widget/>
                <Widget/>

            </div>
            </div>
        </div>
    )

}

export default Home;