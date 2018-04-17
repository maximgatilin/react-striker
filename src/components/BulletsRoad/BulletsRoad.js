// packages
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
// styles
import styles from './BulletsRoad.module.css';
// components
import Bullet from '../Bullet/Bullet';

@inject('BulletsRoadStore')
@observer
class MainScene extends Component {
  render() {
    const bulletsAsArray = [];
    this.props.BulletsRoadStore.bullets.forEach(value => {
      bulletsAsArray.push(value);
    });

    return (
      <div className={styles.container}>
        {bulletsAsArray.map((bullet) => {
          return <Bullet key={bullet.id} {...bullet}/>
        })}
      </div>
    );
  }
}

export default MainScene;
