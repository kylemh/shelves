import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import DroppableReleasesList from '../ReleasesList/DroppableReleasesList';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import EditableField from '../EditableField/EditableField';
import { ReactComponent as IconTrash } from '../../images/FontAwesomeIcons/trash.svg';
import styles from './Shelf.module.scss';

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
  };

  handleNameChange = value => {
    const { changeShelfName, id } = this.props;

    changeShelfName(id, value);
  };

  render() {
    const { id, name, releases } = this.props;

    return (
      <section className={styles.Shelf}>
        <div className={styles.container}>
          <EditableField initialValue={name} setValueCallback={this.handleNameChange} />

          <Button onClick={this.onClickDelete} theme="secondary">
            <ScreenReaderOnly>Delete Shelf</ScreenReaderOnly>
            <IconTrash className={styles.icon} />
          </Button>
        </div>

        <DroppableReleasesList
          className={styles.releases}
          releases={releases}
          droppableId={id}
          emptyStateMessage="Drag items onto this shelf!"
        />
      </section>
    );
  }
}

export default Shelf;
