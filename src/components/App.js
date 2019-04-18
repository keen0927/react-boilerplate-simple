import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import AnotherPage from './AnotherPage';
import NoMatch from './NoMatch';

import '../style/main.scss';

const App = () => {
  return (
    <Router>
      <div>
        <p><Link to="/">홈</Link></p>
        <p><Link to="/anotherPage">어나더 페이지2</Link></p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/anotherPage" component={AnotherPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;