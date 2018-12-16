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
    title: 'Something Borrowed, Something Blue',
    primaryArtistName: 'Deadbeat',
    year: 2004,
    id: 240315,
  },
  {
    title: 'Selected Ambient Works Volume II',
    primaryArtistName: 'Aphex Twin',
    year: 2012,
    id: 3577040,
  },
];

storiesOf('Shelf', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Shelf name={text('name', 'Love')} releases={mockReleasesArray} />
  ));
