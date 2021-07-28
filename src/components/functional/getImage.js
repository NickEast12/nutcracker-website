import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const GetImage = ({ data }) => {
  const image = getImage(data.asset);
  return <GatsbyImage image={image} alt={data.alt} />;
};

GetImage.propTypes = {
  data: PropTypes.any,
};

export default GetImage;
