import React from 'react';
import {RadialBarChart, RadialBar} from 'recharts';
import '../styles/dashboard.css'
import PropTypes from 'prop-types';





/**
 *  composant qui affiche le score
 * @param {number} score - description
 */
const ScoreGoal = ({score}) => {
  const data = [
    { 
      score:1, 
      fill: 'white'
    },
    {
      score: score,
      fill: '#ff0000'
    },
  ];
  return (
    <div
      style={{
        backgroundColor: '#fbfbfb',
        width: 235,
        height: 253,
        borderRadius: 5,
        position:'relative'
      }}
    >
      <div
      >
        <RadialBarChart
        width={235}
        height={253}
        innerRadius={82}
        outerRadius={102}
        barSize={10}
        data={data}
        startAngle={180} 
        endAngle={-180}
    >
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey="score"
          />
        </RadialBarChart>
        <div className='inside-circle'>
          <span>{score * 100}%</span> de votre objectif
        </div>
      </div>
    </div>
  );
};



export default ScoreGoal;
