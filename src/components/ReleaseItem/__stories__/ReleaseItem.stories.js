import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import ReleaseItem from '../ReleaseItem';

storiesOf('ReleaseItem', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ReleaseItem
      id={number('id', 2595467)}
      primaryArtistName={text('primaryArtistName', 'Flying Lotus')}
      title={text('title', 'Cosmogramma')}
      year={number('year', 2010)}
    />
  ));
