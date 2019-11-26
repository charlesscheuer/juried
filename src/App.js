import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';
import './SASS/main.scss';

export default class App extends Component {
  activeChangeHandler = changeTo => {
    if (changeTo === 'home') {
      this.props.history.push('/home');
    } else if (changeTo === 'about') {
      this.props.history.push('/about');
    } else if (changeTo === 'contact') {
      this.props.history.push('/contact');
    }
  };

  renderHome = () => {
    return <Home activeChangeHandler={this.activeChangeHandler} />;
  };

  renderAbout = () => {
    return <About activeChangeHandler={this.activeChangeHandler} />;
  };

  componentDidMount() {
    const { pathname } = this.props.history.location;
    if (pathname === '/') {
      this.props.history.push('/home');
    }
  }

  render() {
    const { pathname } = this.props.history.location;
    // console.log(pathname);
    return (
      <div>
        {pathname === '/' && this.renderHome()}
        {pathname === '/home' && this.renderHome()}
        {pathname === '/about' && this.renderAbout()}
        <Footer activeChangeHandler={this.activeChangeHandler} />
      </div>
    );
  }
}
