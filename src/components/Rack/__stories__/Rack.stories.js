import React from 'react';
import { storiesOf } from '@storybook/react';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableRack from '../DroppableRack';

const storyData = mockedReleases.releases.slice(0, 10).map(release => transformReleaseData(release));

storiesOf('Rack', module).add('default', () => (
  <DragDropContext onDragEnd={() => {}}>
    <DroppableRack collection={storyData}/>
  </DragDropContext>
));
