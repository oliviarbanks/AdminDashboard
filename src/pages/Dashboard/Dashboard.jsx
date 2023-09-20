import React, { useEffect } from "react";
import "./Dashboard.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Ambassadors from "../../components/Ambassadors/Ambassadors";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <Ambassadors />
      </div>
    </div>
  );
};

export default Dashboard;
