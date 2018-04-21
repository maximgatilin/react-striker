import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styles from './StrikerHome.module.css';
import StrikerWeapon from '../StrikerWeapon/StrikerWeapon';
import nanoid from 'nanoid';

@inject('WeaponStore')
@inject('BulletsRoadStore')
@observer
class StrikerHome extends Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
  }

  onMouseMove = (event) => {
    const containerTopOffset = this.containerRef.current.getBoundingClientRect().top;
    const {pageY} = event;
    const topPositionInsideContainer = pageY - containerTopOffset;

    this.props.WeaponStore.setTopPosition(topPositionInsideContainer);
  };

  onContainerClick = () => {
    this.props.BulletsRoadStore.addBullet({
      id: nanoid(),
      y: Number(this.props.WeaponStore.topPosition),
      owner: 'player'
    });
  };

  render() {
    return (
      <div className={styles.container} onMouseMove={this.onMouseMove} ref={this.containerRef} onClick={this.onContainerClick}>
        <StrikerWeapon topPosition={this.props.WeaponStore.topPosition}/>
      </div>
    );
  }
}

export default StrikerHome;
