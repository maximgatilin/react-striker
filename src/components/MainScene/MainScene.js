// packages
import React, {Component} from 'react';
// styles
import styles from './MainScene.module.css';
// components
import StrikerHome from '../StrikerHome/StrikerHome';
import TargetHome from '../TargetHome/TargetHome';

class MainScene extends Component {
  render() {
    return (
      <div className={styles.container}>
        <StrikerHome/>
        <TargetHome/>
      </div>
    );
  }
}

export default MainScene;
