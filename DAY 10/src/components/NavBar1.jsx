import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell
} from 'recharts';
import Sidebar from './sidebar';

const GraphDisplay = () => {
  const [chartType, setChartType] = useState(null);

  const data = [
    { name: 'A', value: 100, x: 10, y: 30 },
    { name: 'B', value: 200, x: 20, y: 50 },
    { name: 'C', value: 300, x: 30, y: 70 },
    { name: 'D', value: 150, x: 40, y: 40 },
    { name: 'E', value: 250, x: 50, y: 60 },
  ];

  // Define custom colors for pie slices
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
            <Tooltip />
            <Legend />
          </BarChart>
        );

      case 'line':
        return (
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Tooltip />
            <Legend />
          </LineChart>
        );

      case 'pie':
        return (
          <PieChart width={400} height={300}>
            <Pie dataKey="value" data={data} fill="#8884d8" label fill="#fff">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );

      case 'scatter':
        return (
          <ScatterChart width={400} height={300}>
            <XAxis type="number" dataKey="x" name="x" unit="" />
            <YAxis type="number" dataKey="y" name="y" unit="" />
            <CartesianGrid />
            <Scatter name="A Scatter" data={data} fill="#8884d8" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
          </ScatterChart>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      <Sidebar />
      <div style={{ textAlign: 'center' }}>
        {renderChart()}
        <div>
          <button onClick={() => setChartType('bar')}>Bar Chart</button>
          <button onClick={() => setChartType('line')}>Line Chart</button>
          <button onClick={() => setChartType('pie')}>Pie Chart</button>
          <button onClick={() => setChartType('scatter')}>XY Graph</button>
        </div>
      </div>
    </div>
  );
};

export default GraphDisplay;
