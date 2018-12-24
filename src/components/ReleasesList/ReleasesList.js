import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DraggableReleaseItem from '../ReleaseItem/DraggableReleaseItem';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import styles from './ReleasesList.module.scss';

export default class ReleasesList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    releases: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
    innerRef: PropTypes.func,
    isDraggingOver: PropTypes.bool,
    placeholder: PropTypes.element,
  };

  static defaultProps = {
    className: '',
    innerRef: undefined,
    isDraggingOver: false,
    placeholder: undefined,
  };

  render() {
    const { className, innerRef, isDraggingOver, placeholder, releases, ...rest } = this.props;

    return (
      <section
        className={classNames(styles.ReleasesList, className, {
          [styles.isDraggingOver]: isDraggingOver,
        })}
        ref={innerRef}
        {...rest}
      >
        {releases.map((release, index) => (
          <DraggableReleaseItem index={index} key={release.id} {...release} />
        ))}
        {placeholder}
      </section>
    );
  }
}
