// packages
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
// styles
import styles from './BulletsRoad.module.css';
// components
import Bullet from '../Bullet/Bullet';
import {
  BULLET_HEIGHT,
  ENEMY_WEAPON_HEIGHT, WEAPON_HEIGHT
} from '../../utils/constants';

@inject('BulletsRoadStore')
@inject('EnemyWeaponStore')
@inject('WeaponStore')
@observer
class MainScene extends Component {
  getIsBulletHitTarget(y, owner) {
    const topBulletPosition = y - BULLET_HEIGHT/2;
    const bottomBulletPosition = topBulletPosition + BULLET_HEIGHT;

    let topTargetPosition;
    let bottomTargetPosition;

    if (owner === 'player') {
      topTargetPosition = this.props.EnemyWeaponStore.topPosition;
      bottomTargetPosition = topTargetPosition + ENEMY_WEAPON_HEIGHT;
    } else {
      topTargetPosition = this.props.WeaponStore.topPosition;
      bottomTargetPosition = topTargetPosition + WEAPON_HEIGHT;
    }

    const bulletAboveTarget = bottomBulletPosition < topTargetPosition;
    const bulletBelowTarget = topBulletPosition > bottomTargetPosition;
    return !bulletAboveTarget && ! bulletBelowTarget;
  }

  render() {
    const bulletsAsArray = [];
    this.props.BulletsRoadStore.bullets.forEach(value => {
      bulletsAsArray.push(value);
    });

    return (
      <div className={styles.container}>
        {bulletsAsArray.map((bullet) => {
          return <Bullet key={bullet.id} {...bullet} onFinishPath={({id, y, owner}) => {
            this.props.BulletsRoadStore.removeBullet(id);
            const isBulletHitTarget = this.getIsBulletHitTarget(y, owner);
            if (isBulletHitTarget) {
              console.log('hit target');
            }
          }}/>
        })}
      </div>
    );
  }
}

export default MainScene;
