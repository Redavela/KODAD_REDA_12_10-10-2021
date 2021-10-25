import React, {useEffect, useState} from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts';
import {getUserPerformance} from '../provider/UserProvider';

const CapacityRadar = () => {
  const [userPerformance, setUserPerformance] = useState (undefined);

  useEffect (() => {
    getUserPerformance (12).then (data => {
      const subjectData = data.data.map(subject =>({
          ...subject,
          kind:data.kind[subject.kind]
      }))
      setUserPerformance (subjectData);

    });
  }, []);



  if (!userPerformance) return <div>Loading</div>
  // console.log(userPerformance)
  return (
    <div
      style={{
        backgroundColor: '#282D30',
        width: 258,
        height: 263,
        borderRadius: 5
      }}
    >
      <RadarChart
        outerRadius={58}
        width={258}
        height={263}
        data={userPerformance}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis tickLine={false} dataKey="kind" stroke="#FFF" />
        <Radar
          dataKey="value"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};
export default CapacityRadar;
