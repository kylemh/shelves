import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReleaseItemPropTypes from './ReleaseItemPropTypes';
import styles from './ReleaseItem.module.scss';

export default class ReleaseItem extends React.Component {
  static propTypes = {
    ...ReleaseItemPropTypes,
    innerRef: PropTypes.func,
    isDragging: PropTypes.bool,
  };

  static defaultProps = {
    innerRef: undefined,
    isDragging: false,
    year: undefined,
  };

  render() {
    const { innerRef, isDragging, title, primaryArtistName, year, id, ...rest } = this.props;

    return (
      <article
        className={classNames(styles.ReleaseItem, { [styles.isDragging]: isDragging })}
        ref={innerRef}
        {...rest}
      >
        <div className={styles.details}>
          <h4 className={styles.title}>{title}</h4>
          <h5 className={styles.artist}>by {primaryArtistName}</h5>
          {Boolean(year) && <h5 className={styles.year}>{year}</h5>}
        </div>

        <span className={styles.dragIndicator}>●●●</span>
      </article>
    );
  }
}
