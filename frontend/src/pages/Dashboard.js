import React, {useEffect, useState} from 'react';
import AverageSessions from '../components/AverageSessions';
import DailyActivity from '../components/DailyActivity';
import CapacityRadar from '../components/CapacityRadar';
import ScoreGoal from '../components/ScoreGoal';
import Title from '../components/Title';
import { getInfoUser } from '../provider/UserProvider';
import FourUserData from '../components/FourUserData';
import '../styles/dashboard.css'

const Dashboard = () => {

    const [userInfo, setUserInfo] = useState (undefined);
   
    useEffect(()=>{
        getInfoUser(12).then(data =>setUserInfo(data))
    },[])
    console.log(userInfo)
    
    if (!userInfo) return <div>Loading</div>
    return (
      <div className="user-activities">
        <Title name={userInfo.userInfos.firstName} />
        <div className='layout-row'>
        <div className="layout-data">
        <DailyActivity />
        <div className='flex-row'style={{display: 'flex', justifyContent: 'space-around'}}>
          <AverageSessions />
          <CapacityRadar />
          <ScoreGoal score ={userInfo.todayScore}/>
        </div>
        </div>
        <FourUserData userData={userInfo.keyData}/>
        </div>
      </div>
    );
}

export default Dashboard;
