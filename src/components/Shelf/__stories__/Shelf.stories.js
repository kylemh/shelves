import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import Shelf from '../Shelf';

const storyData = mockedReleases.releases.slice(0, 10).map(release => transformReleaseData(release));

storiesOf('Shelf', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Shelf name={text('name', 'This Is The Name Of The Shelf')} releases={storyData} />
  ));
