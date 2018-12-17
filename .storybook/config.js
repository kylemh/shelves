import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import './global.scss';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withInfo({
      header: false,
  })
);
addDecorator(
  withOptions({
    theme: themes.dark,
  })
);
addDecorator(checkA11y);

configure(loadStories, module);
