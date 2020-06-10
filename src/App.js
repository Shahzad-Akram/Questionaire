import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './icons.css';

import LandingPage from './layouts/landing-page';
import QuestionPage from './layouts/question-page';
import ResultsPage from './layouts/results';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/question-page' component={QuestionPage} />
        <Route exact path='/results' component={ResultsPage} />
      </Switch>
    </Router>
  );
}

export default App;
