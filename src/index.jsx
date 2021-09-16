import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Welcome from './component/Welcome';
import Counter from './component/Counter';
import Message from './component/Message';
import Clock from './component/Clock';
import './css/index.css';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/message">Message</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/clock">
          <Clock />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
