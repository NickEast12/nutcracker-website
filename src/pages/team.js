import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import TeamHeader from '../components/sections/teamheader';
import TeamPhotos from '../components/sections/teamphotos';
import Review from '../components/sections/review';

const Team = ({ data }) => {
  const TeamData = data.AllTeam.nodes;
  const reviewData = data.Review;
  const alt = true;

  return (
    <Layout alt={alt}>
      <SEO />
      <TeamHeader />
      <TeamPhotos TeamData={TeamData} />
      <Review
        reviewData={reviewData}
        quote="Nutcracker are an exceptional full service marketing agency, with a
          unique blend of strategic ideas and delivery excellence. They have
          gone the extra mile on so many projects for us. I highly recommend
          working with them."
        person="Person Name"
        position="Company"
      />
    </Layout>
  );
};

Team.propTypes = {
  data: PropTypes.shape({
    AllTeam: PropTypes.shape({
      nodes: PropTypes.any,
    }),
    Review: PropTypes.any,
  }),
};

export default Team;

export const Query = graphql`
  query TeamQuery {
    AllTeam: allSanityAuthor(
      sort: { fields: order, order: ASC }
      filter: { name: { ne: "Nutcracker team" } }
    ) {
      nodes {
        name
        position
        email
        linkedin
        order
        image {
          alt
          asset {
            gatsbyImageData(
              width: 900
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    Review: sanityReview(location: { eq: "teampage" }) {
      title
      quote
      name
      job
      id
      image {
        alt
        asset {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;

//
