import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import "./BarChart.scss";

const data = [
  { name: 'Category 1', value: 25 },
  { name: 'Category 2', value: 50 },
  { name: 'Category 3', value: 75 },
  { name: 'Category 4', value: 100 },
];

const BarChartComponent = () => {
  return (
    <div>
      <h2>Simple Bar Chart</h2>
      <BarChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
