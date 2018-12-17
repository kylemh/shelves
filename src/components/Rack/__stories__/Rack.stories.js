import React from 'react';
import { storiesOf } from '@storybook/react';

import transformReleaseData from '../../../utils/transformReleaseData';
import mockedReleases from '../../../api/mocks/releases-0.json';
import Rack from '../Rack';

const storyData = mockedReleases.releases.slice(10).map(release => transformReleaseData(release));

storiesOf('Rack', module).add('default', () => <Rack collections={storyData}/>);
