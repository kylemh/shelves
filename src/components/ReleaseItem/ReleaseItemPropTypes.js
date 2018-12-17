import PropTypes from 'prop-types';

const ReleaseItemPropTypes = {
  id: PropTypes.number.isRequired,
  primaryArtistName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
};

export default ReleaseItemPropTypes;
