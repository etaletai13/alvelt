import React, { Component } from 'react';
import { GAME_NAME } from '../config';

class Overview extends Component {
  render() {
    return (
      <div class="grid main">
        <div class="ui bgDark bold">Overview</div>
        <div class="ui bgNormal">
          Welcome to { GAME_NAME }.
        </div>
      </div>
    );
  }
}

export default Overview;
