import React, { Component } from 'react';
import { RESOURCES } from '../config';
import l from '../localization';

const resourceImages = require.context('../images/resources', true);

class ResourceBar extends Component {
  render() {
    return (
      <div className="resourceBar">
        {Object.keys(RESOURCES).map((key) => {
          return (
            <div className="resource textCenter">
              <img src={resourceImages('./' + key + '.gif')} alt={l('resources', key)} />
              <div className="resourceName bold">{l('resources', key)}</div>
              <div>0</div>
              <div>0</div>
          </div>);
        })}
      </div>
    );
  }
}

export default ResourceBar;
