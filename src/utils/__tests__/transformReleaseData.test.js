import { transformReleaseData } from '..';

import mockedReleases from '../../api/mocks/releases-0.json';
import mockedSingleRelease from '../../api/mocks/single-release.json';
import mockedSingleReleaseWithZeroYear from '../../api/mocks/single-release-with-0-year.json';

describe('transformReleaseData', () => {
  it('should transform mock data to expected shape', () => {
    const result = transformReleaseData(mockedSingleRelease);

    expect(result).toStrictEqual({
      id: 381224,
      primaryArtistName: 'Pixies',
      title: 'Doolittle',
      year: 1989,
    });
  });

  it('should pass year as undefined if it is passed as 0', () => {
    const result = transformReleaseData(mockedSingleReleaseWithZeroYear);

    expect(result).toStrictEqual({
      id: 118447,
      primaryArtistName: 'William Basinski',
      title: 'The Disintegration Loops II',
      year: undefined,
    });
  });

  it('should transform every piece of the mocked response without error', () => {
    mockedReleases.releases.forEach(release => {
      expect(() => transformReleaseData(release)).not.toThrow();
    });
  });
});
