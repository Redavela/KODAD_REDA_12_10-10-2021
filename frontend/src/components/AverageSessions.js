import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {getInfoSessions} from '../provider/UserProvider';

/**
 * display LineChart
 * @return {HTMLElement} - show the LineChart
 */
const AverageSessions = () => {
  const [userInfoSessions, setUserInfoSession] = useState (undefined);
  const axisDayData = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const {id} = useParams ();
  console.log (id);
  useEffect (
    () => {
      getInfoSessions (id).then (data => {
        const userInfoSessionsFormat = data.sessions.map (session => ({
          ...session,
          day: axisDayData[session.day - 1],
        }));
        setUserInfoSession (userInfoSessionsFormat);
      });
    },
    [id]
  );

  /**
   * Show the toolTip on the hover
   * @param {Object} values - contain all the info of the graph
   * @return {HTMLElement} component contains the ToolTip
   */
  const renderTooltip2 = values => {
    if (values.active) {
      return (
        <div className="toolTips2">
          <p>{values.payload[0].value}min</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#FF0000',
        width: 200,
        height: 215,
        borderRadius: 5,
      }}
    >
      <h2
        style={{
          color: '#FFFFFF',
          opacity: 0.7,
          position: 'absolute',
          left: 25,
          top: 30,
        }}
      >
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer>
        <LineChart
          width={200}
          height={215}
          data={userInfoSessions}
          margin={{top: 0, right: 8, left: 7, bottom: -10}}
        >
          <XAxis
            dataKey="day"
            stroke="#FFFFFF"
            opacity="0.7"
            tickSize="0"
            axisLine={false}
          />
          <YAxis hide={true} />
          <Tooltip
            cursor={{stroke: '#000', strokeWidth: 90, opacity: 0.1}}
            content={renderTooltip2}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            opacity="0.9"
            dot={false}
          />
        </LineChart>

      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;
