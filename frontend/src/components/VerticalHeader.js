import React, { Component } from 'react';
import '../styles/App.css'
import logo from '../assets/icon (5).png'
import logo1 from '../assets/icon (4).png'
import logo2 from '../assets/icon (3).png'
import logo3 from '../assets/icon (2).png'

class VerticalHeader extends Component {
    render() {
        return (
    <nav className='left-nav'>
        <div className='icon-left'>
          <img src={logo} alt='icon'></img>
          <img src={logo1} alt='icon'></img>
          <img src={logo2} alt='icon'></img>
          <img src={logo3} alt='icon'></img>
        </div>
        <span className='copyright'>Copiryght, SportSee 2020</span>
    </nav>
        );
    }
}

export default VerticalHeader;