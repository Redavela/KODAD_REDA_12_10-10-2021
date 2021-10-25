import React, {useEffect, useState} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {getInfoSessions} from '../provider/UserProvider';



const axisDayData = ['L','M','M','J','V','S','D'];
 

const AverageSessions = () => {

    const [userInfoSessions, setUserInfoSession] = useState(undefined)

    useEffect(()=>{
        getInfoSessions(12).then(data => {
            const userInfoSessionsFormat= data.sessions.map(session => ({
                ...session,
                day: axisDayData[session.day-1]
            }))
            setUserInfoSession(userInfoSessionsFormat)
        })
    },[])
    // console.log(userInfoSessions);

    const renderTooltip2 = values => {
      if (values.active) {

        return (
          <div className='toolTips2'>
            <p>{values.payload[0].value}min</p>
          </div>
        );
      }
      return null
    };
  return (
    <div
      style={{
        backgroundColor: '#FF0000',
        width: 258,
        height: 263,
        borderRadius: 5
      }}
    >
      <h2 style={{color: '#FFFFFF', opacity:0.5}}>Durée moyenne des sessions</h2>
      <ResponsiveContainer>
        <LineChart width={730} height={250} data={userInfoSessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey="day"
            stroke="#FFFFFF"
            tickSize="0"
            axisLine={false}
          />
          <YAxis hide={true}/>
          <Tooltip cursor={{ stroke: "#000", strokeWidth: 64, opacity: 0.1}} content={renderTooltip2} />
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
