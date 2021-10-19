import React, {Component} from 'react';
import AverageSessions from '../components/AverageSessions';
import DailyActivity from '../components/DailyActivity';
import CapacityRadar from '../components/CapacityRadar';
import ScoreGoal from '../components/ScoreGoal';
import Title from '../components/Title';

class Dashboard extends Component {

  // appel l'api getInfoUser()
  // stateInfoUser
  // passer les props dans le composant
  render () {
    return (
      <div className="user-activities">
        <Title />
        <DailyActivity />
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <AverageSessions />
          <CapacityRadar />
          <ScoreGoal/>
        </div>

      </div>
    );
  }
}

export default Dashboard;
