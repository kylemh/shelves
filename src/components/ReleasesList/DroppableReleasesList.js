import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import ReleasesList from './ReleasesList';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';

export default class DroppableReleasesList extends React.Component {
  static propTypes = {
    releases: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
    droppableId: PropTypes.string.isRequired,
  };

  render() {
    const { releases, droppableId } = this.props;

    return (
      <Droppable droppableId={droppableId} direction="horizontal">
        {provided => (
          <ReleasesList
            releases={releases}
            innerRef={provided.innerRef}
            placeholder={provided.placeholder}
            {...provided.droppableProps}
          />
        )}
      </Droppable>
    );
  }
}
