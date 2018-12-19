import React from 'react';
import PropTypes from 'prop-types';
import DraggableReleaseItem from '../ReleaseItem/DraggableReleaseItem';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import styles from './Rack.module.scss';

export default class Rack extends React.Component {
  static propTypes = {
    collection: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
    innerRef: PropTypes.func,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    innerRef: undefined,
    placeholder: undefined,
  };

  render() {
    const { collection, placeholder, innerRef, ...rest } = this.props;

    return (
      <section className={styles.Rack} ref={innerRef} {...rest}>
        {collection.map((release, index) => (
          <DraggableReleaseItem
            index={index}
            key={release.id}
            {...release}
          />
        ))}
        {placeholder}
      </section>
    );
  }
}
