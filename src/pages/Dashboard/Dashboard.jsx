import React from "react";
import "./Dashboard.scss"
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Ambassadors from "../../components/Ambassadors/Ambassadors";



const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboardContainer">
            <Navbar/>
            <Ambassadors />
        
            </div>
        </div>
    )

}

export default Dashboard;