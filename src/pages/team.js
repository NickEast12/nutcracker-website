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
      <SEO
        title="Meet the Nutcracker Team | Award-winning B2B Marketing Agency"
        description="The Nutcracker team are the people who will make your business stand out from the crowd and reach new heights. We don’t do boring and neither should you. Meet the team behind B2B marketing at its best."
      />
      <TeamHeader />
      <TeamPhotos TeamData={TeamData} />
      <Review reviewData={reviewData} />
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
        bio
        order
        image {
          alt
          asset {
            gatsbyImageData(
              width: 600
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
