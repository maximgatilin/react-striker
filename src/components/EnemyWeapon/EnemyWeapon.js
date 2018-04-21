import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './EnemyWeapon.module.css';
import {ENEMY_WEAPON_HEIGHT} from '../../utils/constants';
import {inject, observer} from 'mobx-react/index';

@inject('EnemyWeaponStore')
@observer
class EnemyWeapon extends Component {
  static propTypes = {
    topPosition: PropTypes.number.isRequired
  };

  componentDidMount() {
    let direction = 'bottom';

    const interval = setInterval(() => {
      const currentPosition = this.props.topPosition;
      if (currentPosition > 80 && direction === 'bottom') {
        direction = 'top';
      }
      if (currentPosition < 20 && direction === 'top') {
        direction = 'bottom';
      }
      const nextPosition = direction ==='top' ? currentPosition - 1 : currentPosition + 1;
      this.props.EnemyWeaponStore.setTopPosition(nextPosition);
    }, 20);
  }

  render() {
    return (
      <div className={styles.block} style={{top: this.props.topPosition, height: ENEMY_WEAPON_HEIGHT}} />
    );
  }
}

export default EnemyWeapon;
