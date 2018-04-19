// packages
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
// styles
import styles from './BulletsRoad.module.css';
// components
import Bullet from '../Bullet/Bullet';
import {
  BULLET_HEIGHT,
  ENEMY_WEAPON_HEIGHT
} from '../../utils/constants';

@inject('BulletsRoadStore')
@inject('EnemyWeaponStore')
@observer
class MainScene extends Component {
  getIsBulletHitTarget(y) {
    const topBulletPosition = y - BULLET_HEIGHT/2;
    const bottomBulletPosition = topBulletPosition + BULLET_HEIGHT;
    const topWeaponPosition = this.props.EnemyWeaponStore.topPosition;
    const bottomWeaponPosition = topWeaponPosition + ENEMY_WEAPON_HEIGHT;
    const bulletAboveTarget = bottomBulletPosition < topWeaponPosition;
    const bulletBelowTarget = topBulletPosition > bottomWeaponPosition;
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
          return <Bullet key={bullet.id} {...bullet} onFinishPath={({id, y}) => {
            this.props.BulletsRoadStore.removeBullet(id);
            const isBulletHitTarget = this.getIsBulletHitTarget(y);
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
