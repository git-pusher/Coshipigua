import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Coshipigua from './pages/Coshipigua';

import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Coshipigua}/>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
