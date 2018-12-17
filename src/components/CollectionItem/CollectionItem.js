import React from 'react';
import CollectionItemPropTypes from './CollectionItemPropTypes';
import styles from './CollectionItem.module.scss';

export default class CollectionItem extends React.Component {
  static propTypes = {
    ...CollectionItemPropTypes,
  };

  static defaultProps = {
    year: undefined,
  };

  render() {
    const { props } = this;

    return (
      <article className={styles.CollectionItem}>
        <h4 className={styles.title}>{props.title}</h4>
        <h5 className={styles.artist}>by {props.primaryArtistName}</h5>
        {Boolean(props.year) && <h5 className={styles.year}>{props.year}</h5>}
      </article>
    );
  }
}
