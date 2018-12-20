import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './DeleteShelfButton.module.scss';

export default class DeleteShelfButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { children, onClick } = this.props;

    return (
      <button className={styles.DeleteShelfButton} onClick={onClick}>
        {children}
      </button>
    )
  }
}
