import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE', '#FF8042'];

const PieChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/earnings') 
      .then((response) => {
        const fetchedData = response.data;
        const paidSum = fetchedData.reduce((sum, entry) => entry.paid ? sum + entry.amount : sum, 0);
        const notPaidSum = fetchedData.reduce((sum, entry) => entry.paid ? sum : sum + entry.amount, 0);

        const chartData = [
          { name: 'Paid', value: paidSum },
          { name: 'Not Paid', value: notPaidSum },
        ];

        setData(chartData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <h2>Total Paid vs Not Paid</h2>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
