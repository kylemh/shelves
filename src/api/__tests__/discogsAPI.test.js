import { discogsAPI, getReleasesFromUser } from '../discogsAPI';
import mockedDiscogsAPI from '../mocks/axiosInstance';

describe('discogsAPI', () => {
  it('should have config.baseURL equal "https://api.discogs.com"', async () => {
    const baseURL = 'https://api.discogs.com';
    mockedDiscogsAPI.reset();
    mockedDiscogsAPI.onGet('/fake').reply(200, {
      operationStatus: 'SUCCESS',
      errorsList: [],
    });

    const response = await discogsAPI('/fake');
    const mockedGet = mockedDiscogsAPI.history.get.pop();

    // test against mock call stack AND mocked response instance
    expect(mockedGet.baseURL).toStrictEqual(baseURL);
    expect(response.config.baseURL).toStrictEqual(baseURL);
    mockedDiscogsAPI.reset();
  });
});
