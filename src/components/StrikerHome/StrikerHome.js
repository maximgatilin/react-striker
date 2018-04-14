import React, {Component} from 'react';
import styles from './StrikerHome.module.css';
import StrikerWeapon from '../StrikerWeapon/StrikerWeapon';

class StrikerHome extends Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();

    this.state = {
      topWeaponPosition: 0
    }
  }

  onMouseMove = (event) => {
    const containerTopOffset = this.containerRef.current.getBoundingClientRect().top;
    const {pageY} = event;
    const topPositionInsideContainer = pageY - containerTopOffset;

    this.setState({topWeaponPosition: topPositionInsideContainer});
  };

  render() {
    return (
      <div className={styles.container} onMouseMove={this.onMouseMove} ref={this.containerRef}>
        <StrikerWeapon topPosition={this.state.topWeaponPosition}/>
      </div>
    );
  }
}

export default StrikerHome;
