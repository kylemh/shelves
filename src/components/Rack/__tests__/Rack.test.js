import React from 'react';
import { shallow } from 'enzyme';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import Rack from '../Rack';

const testData = mockedReleases.releases.slice(0, 3).map(release => transformReleaseData(release));

describe('Rack', () => {
  it('should render', () => {
    const wrapper = shallow(<Rack collection={testData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
