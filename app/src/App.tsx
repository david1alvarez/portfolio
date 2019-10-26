import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import DnDApp from './dnd/home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/DnD">Dungeons and Dragons</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/DnD">
              <DnDApp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;