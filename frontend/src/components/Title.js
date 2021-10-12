import React, { Component } from 'react';
import { getInfoUser } from '../provider/UserProvider';

class Title extends Component {

    // récupérer le paramère dans l'url :id
    // le passer dans la méthode getInfoUser()
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
            <div>
                {
                    this.state.userInfo ? <h1>BONJOUR {this.state.userInfo.firstName}</h1> : ''
                }    
            </div>
        );
    }
}

export default Title;