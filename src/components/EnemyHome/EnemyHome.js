import React, {Component} from 'react';
import styles from './EnemyHome.module.css';
import EnemyWeapon from '../EnemyWeapon/EnemyWeapon';
import {inject, observer} from 'mobx-react/index';

@inject('EnemyWeaponStore')
@observer
class EnemyHome extends Component {
  render() {
    return (
      <div className={styles.container}>
        <EnemyWeapon topPosition={this.props.EnemyWeaponStore.topPosition}/>
      </div>
    );
  }
}

export default EnemyHome;
