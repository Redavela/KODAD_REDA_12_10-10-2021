import React from "react";
import { RadialBarChart, RadialBar,} from "recharts";

const data = [
 
  {
    name: "12 % de votre projet",
    uv: 2.67,
    pv: 6800,
    fill: "#FF0000"
  }
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};



const ScoreGoal = () => {
  return (
    <div
      style={{
        backgroundColor: '#FBFBFB',
        width: 258,
        height: 263,
        borderRadius: 5,
      }}
    >
      {/* <h2 style={{color: '#FFFFFF'}}>Durée moyenne des sessions</h2> */}
      <div
         style={{
          position: 'absolute',
        }}
      >
      <RadialBarChart
        width={259}
        height={259}
        innerRadius={82}
        outerRadius={120}
        barSize={10}
        data={data}
        startAngle={360} 
        endAngle={0}
        barGap={4}
    >
        <RadialBar
        clockWise
        dataKey="uv"
        
      />
      
    </RadialBarChart> 
      </div>
    </div>
  );
};

export default ScoreGoal;
