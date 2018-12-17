/**
 * @description Pass a release to this function and get back the relevant info for this UI
 * @param {object} release
 * @param {number} release.id
 * @param {object} release.basic_information
 * @param {number} release.basic_information.year
 * @param {string} release.basic_information.title
 * @param {[{ name: string }]} release.basic_information.artists
 * @exports
 * @returns
 */
function transformReleaseData({ id, basic_information: basicInfo }) {
  const { artists, title, year } = basicInfo;

  const primaryArtistName = artists[0].name;

  return {
    id,
    primaryArtistName,
    title,
    year,
  };
}

export default transformReleaseData;
