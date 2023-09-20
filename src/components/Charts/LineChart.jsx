import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/earnings') 
      .then((response) => {
        const fetchedData = response.data;

        const groupedData = groupDataByDate(fetchedData);

        const sortedData = sortDataByDate(groupedData);

        setData(sortedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const groupDataByDate = (data) => {
    const groupedData = {};

    data.forEach((entry) => {
      const { date, amount } = entry;

      const formattedDate = new Date(date).toISOString().split('T')[0];

      if (!groupedData[formattedDate]) {
        groupedData[formattedDate] = 0;
      }

      groupedData[formattedDate] += amount;
    });

    return Object.keys(groupedData).map((date) => ({
      name: date,
      totalAmount: groupedData[date],
    }));
  };

  const sortDataByDate = (data) => {
    return data.sort((a, b) => new Date(a.name) - new Date(b.name));
  };

  return (
    <div>
      <h2>Total Daily Earnings</h2>
      <LineChart width={430} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
