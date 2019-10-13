import React, { Props } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import DnDApp from './dnd/home';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/DnD" component={
                (Props: any) => <DnDApp title="this is a title" subtitle="this is a subtitle" {...Props} />}
            />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
