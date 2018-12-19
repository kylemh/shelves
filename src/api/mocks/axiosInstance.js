import MockAdapter from 'axios-mock-adapter';
import { discogsAPI } from '../discogsAPI';

const mockedDiscogsAPI = new MockAdapter(discogsAPI);

export default mockedDiscogsAPI;
