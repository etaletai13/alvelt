import React, { Component } from 'react';
import './App.css';
import { GAME_NAME } from '../config';

import Menu from '../components/Menu';
import ResourceBar from '../components/ResourceBar';
import Overview from '../pages/Overview';
import Buildings from '../pages/Buildings';

class App extends Component {
  router(path) {
    return <Buildings />;
  }

  render() {
    return (
      <div>
        <header className="topBar textCenter">
          <strong>{GAME_NAME}</strong>
        </header>
        <Menu />
        <div className="main">
          <ResourceBar />
          {this.router("")}
        </div>
      </div>
    );
  }
}

export default App;
