import React from 'react';
import PropTypes from 'prop-types';
import DroppableCollectionList from '../CollectionList/DroppableCollectionList';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import styles from './Shelf.module.scss';

class Shelf extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releases: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ),
  };

  static defaultProps = {
    releases: [],
  };

  render() {
    const { id, name, releases } = this.props;

    return (
      <section className={styles.Shelf}>
        <div className={styles.container}>
          <h3 className={styles.name}>{name}</h3>
          <button className={styles.deleteButton} onClick={() => {}}>
            🗑
          </button>
        </div>

        <DroppableCollectionList collection={releases} droppableId={id} />
      </section>
    );
  }
}

export default Shelf;
