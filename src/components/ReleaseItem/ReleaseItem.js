import React from 'react';
import PropTypes from 'prop-types';
import ReleaseItemPropTypes from './ReleaseItemPropTypes';
import styles from './ReleaseItem.module.scss';

export default class ReleaseItem extends React.Component {
  static propTypes = {
    ...ReleaseItemPropTypes,
    innerRef: PropTypes.func,
  };

  static defaultProps = {
    innerRef: undefined,
  };

  static defaultProps = {
    year: undefined,
  };

  render() {
    const { innerRef, title, primaryArtistName, year, id, ...rest } = this.props;

    return (
      <article className={styles.ReleaseItem} ref={innerRef} {...rest}>
        <h4 className={styles.title}>{title}</h4>
        <h5 className={styles.artist}>by {primaryArtistName}</h5>
        {Boolean(year) && <h5 className={styles.year}>{year}</h5>}
      </article>
    );
  }
}
