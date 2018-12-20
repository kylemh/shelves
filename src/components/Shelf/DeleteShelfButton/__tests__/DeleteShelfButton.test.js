import React from 'react';
import { shallow } from 'enzyme';
import DeleteShelfButton from '../DeleteShelfButton';

describe('DeleteShelfButton', () => {
  it('should render', () => {
    const wrapper = shallow(<DeleteShelfButton onClick={jest.fn()}>🗑</DeleteShelfButton>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call props.createShelf when clicked', () => {
    const mockDeleteShelfFunc = jest.fn();
    const wrapper = shallow(
      <DeleteShelfButton onClick={mockDeleteShelfFunc}>Trash Test</DeleteShelfButton>
    );

    expect(mockDeleteShelfFunc).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(mockDeleteShelfFunc).toHaveBeenCalledTimes(1);
  });
});
