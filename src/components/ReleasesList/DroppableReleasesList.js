import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import ReleasesList from './ReleasesList';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';

export default class DroppableReleasesList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    droppableId: PropTypes.string.isRequired,
    emptyStateMessage: PropTypes.string,
    releases: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
  };

  static defaultProps = {
    className: '',
    emptyStateMessage: '',
  };

  render() {
    const { className, droppableId, emptyStateMessage, releases } = this.props;

    return (
      <Droppable droppableId={droppableId} direction="horizontal">
        {(provided, snapshot) => (
          <ReleasesList
            className={className}
            emptyStateMessage={emptyStateMessage}
            releases={releases}
            isDraggingOver={snapshot.isDraggingOver}
            innerRef={provided.innerRef}
            placeholder={provided.placeholder}
            {...provided.droppableProps}
          />
        )}
      </Droppable>
    );
  }
}
