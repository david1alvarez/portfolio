import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <h2>Test Update</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <p>About</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <p>Contact</p>
    </div>
  );
};
class App extends Component {
  testAPIcall() {
    const axios = require('axios');
    axios.get('http://dnd5eapi.co/api/classes/1')
      .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
      })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
        <Router>
              <div>
              <h1>W3Adda - Simple SPA</h1>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Users</Link>
                    </li>
                  </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </div>
        </Router>
    );
  }
}

export default App;