import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import EditableField from '../EditableField';

storiesOf('EditableField', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <EditableField
      initialValue={text('initialValue', 'Editable Field')}
      setValueCallback={action('setValueCallback Fired')}
      tag={text('tag', 'span')}
    />
  ));
