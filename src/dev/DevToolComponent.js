import React, {Component} from 'react';
import {inject, observer} from 'mobx-react/index';

@inject('GameStore')
@inject('PlayerStore')
@inject('EnemyStore')
@observer
class DevToolComponent extends Component {
  static propTypes = {};

  damagePlayer = () => {
    this.props.PlayerStore.damage();
  };

  damageEnemy = () => {
    this.props.EnemyStore.damage();
  };

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px 0 0'
    };
    return (
      <div style={{
        padding: 20,
        border: '1px solid black',
        margin: 20
      }}>
        Game state: {this.props.GameStore.state}
        <button style={buttonStyle} onClick={this.damagePlayer}>Damage player</button>
        <button style={buttonStyle} onClick={this.damageEnemy}>Damage enemy</button>
      </div>
    );
  }
}

export default DevToolComponent;
