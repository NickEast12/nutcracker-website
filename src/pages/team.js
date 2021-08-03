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
        title="Nutcracker Team | Marketing Agency London | Nutcracker Agency"
        description="Nutcracker team Marketing agency in London. Each with our own set of expertise and skills, working hard to deliver your business objectives."
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
