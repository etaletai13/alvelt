import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    const className = 'menuItem' + (this.props.group ? ' menuGroup' : '');
    const inside = this.props.group ? this.props.children : (
      <a href="#">{this.props.children}</a>
    );
    return (
      <li className={ className }>
        { inside }
      </li>
    );
  }
}

export default MenuItem;
