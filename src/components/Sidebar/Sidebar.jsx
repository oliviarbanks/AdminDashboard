import React from "react";
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PriceCheck from "@mui/icons-material/PriceCheck";
import LogoutIcon from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";

const Sidebar = () => {
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
            <Link to="/">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <PersonOutlineIcon className="icon" />
              <span>Ambassadors</span>
            </Link>
          </li>
          <li>
            <Link to="/form">
              <CreateIcon className="icon" />
              <span>Upload Mannually</span>
            </Link>
          </li>
          <li>
            <Link to="/logout">
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
