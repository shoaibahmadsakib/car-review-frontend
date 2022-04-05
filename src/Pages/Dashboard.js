import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Bar,
  PieChart,
  Pie,
  Line,
  LineChart
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="my_graph grid grid-cols-2 gap-10 px-10 pt-10">
      <div className="area-chat">
        <AreaChart
          width={500}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
      <div className="bar-chat">
        <BarChart width={500} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="investment" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <PieChart width={500} height={250}>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            dataKey="sell"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
        </PieChart>
      </div>

      <div className="lineChat">
        <LineChart
          width={500}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#8884d8" />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};
export default Dashboard;
