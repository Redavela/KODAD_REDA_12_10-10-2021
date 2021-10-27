import React, {Component} from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from './components/Header';
import VerticalHeader from './components/VerticalHeader';
import Dashboard from './pages/Dashboard';
import './styles/App.css';

class App extends Component {


  render () {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>
          <VerticalHeader/>
          <Route exact path="/:id" component={Dashboard} />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
