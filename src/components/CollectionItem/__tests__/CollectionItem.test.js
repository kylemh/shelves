import React from 'react';
import { shallow } from 'enzyme';
import CollectionItem from '../CollectionItem';

describe('CollectionItem', () => {
  const requiredProps = {
    id: 2595467,
    title: 'Cosmogramma',
    primaryArtistName: 'Flying Lotus',
    year: 2010,
  };

  it('should render', () => {
    const wrapper = shallow(<CollectionItem {...requiredProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
