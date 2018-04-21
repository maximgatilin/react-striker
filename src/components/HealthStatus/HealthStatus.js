import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HealthStatus.module.css';

class HealthStatus extends Component {
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
    currentValue: PropTypes.number.isRequired
  };

  render() {
    const {initialValue, currentValue} = this.props;

    return (
      <div>
        {initialValue}/{currentValue}
      </div>
    );
  }
}

export default HealthStatus;
