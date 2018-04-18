import React, {Component} from 'react';
import styles from './EnemyHome.module.css';
import EnemyWeapon from '../EnemyWeapon/EnemyWeapon';

class EnemyHome extends Component {
  render() {
    return (
      <div className={styles.container}>
        <EnemyWeapon/>
      </div>
    );
  }
}

export default EnemyHome;
