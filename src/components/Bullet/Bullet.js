import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Bullet.module.css';
import {
  BULLET_AREA_WIDTH,
  BULLET_HEIGHT,
  BULLET_WIDTH
} from '../../utils/constants';

class Bullet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 0
    }
  }

  static propTypes = {
    y: PropTypes.number.isRequired,
    onFinishPath: PropTypes.func.isRequired
  };

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.left >= BULLET_AREA_WIDTH - BULLET_WIDTH) {
        clearInterval(interval);
        this.props.onFinishPath({id: this.props.id, y: this.props.y});
      } else {
        this.setState({left: this.state.left + 1});
      }
    }, 10);
  }

  render() {
    return (
      <div className={styles.container} style={{
        top: this.props.y - BULLET_HEIGHT/2,
        left: this.state.left,
        width: BULLET_WIDTH,
        height: BULLET_HEIGHT
      }} />
    );
  }
}

export default Bullet;
