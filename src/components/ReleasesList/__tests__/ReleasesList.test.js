import React from 'react';
import { shallow } from 'enzyme';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import ReleasesList from '../ReleasesList';

const testData = mockedReleases.releases.slice(0, 3).map(release => transformReleaseData(release));

describe('ReleasesList', () => {
  it('should render', () => {
    const wrapper = shallow(<ReleasesList releases={testData} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render an empty state message if releases passed is an empty array', () => {
    const emptyStateMessage = 'Never gonna give you up';

    const wrapper = shallow(<ReleasesList releases={[]} emptyStateMessage={emptyStateMessage} />);

    expect(wrapper.find('.emptyStateMessage').text()).toStrictEqual(emptyStateMessage);
  });
});
