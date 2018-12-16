import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import './global.scss';

import requireContext from './require-context.macro';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withInfo({
      header: false
  })
);
addDecorator(checkA11y);
addDecorator(centered);

configure(loadStories, module);
