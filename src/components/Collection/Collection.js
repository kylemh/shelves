import React from 'react'
import PropTypes from 'prop-types';
import styles from './Collection.module.scss';

export default class Collection extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    primaryArtistName: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  };

  render() {
    const { props } = this;

    return (
      <article className={styles.Collection}>
        <h4 className={styles.title}>{props.title}</h4>
        <h5 className={styles.artist}>by {props.primaryArtistName}</h5>
        <h5 className={styles.year}>{props.year}</h5>
      </article>
    )
  }
}
