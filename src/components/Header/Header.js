import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Header.module.scss';

export default class Header extends React.Component {
  static propTypes = {
    createShelf: PropTypes.func.isRequired,
  };

  render() {
    const { createShelf } = this.props;

    return (
      <header className={styles.Header}>
        <h1 className={styles.logo}>Shelf</h1>

        <Button onClick={createShelf}>Create Shelf</Button>
      </header>
    );
  }
}
