import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Rack from './Rack';
import ReleaseItemPropTypes from '../ReleaseItem/ReleaseItemPropTypes';

export default class DroppableRack extends React.Component {
  static propTypes = {
    collection: PropTypes.arrayOf(
      PropTypes.shape({
        ...ReleaseItemPropTypes,
      })
    ).isRequired,
  };

  render() {
    const { collection } = this.props;

    return (
      <Droppable droppableId="rack" direction="horizontal">
        {provided => (
          <Rack
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
