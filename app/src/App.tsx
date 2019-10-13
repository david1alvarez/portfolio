import React from 'react';
import logo from './logo.svg';
import './App.css';
import { any } from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DnDDashboardContent from './dnd/home';

const App: React.FC = () => {
  const http = require('https');
  function test() { 
    http.get('https://api.open5e.com/classes/', (resp:any) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk:any) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        alert(data);
      });

    }).on("error", (err:any) => {
      console.log("Error: " + err.message);
    });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={ test }>Jimmy's Test</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;