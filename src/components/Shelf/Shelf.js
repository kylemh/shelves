import React from 'react'
import PropTypes from 'prop-types';
import ReleaseItem from '../ReleaseItem/ReleaseItem';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import styles from './Shelf.module.scss';

class Shelf extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    releases: PropTypes.arrayOf(PropTypes.shape({
      ...ReleaseItemPropTypes,
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
              <ReleaseItem {...release} key={release.id} />
            )
          )}
        </div>
      </section>
    );
  }
}

export default Shelf

