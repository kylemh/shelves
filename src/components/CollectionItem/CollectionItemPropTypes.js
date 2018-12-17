import PropTypes from 'prop-types';

const CollectionItemPropTypes = {
  id: PropTypes.number.isRequired,
  primaryArtistName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default CollectionItemPropTypes;
