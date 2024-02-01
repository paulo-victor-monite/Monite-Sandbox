// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Update import statement

import General from './components/General';
import Counterparts from './components/Counterparts';
import Payables from './components/Payables';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">General</Link>
            </li>
            <li>
              <Link to="/counterparts">Counterparts</Link>
            </li>
            <li>
              <Link to="/payables">Payables</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<General />} />
          <Route path="/counterparts" element={<Counterparts />} />
          <Route path="/payables" element={<Payables />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
