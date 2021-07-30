import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import Review from '../components/sections/review';
import ServiceHeader from '../components/sections/serviceheader';

const Marketing = ({ data }) => {
  const review = data.Review;
  console.log(review);
  return (
    <Layout alt>
      <SEO />
      <ServiceHeader page="Marketing">
        <h1>
          Vanishing vision?{' '}
          <strong>
            <span>Nutcracker</span> has the right view
          </strong>
        </h1>
      </ServiceHeader>
      <Review reviewData={review} />
    </Layout>
  );
};

export default Marketing;

export const Query = graphql`
  query ReviewQuery {
    Review: sanityReview(location: { eq: "marketingpage" }) {
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
