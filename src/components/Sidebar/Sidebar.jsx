import React from "react";
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate(); 

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">dashboard logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>

          <li>
            <Link to="/dashboard">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/list">
              <PersonOutlineIcon className="icon" />
              <span>Data</span>
            </Link>
          </li>
          <li>
            <Link to="/form">
              <CreateIcon className="icon" />
              <span>Upload Mannually</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              <LogoutIcon className="icon" />
              <span>Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
