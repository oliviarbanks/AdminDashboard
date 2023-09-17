import React  from "react";
import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PriceCheck from "@mui/icons-material/PriceCheck";
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => { 
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">dashboard logo</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">
                        Main
                    </p>
                    
                    <li><DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <li><PersonOutlineIcon className="icon"/>
                        <span>Ambassador</span>
                    </li>
                    <li>
                        <CalendarMonthIcon className="icon"/>
                        <span>Date</span>
                    </li>
                    <li>
                        <AttachMoneyIcon className="icon"/>
                        <span>Amount</span>
                    </li>
                    <li>
                        <PriceCheck className="icon"/>
                        <span>Paid</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Log Out</span>
                    </li>
                    </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>
        </div>
    )
}
export default Sidebar;
