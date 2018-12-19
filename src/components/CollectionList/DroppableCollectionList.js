import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import CollectionList from './CollectionList';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';

export default class DroppableCollectionList extends React.Component {
  static propTypes = {
    collection: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
    droppableId: PropTypes.string.isRequired,
  };

  render() {
    const { collection, droppableId } = this.props;

    return (
      <Droppable droppableId={droppableId} direction="horizontal">
        {provided => (
          <CollectionList
            collection={collection}
            innerRef={provided.innerRef}
            placeholder={provided.placeholder}
            {...provided.droppableProps}
          />
        )}
      </Droppable>
    );
  }
}
