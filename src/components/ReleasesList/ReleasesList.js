import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DraggableReleaseItem from '../ReleaseItem/DraggableReleaseItem';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import styles from './ReleasesList.module.scss';

export default class ReleasesList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    emptyStateMessage: PropTypes.string,
    innerRef: PropTypes.func,
    isDraggingOver: PropTypes.bool,
    placeholder: PropTypes.element,
    releases: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
  };

  static defaultProps = {
    className: '',
    emptyStateMessage: '',
    innerRef: undefined,
    isDraggingOver: false,
    placeholder: undefined,
  };

  render() {
    const {
      className,
      emptyStateMessage,
      innerRef,
      isDraggingOver,
      placeholder,
      releases,
      ...rest
    } = this.props;

    const isEmpty = releases.length === 0;

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

        {isEmpty && emptyStateMessage && (
            <span className={styles.emptyStateMessage}>{emptyStateMessage}</span>
          )}

        {/* Only render placeholder when it's necessary, so that
            emptyStateMessage doesn't shift when an item is dragged over */}
        {!isEmpty && placeholder}
      </section>
    );
  }
}
