import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CreateShelfButton from '../CreateShelfButton';

storiesOf('CreateShelfButton', module).add('default', () => (
  <CreateShelfButton createShelf={action('createShelf')} />
));
