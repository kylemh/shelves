import axios from 'axios';

export const discogsAPI = axios.create({
  baseURL: 'https://api.discogs.com',
});

/**
 * @description Fetch discogs data of a particular user
 * @param {string} user
 * @param {number} pageNumber
 * @exports
 * @throws
 * @returns
 */
export const getReleasesFromUser = async (user = 'blacklight', pageNumber = 0) => {
  try {
    const { data } = await discogsAPI.get(
      `users/${user}/collection/folders/${pageNumber}/releases`
    );

    return data;
  } catch (e) {
    if (process.env.NODE_ENV === 'development') {
      console.error(e);
    }

    return {
      releases: [],
      errorMessage: 'Something is wrong with Discogs... Try again later!',
      pagination: {},
    };
  }
};
