import React from 'react'
import PropTypes from 'prop-types';
import CollectionItem from '../CollectionItem/CollectionItem';
import CollectionItemPropTypes from '../CollectionItem/CollectionItemPropTypes';
import styles from './Shelf.module.scss';

class Shelf extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    releases: PropTypes.arrayOf(PropTypes.shape({
      ...CollectionItemPropTypes,
    })),
  };

  static defaultProps = {
    releases: [],
  };

  render() {
    const { props } = this;

    return (
      <section className={styles.Shelf}>
        <h2>Shelf</h2>
        <div className={styles.itemsContainer}>
          {props.releases.map(release => (
              <CollectionItem {...release} key={release.id} />
            )
          )}
        </div>
      </section>
    );
  }
}

export default Shelf

