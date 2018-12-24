import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import ReleaseItem from './ReleaseItem';
import ReleaseItemPropTypes from './ReleaseItemPropTypes';

export default class DraggableReleaseItem extends React.Component {
  static propTypes = {
    ...ReleaseItemPropTypes,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    index: PropTypes.number.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.index === this.props.index) {
      return false;
    }

    return true;
  }

  render() {
    const { id, index, primaryArtistName, title, year } = this.props;

    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <ReleaseItem
            primaryArtistName={primaryArtistName}
            title={title}
            year={year}
            id={id}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          />
        )}
      </Draggable>
    );
  }
}
