import React, {Component} from 'react';
import styles from './Bullet.module.css';
import {BULLET_AREA_WIDTH} from '../../utils/constants';

class Bullet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 0
    }
  }

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.left >= BULLET_AREA_WIDTH) {
        clearInterval(interval);
        console.log('finish');
      } else {
        this.setState({left: this.state.left + 1});
      }
    }, 10);
  }

  render() {
    return (
      <div className={styles.container} style={{top: this.props.y - 2, left: this.state.left}} />
    );
  }
}

export default Bullet;
