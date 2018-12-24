import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { DragDropContext } from 'react-beautiful-dnd';
import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import DroppableReleasesList from '../DroppableReleasesList';

const storyData = mockedReleases.releases
  .slice(0, 10)
  .map(release => transformReleaseData(release));

storiesOf('ReleasesList', module)
  .addDecorator(withKnobs)
  .add('with releases', () => (
    <DragDropContext onDragEnd={() => {}}>
      <DroppableReleasesList
        emptyStateMessage={text(
          'emptyStateMessage',
          'This shows up when no items are in the list passed to `releases`'
        )}
        releases={storyData}
        droppableId={text('droppableId', 'this-must-be-unique-within-context')}
      />
    </DragDropContext>
  ))
  .add('without releases', () => (
    <DragDropContext onDragEnd={() => {}}>
      <DroppableReleasesList
        emptyStateMessage={text(
          'emptyStateMessage',
          'This shows up when no items are in the list passed to `releases`'
        )}
        releases={[]}
        droppableId={text('droppableId', 'this-must-be-unique-within-context')}
      />
    </DragDropContext>
  ));
