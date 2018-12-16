import React from 'react'
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.logo}>Shelf</h1>
    </header>
  )
}

export default Header

