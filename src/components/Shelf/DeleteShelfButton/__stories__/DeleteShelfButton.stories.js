import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DeleteShelfButton from '../DeleteShelfButton';

storiesOf('DeleteShelfButton', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DeleteShelfButton onClick={action('onClick')}>
      {text('children', 'Delete')}
    </DeleteShelfButton>
  ));
