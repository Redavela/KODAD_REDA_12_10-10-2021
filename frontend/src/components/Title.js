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
                this.state.userInfo ? <h1>BONJOUR {this.state.userInfo.firstName}</h1> : ''
                }    
            </div>
        );
    }
}

export default Title;