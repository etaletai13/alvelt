import React, { Component } from 'react';
import { BUILDINGS } from '../config';
import l from '../localization';
import BuildTableRow from '../components/BuildTableRow';

const buildingImages = require.context('../images/buildings', true);

class Buildings extends Component {
  render() {
    return (
      <div class="grid main">
        <div class="ui bgDark bold">Buildings</div>
        <table class="tableBgNormal">
          <tbody>
            {Object.keys(BUILDINGS).map((key) => {
            return (
              <BuildTableRow image={buildingImages('./' + key + '.gif')} name={l('buildings', key)} description={l('buildings.descriptions', key)} />
            );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Buildings;
