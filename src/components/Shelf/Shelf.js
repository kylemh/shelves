import React from 'react';
import PropTypes from 'prop-types';
import DeleteShelfButton from './DeleteShelfButton/DeleteShelfButton';
import DroppableReleasesList from '../ReleasesList/DroppableReleasesList';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import styles from './Shelf.module.scss';
import EditableField from '../EditableField/EditableField';

class Shelf extends React.Component {
  static propTypes = {
    changeShelfName: PropTypes.func.isRequired,
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

  onClickDelete = () => {
    const { deleteShelf, id } = this.props;
    deleteShelf(id);
  }

  handleNameChange = (value) => {
    const { changeShelfName, id } = this.props;

    changeShelfName(id, value);
  }

  render() {
    const { id, name, releases } = this.props;

    return (
      <section className={styles.Shelf}>
        <div className={styles.container}>
          <EditableField className={styles.name} initialValue={name} setValueCallback={this.handleNameChange} tag="h3" />

          <DeleteShelfButton onClick={this.onClickDelete}>
            <ScreenReaderOnly>Delete Shelf</ScreenReaderOnly>
            🗑
          </DeleteShelfButton>
        </div>

        <DroppableReleasesList releases={releases} droppableId={id} />
      </section>
    );
  }
}

export default Shelf;
