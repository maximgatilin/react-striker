import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './StrikerWeapon.module.css';
import {WEAPON_HEIGHT} from '../../utils/constants';

class StrikerWeapon extends Component {
  static propTypes = {
    topPosition: PropTypes.number.isRequired
  };

  render() {
    const topPosition = Math.max(0, this.props.topPosition - WEAPON_HEIGHT/2);

    return (
      <div className={styles.container} style={{
        height: WEAPON_HEIGHT,
        transform: `translate(0, ${topPosition}px)`
      }}>

      </div>
    );
  }
}

export default StrikerWeapon;
