import React, { Component } from 'react';
import { getInfoUser } from '../provider/UserProvider';
import '../styles/dashboard.css'


class Title extends Component {


    state = {
        userInfo: undefined
    }

    componentDidMount(){
        getInfoUser(12)
        .then(data => this.setState({
            userInfo: data.userInfos
        }))
    }
    

    render() {
        return (
            <div className='title'>
                {
                this.state.userInfo ? <h1>Bonjour <span>{this.state.userInfo.firstName}</span></h1> : ''
                }  
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>  
            </div>
        );
    }
}

export default Title;