import React, {Component} from 'react';
import {inject, observer} from 'mobx-react/index';

@inject('GameStore')
@observer
class DevToolComponent extends Component {
  static propTypes = {};

  render() {
    return (
      <div style={{
        border: '1px solid black',
        margin: 20
      }}>
        Game state: {this.props.GameStore.state}
      </div>
    );
  }
}

export default DevToolComponent;
