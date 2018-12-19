import React from 'react';
import { shallow } from 'enzyme';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import CollectionList from '../CollectionList';

const testData = mockedReleases.releases.slice(0, 3).map(release => transformReleaseData(release));

describe('CollectionList', () => {
  it('should render', () => {
    const wrapper = shallow(<CollectionList collection={testData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
