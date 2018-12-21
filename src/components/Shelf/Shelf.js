import React from 'react';
import PropTypes from 'prop-types';
import DeleteShelfButton from './DeleteShelfButton/DeleteShelfButton';
import DroppableReleasesList from '../ReleasesList/DroppableReleasesList';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import styles from './Shelf.module.scss';

class Shelf extends React.Component {
  static propTypes = {
    deleteShelf: PropTypes.func.isRequired,
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

  onClick = () => {
    const { deleteShelf, id } = this.props;
    deleteShelf(id);
  }

  render() {
    const { id, name, releases } = this.props;

    return (
      <section className={styles.Shelf}>
        <div className={styles.container}>
          <h3 className={styles.name}>{name}</h3>

          <DeleteShelfButton onClick={this.onClick}>
            <ScreenReaderOnly>Delete Shelf</ScreenReaderOnly>
            🗑
          </DeleteShelfButton>
        </div>

        <DroppableReleasesList collection={releases} droppableId={id} />
      </section>
    );
  }
}

export default Shelf;
