import React, { Component } from 'react';
import DailyActivity from '../components/DailyActivity';
import Title from '../components/Title';






class Dashboard extends Component {
    render() {
        return (
            <div className='user-activities'>
                <Title/>
                <DailyActivity/>
            </div>
        );
    }
}

export default Dashboard;