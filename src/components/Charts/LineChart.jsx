import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Ambassador1: 1000, Ambassador2: 1500, Ambassador3: 800, Ambassador4: 1200, Ambassador5: 2000, Ambassador6: 1800 },
  { name: 'Feb', Ambassador1: 1200, Ambassador2: 1600, Ambassador3: 900, Ambassador4: 1300, Ambassador5: 2100, Ambassador6: 1900 },
  { name: 'Mar', Ambassador1: 1100, Ambassador2: 1550, Ambassador3: 820, Ambassador4: 1250, Ambassador5: 2050, Ambassador6: 1850 },
];

const LineChartComponent = () => {
  return (
    <div>
      <h2>Line Chart - Ambassador Earnings</h2>
      <LineChart width={300} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Ambassador1" stroke="#8884d8" />
        <Line type="monotone" dataKey="Ambassador2" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Ambassador3" stroke="#ffc658" />
        <Line type="monotone" dataKey="Ambassador4" stroke="#f6b73c" />
        <Line type="monotone" dataKey="Ambassador5" stroke="#b1cbbb" />
        <Line type="monotone" dataKey="Ambassador6" stroke="#e56717" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
