import React from 'react';
import PropTypes from 'prop-types';
import ReleaseItem from '../ReleaseItem/ReleaseItem';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import styles from './Rack.module.scss';

export default class Rack extends React.Component {
  static propTypes = {
    collection: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
  };

  render() {
    const { props } = this;

    return (
      <section className={styles.Rack}>
        {props.collection.map(release => (
          <ReleaseItem {...release} key={release.id} />
        ))}
      </section>
    );
  }
}
