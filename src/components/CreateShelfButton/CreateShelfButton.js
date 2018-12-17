import React from 'react'
import PropTypes from 'prop-types';
import styles from './CreateShelfButton.module.scss';

export default class CreateShelfButton extends React.Component {
  static propTypes = {
    createShelf: PropTypes.func.isRequired,
  };

  render() {
    const { props } = this;

    return (
      <button className={styles.CreateShelfButton} onClick={props.createShelf}>
        <h2 className={styles.label}>+ Create New Shelf +</h2>
      </button>
    )
  }
}
