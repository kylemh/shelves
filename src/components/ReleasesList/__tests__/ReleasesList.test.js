import React from 'react';
import { shallow } from 'enzyme';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import ReleasesList from '../ReleasesList';

const testData = mockedReleases.releases.slice(0, 3).map(release => transformReleaseData(release));

describe('ReleasesList', () => {
  it('should render', () => {
    const wrapper = shallow(<ReleasesList collection={testData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
