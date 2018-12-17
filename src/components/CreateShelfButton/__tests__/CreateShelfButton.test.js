import React from 'react';
import { shallow } from 'enzyme';
import CreateShelfButton from '../CreateShelfButton';

describe('CreateShelfButton', () => {
  it('should render', () => {
    const wrapper = shallow(<CreateShelfButton createShelf={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call props.createShelf when clicked', () => {
    const createShelfFunction = jest.fn();
    const wrapper = shallow(<CreateShelfButton createShelf={createShelfFunction} />);

    expect(createShelfFunction).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(createShelfFunction).toHaveBeenCalledTimes(1);
  });
});
