import React, {useState, useEffect} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  ReferenceLine,
  Area,
} from 'recharts';
import {getInfoActivity} from '../provider/UserProvider';

const DailyActivity = () => {
  const [userActivity, setUserActivity] = useState (undefined);

  const data = [
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
    },
  ];

  useEffect (() => {
    getInfoActivity(12).then(data => {
      setUserActivity(data.sessions)
    })
  }, [])

  console.log(userActivity);
  return (
    <div>
      <ResponsiveContainer width={835} height={320}>
        <BarChart 
        width={730} 
        height={250} 
        data={userActivity}
        margin={{
            top: 50,
            right: 10,
            left: 40,
            bottom: 5,
        }}
        barCategoryGap={35}
        barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
          dataKey="day"
          tickLine={false}
          tick={{ fontSize: 14 }}
          dy={15} />
          <YAxis 
            yAxisId="kilo"
            orientation="right"
            interval="number"
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 14 }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
