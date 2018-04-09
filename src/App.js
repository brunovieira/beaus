import React, { Component } from 'react';
import logo from './img/logo.svg';
import logoHackerYou from './img/logo_hackeryou.jpg';
import './App.css';

import ListBeer from './ListBeer';
import DetailBeer from './DetailBeer';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
					<img src={logoHackerYou} className="App-logo-hy" alt="hackeryou" />
          <h1 className="App-title">Welcome to React - HackerYou</h1>
        </header>

				<BrowserRouter>
					<div>
						<Route exact path="/" component={ListBeer}/>
						<Route exact path="/detail/:id" component={DetailBeer}/>
						
					</div>
				</BrowserRouter>
      </div>
    );
  }
}

export default App;
