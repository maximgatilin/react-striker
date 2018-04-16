// packages
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
// styles
import styles from './BulletsRoad.module.css';

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
          return <div key={bullet.id}>
            {bullet.y} {bullet.id}
          </div>
        })}

      </div>
    );
  }
}

export default MainScene;
