import React from 'react';
import { shallow } from 'enzyme';
import ReleaseItem from '../ReleaseItem';

describe('ReleaseItem', () => {
  const requiredProps = {
    id: 2595467,
    title: 'Cosmogramma',
    primaryArtistName: 'Flying Lotus',
    year: 2010,
  };

  it('should render', () => {
    const wrapper = shallow(<ReleaseItem {...requiredProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
