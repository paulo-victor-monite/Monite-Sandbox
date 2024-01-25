// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Counterparts from './components/Counterparts';
import Payables from './components/Payables';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/counterparts">Counterparts</Link>
            </li>
            <li>
              <Link to="/payables">Payables</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/counterparts" component={Counterparts} />
          <Route path="/payables" component={Payables} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
