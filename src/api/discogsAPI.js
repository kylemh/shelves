import axios from 'axios';

const discogsAPI = axios.create({
  baseURL: 'https://api.discogs.com'
})

export const getReleasesFromUser = async (user = 'blacklight', pageNumber = 0) => {
  const { data } = await discogsAPI.get(`users/${user}/collection/folders/${pageNumber}/releases`);

  return data;
}
