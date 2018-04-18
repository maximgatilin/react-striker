// packages
import React, {Component} from 'react';
// styles
import styles from './MainScene.module.css';
// components
import StrikerHome from '../StrikerHome/StrikerHome';
import BulletsRoad from '../BulletsRoad/BulletsRoad';
import EnemyHome from '../EnemyHome/EnemyHome';

class MainScene extends Component {
  render() {
    return (
      <div className={styles.container}>
        <StrikerHome/>
        <BulletsRoad />
        <EnemyHome/>
      </div>
    );
  }
}

export default MainScene;
