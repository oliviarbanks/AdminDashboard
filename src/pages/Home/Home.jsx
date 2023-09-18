import React from "react";
import "./Home.scss"
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Charts from "../../components/Charts/Charts";
import Ambassadors from "../../components/Ambassadors/Ambassadors";
import Table from "../../components/Table/Table";


const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="user" />
                <Widget type="date"/>
                <Widget type="amount"/>
                <Widget type="paid"/>
            </div>
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