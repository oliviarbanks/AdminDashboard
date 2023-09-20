import React from "react";
import "./Ambassadors.scss";
import 'react-circular-progressbar/dist/styles.css';
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import LineChartComponent from "../Charts/LineChart";



const Ambassadors = () => {
  return (
    <div className="ambassadors">
      <div className="bottom">
        <div className="ambassadorsChart">
          <div>
            <BarChart />
            <PieChart/>
            <LineChartComponent/>
          </div>
        </div>r
      </div>
    </div>
  );
};

export default Ambassadors;
