import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { GAME_NAME } from '../config';

class Menu extends Component {
  render() {
    return (
      <ul className="menu">
        <MenuItem>{GAME_NAME}</MenuItem>
        <MenuItem group>&nbsp;</MenuItem>
        <MenuItem>Overview</MenuItem>
        <MenuItem>Empire</MenuItem>
        <MenuItem>Buildings</MenuItem>
        <MenuItem>Resources</MenuItem>
        <MenuItem>Research</MenuItem>
        <MenuItem>Shipyard</MenuItem>
        <MenuItem>Fleet</MenuItem>
        <MenuItem>Technology</MenuItem>
        <MenuItem>Galaxy</MenuItem>
        <MenuItem>Defense</MenuItem>
        <MenuItem group>&nbsp;</MenuItem>
        <MenuItem>Extras</MenuItem>
        <MenuItem>Settings</MenuItem>
      </ul>
    );
  }
}

export default Menu;
