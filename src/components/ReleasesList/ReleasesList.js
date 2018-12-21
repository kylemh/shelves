import React from 'react';
import PropTypes from 'prop-types';
import DraggableReleaseItem from '../ReleaseItem/DraggableReleaseItem';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import styles from './ReleasesList.module.scss';

export default class ReleasesList extends React.Component {
  static propTypes = {
    releases: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
    innerRef: PropTypes.func,
    placeholder: PropTypes.element,
  };

  static defaultProps = {
    innerRef: undefined,
    placeholder: undefined,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.releases === this.props.releases) {
      return false;
    }

    return true;
  }

  render() {
    const { releases, placeholder, innerRef, ...rest } = this.props;

    return (
      <section className={styles.ReleasesList} ref={innerRef} {...rest}>
        {releases.map((release, index) => (
          <DraggableReleaseItem index={index} key={release.id} {...release} />
        ))}
        {placeholder}
      </section>
    );
  }
}
