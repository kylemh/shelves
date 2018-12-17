import React from 'react';
import { shallow } from 'enzyme';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import Rack from '../Rack';

const storyData = mockedReleases.releases.slice(10).map(release => transformReleaseData(release));

describe('Rack', () => {
  it('should render', () => {
    const wrapper = shallow(<Rack collection={storyData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
