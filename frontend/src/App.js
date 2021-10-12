import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import VerticalHeader from './components/VerticalHeader';
import Dashboard from './pages/Dashboard';
import { getInfoUser } from './provider/UserProvider';
import './styles/App.css';

class App extends Component {


  render () {

    console.log(getInfoUser(12));
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Dashboard} />
          <Header />
          <VerticalHeader />
        </Router>
      </div>
    );
  }
}

export default App;
