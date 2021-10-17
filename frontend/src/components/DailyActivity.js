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
} from 'recharts';
import {getInfoActivity} from '../provider/UserProvider';

const DailyActivity = () => {
  const [userActivity, setUserActivity] = useState(undefined);

  useEffect (() => {
    getInfoActivity (12).then (data => {
      const formatUserActivity = data.sessions.map(session => {
        return {
          ...session,
          day: parseInt(session.day.slice (-2)),
        };
      });
      setUserActivity(formatUserActivity);
    });
  }, []);
  console.log (userActivity);
  const renderColorLegend = value => (
    <span style={{color: '#74798C'}}>{value}</span>
  );

  const renderTooltip = values => {
    if (values.active) {
      return (
        <div className='toolTips'>
          <p>{values.payload[0].value}kg</p>
          <p>{values.payload[1].value}kCal</p>
        </div>
      );
    }
    return null
  };

  return (
    <div className="container">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width={835} height={320}>

        <BarChart
          width={730}
          height={250}
          data={userActivity}
          margin={{
            right: 10,
            left: 40,
            bottom: 5,
          }}
          barCategoryGap={35}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} />
          <YAxis
            orientation="right"
            tickCount={3}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={renderTooltip} />
          <Legend
            formatter={renderColorLegend}
            verticalAlign="top"
            height={36}
            align="right"
            iconType="circle"
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#000"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#e60000"
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
