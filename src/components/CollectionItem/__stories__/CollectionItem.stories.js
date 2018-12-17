import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import CollectionItem from '../CollectionItem';

storiesOf('CollectionItem', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <CollectionItem
      id={number('id', 2595467)}
      primaryArtistName={text('primaryArtistName', 'Flying Lotus')}
      title={text('title', 'Cosmogramma')}
      year={number('year', 2010)}
    />
  ));
