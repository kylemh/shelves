import React from 'react';
import ReleaseItemPropTypes from './ReleaseItemPropTypes';
import styles from './ReleaseItem.module.scss';

export default class ReleaseItem extends React.Component {
  static propTypes = {
    ...ReleaseItemPropTypes,
  };

  static defaultProps = {
    year: undefined,
  };

  render() {
    const { props } = this;

    return (
      <article className={styles.ReleaseItem}>
        <h4 className={styles.title}>{props.title}</h4>
        <h5 className={styles.artist}>by {props.primaryArtistName}</h5>
        {Boolean(props.year) && <h5 className={styles.year}>{props.year}</h5>}
      </article>
    );
  }
}
