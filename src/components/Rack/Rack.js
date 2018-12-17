import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from '../CollectionItem/CollectionItem';
import CollectionItemPropTypes from '../CollectionItem/CollectionItemPropTypes';
import styles from './Rack.module.scss';

export default class Rack extends React.Component {
  static propTypes = {
    collections: PropTypes.arrayOf(
      PropTypes.shape({
        ...CollectionItemPropTypes,
      })
    ).isRequired,
  };

  render() {
    const { props } = this;

    return (
      <section className={styles.Rack}>
        {props.collections.map(collectionItem => (
          <CollectionItem {...collectionItem} key={collectionItem.id} />
        ))}
      </section>
    );
  }
}
