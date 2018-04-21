import React, {Component} from 'react';
import styles from './EnemyHome.module.css';
import EnemyWeapon from '../EnemyWeapon/EnemyWeapon';
import {inject, observer} from 'mobx-react/index';

@inject('EnemyWeaponStore')
@inject('EnemyStore')
@observer
class EnemyHome extends Component {
  render() {
    const {isBeaten} = this.props.EnemyStore;
    return (
      <div className={styles.container}>
        {isBeaten ? <span>Loooooser!</span> : <EnemyWeapon topPosition={this.props.EnemyWeaponStore.topPosition}/>}
      </div>
    );
  }
}

export default EnemyHome;
