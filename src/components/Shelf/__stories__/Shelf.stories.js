import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Shelf from '../Shelf';

const mockReleasesArray = [
  {
    title: 'Believe',
    primaryArtistName: 'Cher',
    year: 1998,
    id: 1160584,
  },
  {
    title: 'Believe',
    primaryArtistName: 'Cher',
    year: 1998,
    id: 1160584,
  },
  {
    title: 'Believe',
    primaryArtistName: 'Cher',
    year: 1998,
    id: 1160584,
  },
];

storiesOf('Shelf', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Shelf name={text('name', 'Love')} releases={mockReleasesArray} />
  ));
