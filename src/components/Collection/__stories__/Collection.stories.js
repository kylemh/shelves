import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Collection from '../Collection';

storiesOf('Collection', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Collection
      title={text('title', 'Cosmogramma')}
      primaryArtistName={text('primaryArtistName', 'Flying Lotus')}
      year={number('year', 2010)}
    />
  ));
