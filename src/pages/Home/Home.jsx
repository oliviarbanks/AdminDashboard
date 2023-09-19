import React from "react";
import "./Home.scss"
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Charts from "../../components/Charts/PieChart";
import Ambassadors from "../../components/Ambassadors/Ambassadors";
import Table from "../../components/Table/Table";



const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
            <Navbar/>
            <h2 className="title">Dashboard</h2>
           
            <div className="charts">
                <Ambassadors />
            </div>
            
            </div>
        </div>
    )

}

export default Home;