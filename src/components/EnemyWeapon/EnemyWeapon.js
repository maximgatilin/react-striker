import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './EnemyWeapon.module.css';
import {ENEMY_WEAPON_HEIGHT} from '../../utils/constants';


class EnemyWeapon extends Component {
  static propTypes = {
    topPosition: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className={styles.block} style={{top: this.props.topPosition, height: ENEMY_WEAPON_HEIGHT}} />
    );
  }
}

export default EnemyWeapon;
