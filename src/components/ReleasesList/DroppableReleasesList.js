import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import ReleasesList from './ReleasesList';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';

export default class DroppableReleasesList extends React.Component {
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
          <ReleasesList
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
