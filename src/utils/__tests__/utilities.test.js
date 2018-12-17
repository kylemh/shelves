import transformReleaseData from '../transformReleaseData';
import mockedReleases from '../../api/mocks/releases-0.json';
import mockedSingleRelease from '../../api/mocks/single-release.json';

describe('utils', () => {
  describe('transformReleaseData', () => {
    it('should transform mock data to expected shape', () => {
      expect(transformReleaseData(mockedSingleRelease)).toStrictEqual({
        id: 381224,
        primaryArtistName: 'Pixies',
        title: 'Doolittle',
        year: 1989,
      });
    });

    it('should transform every piece of the mocked response without error', () => {
      mockedReleases.releases.forEach(release => {
        expect(() => transformReleaseData(release)).not.toThrow();
      });
    });
  });
});
