import React from 'react';
import {RadialBarChart, RadialBar} from 'recharts';
import '../styles/dashboard.css';
import PropTypes from 'prop-types';

/**
 *  component display user score
 * @param {number} score - user score
 * @return {HTMLElement} - component contains RadialBarChart
 */
const ScoreGoal = ({score}) => {
  const data = [
    {
      score: 1,
      fill: 'white',
    },
    {
      score: score,
      fill: '#ff0000',
    },
  ];
  return (
    <div
      style={{
        background: '#f8f8f8',
        width: 200,
        height: 215,
        borderRadius: 5,
        position: 'relative',
      }}
    >
      <h2
        style={{
          position: 'absolute',
          left: 5,
          top: 10,
          fontWeight:'bold',
          fontSize:18,
        }}
      >
        Score
      </h2>
      <div>
        <RadialBarChart
          width={200}
          height={215}
          innerRadius={80}
          outerRadius={105}
          barSize={10}
          data={data}
          startAngle={200}
          endAngle={-160}
        >
          <RadialBar
            minAngle={15}
            clockWise={true}
            cornerRadius={20}
            dataKey="score"
          />
        </RadialBarChart>
        <div className="inside-circle">
          <p><span>{score * 100}%</span> de votre objectif</p>
        </div>
      </div>
    </div>
  );
};

ScoreGoal.propTypes = {
  score: PropTypes.number
};
export default ScoreGoal;
