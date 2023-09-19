import React from "react";
import "./Home.scss"
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Charts from "../../components/Charts/Charts";
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
                <Charts />
            </div>
            <div className="listContainer">
                <div className="listTitle">Latest Transactions</div>
                <Table/>
            </div>
            </div>
        </div>
    )

}

export default Home;