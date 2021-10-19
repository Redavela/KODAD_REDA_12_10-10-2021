import React, {PureComponent, useEffect, useState} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {getInfoSessions} from '../provider/UserProvider';



const axisDayData = ['L','M','M','J','V','S','D'];
 

const AverageSessions = () => {

    const [userInfoSessions, setUserInfoSession] = useState(undefined)

    useEffect(()=>{
        getInfoSessions(12).then(data => {
          console.log(data.sessions, axisDayData[0]);
          const userInfoSessionsFormat= data.sessions.map(session => ({
            ...session,
            day: axisDayData[session.day-1]
          }))
            setUserInfoSession(userInfoSessionsFormat)
        })
    },[])

  return (
    <div
      style={{
        backgroundColor: '#FF0000',
        width: 400,
        height: 263,
        // borderRadius: 5,
        // overflow: 'hidden',
        padding: 50
      }}
    >
      <h2 style={{color: '#FFFFFF'}}>Durée moyenne des sessions</h2>
      <ResponsiveContainer>
        <LineChart width={730} height={250} data={userInfoSessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey="day"
            stroke="#FFFFFF"
            tickSize="0"
            axisLine={false}
            padding={{ left: 15, right: 15 }}

          />
          <Tooltip cursor={{ stroke: "#000", strokeWidth: 64, opacity: 0.1}}  />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
          />
        </LineChart>


      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;
