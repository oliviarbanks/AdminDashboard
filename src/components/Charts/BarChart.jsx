import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import "./BarChart.scss";
import axios from 'axios';

const BarChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/earnings') 
      .then((response) => {
        const fetchedData = response.data;
        const aggregatedData = aggregateEarnings(fetchedData);
        setData(aggregatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const aggregateEarnings = (data) => {
    const aggregatedData = {};
    data.forEach((entry) => {
      const { name, amount } = entry;
      if (aggregatedData[name]) {
        aggregatedData[name] += amount;
      } else {
        aggregatedData[name] = amount;
      }
    });

    return Object.keys(aggregatedData).map((name) => ({
      name,
      amount: aggregatedData[name],
    }));
  };

  return (
    <div>
      <h2>Ambassadors Earnings</h2>
      <BarChart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ value: 'Ambassadors', position: 'insideBottom', offset: 0 }} />
        <YAxis dataKey="amount" label={{ value: 'Earnings', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
