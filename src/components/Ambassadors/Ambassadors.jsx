import React from "react";
import "./Ambassadors.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Ambassadors = () => {
    return (
        <div className="ambassadors">
        <div className="top">
            <h1 className="title">Ambassador</h1>
            <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
            <div className="ambassadorsChart">
                <div>
            <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
                </div>
                <div className="chartLegend">Indicates % of amount paid on time
                </div>
            </div>
            <div className="cardDetails">
               <p className="title">Total paid</p>
            <p className="date">$500</p> 
            </div>
            
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Date Paid</div>
                    <div className="itemResult">08/23/2023</div>
                </div>
                <div className="item">
                    <div className="itemTitle">Amount Paid</div>
                    <div className="itemResult">$100</div>
                </div>
                <div className="item">
                    <div className="itemTitle">Payment received?</div>
                    <div className="itemResult yes">Yes</div>
                </div>
            </div>
           
        </div>
        </div>
    )};



    
    export default Ambassadors;