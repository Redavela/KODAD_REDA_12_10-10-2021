import React, {useEffect, useState} from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';
import {getUserPerformance} from '../provider/UserProvider';
import {useParams} from 'react-router';


/**
 * display RadarChart
 * @return {HTMLElement} - component contains RadarChart
 */
const CapacityRadar = () => {
  const [userPerformance, setUserPerformance] = useState (undefined);
  const {id} = useParams ();

  useEffect (() => {
    getUserPerformance (id).then (data => {
      const subjectData = data.data.map (subject => ({
        ...subject,
        kind: data.kind[subject.kind],
      }));
      setUserPerformance (subjectData);
    });
  }, [id]);

  if (!userPerformance) return <div>Loading...</div>;
  return (
    <div
      style={{
        backgroundColor: '#282D30',
        width: 210,
        height: 215,
        borderRadius: 5,
      }}
    >
      <RadarChart
        outerRadius={65}
        width={205}
        height={215}
        data={userPerformance}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          tickLine={false}
          tick={{fontSize: 9}}
          dataKey="kind"
          stroke="#FFF"
        />
        <Radar
          dataKey="value"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.8}
        />
      </RadarChart>
    </div>
  );
};
export default CapacityRadar;
