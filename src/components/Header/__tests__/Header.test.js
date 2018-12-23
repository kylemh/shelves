import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  it('should render', () => {
    const wrapper = shallow(<Header createShelf={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should fire callback when button is clicked', () => {
    const mockedCallback = jest.fn();
    const wrapper = shallow(<Header createShelf={mockedCallback} />);

    expect(mockedCallback).toBeCalledTimes(0);
    wrapper.find('Button').simulate('click');
    expect(mockedCallback).toBeCalledTimes(1);
  })
});
