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
import {useParams} from 'react-router';

/**
 * display BarChart
 * @return {HTMLElement} - component contains BarChart
 */
const DailyActivity = () => {
  const [userActivity, setUserActivity] = useState (undefined);

  const {id} = useParams ();

  useEffect (() => {
    getInfoActivity (id).then (data => {
      const formatUserActivity = data.sessions.map (session => {
        return {
          ...session,
          day: parseInt (session.day.slice (-2)),
        };
      });
      setUserActivity (formatUserActivity);
    });
  }, []);
  const renderColorLegend = value => (
    <span style={{color: '#74798C'}}>{value}</span>
  );
  /**
   * Show the toolTip on the hover
   * @param {Object} values - contain all the info of the graph
   * @return {HTMLElement} show the Tooltip
   */

  const renderTooltip = values => {
    if (values.active) {
      return (
        <div className="toolTips">
          <p>{values.payload[0].value}kg</p>
          <p>{values.payload[1].value}kCal</p>
        </div>
      );
    }
    return null;
  };

  if (userActivity) {
    return (
      <div className="container">
        <h2>Activité quotidienne</h2>
        <ResponsiveContainer width={650} height={280}>

          <BarChart
            width={600}
            height={250}
            data={userActivity}
            margin={{
              right: 10,
              left: 40,
              bottom: 5,
            }}
            barCategoryGap={22}
            barGap={6}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tick={{fontSize: 14}}
              dy={15}
            />
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
  } else {
    return <div>Loading...</div>;
  }
};

export default DailyActivity;
