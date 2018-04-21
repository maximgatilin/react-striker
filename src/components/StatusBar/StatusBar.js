// packages
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react/index';
// styles
import styles from './StatusBar.module.css';
import HealthStatus from '../HealthStatus/HealthStatus';

@inject('EnemyStore')
@inject('PlayerStore')
@observer
class StatusBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <HealthStatus
            initialValue={this.props.PlayerStore.initialHealth}
            currentValue={this.props.PlayerStore.health}
          />
        </div>
        <div className={styles.right}>
          <HealthStatus
            initialValue={this.props.EnemyStore.initialHealth}
            currentValue={this.props.EnemyStore.health}
          />
        </div>
      </div>
    );
  }
}

export default StatusBar;
