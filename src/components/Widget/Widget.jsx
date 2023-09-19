import React, { useState } from "react";
import "./Widget.scss";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import 'react-calendar/dist/Calendar.css';

const Widget = ({ type }) => {
    let data = {};

    const [date, setDate] = useState(new Date());

    //temporary data
    const amount = 500;
    const paid = "yes";

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    switch (type) {
        case "user":
            data = {
                title: "Ambassadors",
                isMoney: false,
                link: "View all",
                icon: <PersonIcon className="icon" />,
            };
            break;
       
        case "amount":
            data = {
                title: "Amount",
                isMoney: true,
                amount: "500",
                link: "View all",
                icon: <AttachMoneyIcon className="icon" />,
            };
            break;
        case "paid":
            data = {
                title: "Paid?",
                isMoney: true,
                link: "View all",
                icon: <DoneAllIcon className="icon check" />,
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
             <div className="left">
                <div className="title">
                 {data.title}{data.icon}{data.link}
                 {type === "user"}
                </div>

               
                {type === "amount" && (
                     <span className="counter">{data.link}{data.isMoney && "$"}{amount}</span>
                )}
            </div>
            {type === "paid" && (
            <div className="right">
                <div className="paid yes">
                {paid}
                </div>
            </div>)}
        </div>
    );
};

export default Widget;
