import React, { Component } from 'react';

class BuildTableRow extends Component {
  render() {
    return (
      <tr>
        <td class="imageCell"><img src={this.props.image} alt={this.props.name} /></td>
        <td>
          <strong>{this.props.name}</strong>
          <div>{this.props.description}</div>
        </td>
        <td>cost</td>
      </tr>
    );
  }
}

export default BuildTableRow;
