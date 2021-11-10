import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import Featured from '../components/sections/resources/featured';
import Body from '../components/sections/resources/body';

const Resources = ({ data }) => {
  const fea = data.Fea.nodes;
  const resources = data.All.nodes;
  return (
    <Layout>
      <SEO
        title="B2B Marketing Blog | News, Insight &amp; Opinions | Nutcracker"
        description="Read about B2B marketing industry news &amp; insight, social &amp; content marketing tips and find out more about marketing strategy &amp; trends from our in-house experts. Sign up to our newsletter to stay in the know."
      />
      <Featured data={fea} />
      <Body data={resources} />
    </Layout>
  );
};

Resources.propTypes = {
  data: PropTypes.any,
};

export default Resources;

export const ResourceQuery = graphql`
  query {
    Fea: allSanityResources(
      sort: { fields: publishedAt, order: DESC }
      limit: 1
    ) {
      nodes {
        title
        description
        slug {
          current
        }
        file {
          asset {
            url
            path
            source {
              url
            }
          }
        }
        publishedAt
        mainImage {
          alt
          asset {
            gatsbyImageData(
              width: 700
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    All: allSanityResources(
      sort: { fields: publishedAt, order: DESC }
      skip: 1
    ) {
      nodes {
        title
        description
        slug {
          current
        }
        file {
          asset {
            url
            path
            source {
              url
            }
          }
        }
        publishedAt
        mainImage {
          alt
          asset {
            gatsbyImageData(
              width: 700
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
