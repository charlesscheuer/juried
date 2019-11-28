import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' render={props => <App {...props} page={'home'} />} />
      <Route path='/home' render={props => <App {...props} page={'home'} />} />
      <Route
        path='/about'
        render={props => <App {...props} page={'about'} />}
      />
      <Route path='/shop' render={props => <App {...props} page={'shop'} />} />
      <Route
        path='/contact'
        render={props => <App {...props} page={'contact'} />}
      />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
