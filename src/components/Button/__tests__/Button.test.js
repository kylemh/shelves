import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from '../Button';

describe('Button', () => {
  it('should render', () => {
    const wrapper = shallow(<Button>Test</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call props.onClick when clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button onClick={onClickMock}>Test</Button>);

    expect(onClickMock).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not call props.onClick when clicked while disabled', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Button onClick={onClickMock} disabled>Test</Button>);

    expect(onClickMock).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
