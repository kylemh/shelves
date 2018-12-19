import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableCollectionList from '../DroppableCollectionList';

const storyData = mockedReleases.releases
  .slice(0, 10)
  .map(release => transformReleaseData(release));

storiesOf('CollectionList', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DragDropContext onDragEnd={() => {}}>
      <DroppableCollectionList
        collection={storyData}
        droppableId={text('droppableId', 'this-must-be-unique-within-context')}
      />
    </DragDropContext>
  ));
