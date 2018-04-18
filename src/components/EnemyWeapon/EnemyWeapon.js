import React, {Component} from 'react';
import styles from './EnemyWeapon.module.css';
import {ENEMY_WEAPON_HEIGHT} from '../../utils/constants';

class EnemyWeapon extends Component {
  render() {
    return (
      <div className={styles.block} style={{height: ENEMY_WEAPON_HEIGHT}} />
    );
  }
}

export default EnemyWeapon;
