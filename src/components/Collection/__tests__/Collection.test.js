import React from 'react';
import { shallow } from 'enzyme';
import Collection from '../Collection';

describe('Collection', () => {
  const requiredProps = {
    title: 'Cosmogramma',
    primaryArtistName: 'Flying Lotus',
    year: 2010,
  };

  it('should render', () => {
    const wrapper = shallow(<Collection {...requiredProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
