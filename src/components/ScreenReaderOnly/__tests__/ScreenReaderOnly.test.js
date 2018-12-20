import React from 'react';
import ScreenReaderOnly from '../ScreenReaderOnly';

describe('ScreenReaderOnly', () => {
  it('should render with required props', () => {
    const wrapper = <ScreenReaderOnly>Test</ScreenReaderOnly>;
    expect(wrapper).toMatchSnapshot();
  });
});
