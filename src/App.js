import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Header from './components/Header';
import VerticalHeader from './components/VerticalHeader'
import Dashboard from './pages/Dashboard'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <VerticalHeader />
          <Route exact path="/">
            <Redirect to="/12" />
          </Route>
          <Route exact path="/:id" component={Dashboard} />
        </main>
      </Router>
    </div>
  )
}

export default App;
