import React from 'react';
import { shallow } from 'enzyme';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import Shelf from '../Shelf';

const testData = mockedReleases.releases.slice(0, 3).map(release => transformReleaseData(release));

describe('Shelf', () => {
  it('should render', () => {
    const wrapper = shallow(<Shelf name="Test Shelf" releases={testData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
