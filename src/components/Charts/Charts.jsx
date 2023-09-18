import React, { PureComponent }from "react";
import "./Charts.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Group A', value: 50 },
    { name: 'Group B', value: 50 },
  ];
  
  const COLORS = ['#00C49F', '#FF8042'];


  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  
    

const Charts = () => {
    return (
        <div className="charts">
            <div className="title">Ambassadors paid over time</div>
            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400} className="pieChart">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

        </div>
    )};
    export default Charts;