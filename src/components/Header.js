import React, {Component} from 'react';
import '../styles/App.css';
import logo from '../assets/logo (2).png';

class Header extends Component {
  render () {
    return (
      <nav className="nav">
        <ul>
          <li>
            <img src={logo} alt="SportSee" />
          </li>
          <li>
            Accueil
          </li>
          <li>
            Profil
          </li>
          <li>
            Réglages
          </li>
          <li>
            Communauté
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
