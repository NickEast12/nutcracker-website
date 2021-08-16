import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout.js';
import AllPodcasts from '../components/sections/allpodcasts.js';
import BlogHeader from '../components/sections/blogheader.js';
import SEO from '../components/functional/SEO.js';

const Podcasts = ({ data }) => {
  const featuredPodcast = data.Fea.nodes;
  const allPodcasts = data.All.nodes;
  console.log(featuredPodcast);
  return (
    <Layout alt>
      <SEO
        title="Our Podcasts | B2B Growth, Marketing &amp; Sales | Nutcracker"
        description="Listen to a selection of B2B Growth, Marketing &amp; Sales Podcasts that feature the brains behind Nutcracker Agency, Jenny Knighting, CEO & Founder."
      />
      <BlogHeader>
        Our views on <span>B2B Business Growth </span>, <span>Marketing </span>
        &amp; <span>Sales</span>
      </BlogHeader>
      <AllPodcasts
        featuredPodcast={featuredPodcast}
        allPodcasts={allPodcasts}
      />
    </Layout>
  );
};

Podcasts.propTypes = {
  data: PropTypes.shape({
    All: PropTypes.shape({
      nodes: PropTypes.any,
    }),
    Fea: PropTypes.shape({
      nodes: PropTypes.any,
    }),
  }),
};

export default Podcasts;

export const query = graphql`
  query FeaturedPodcast {
    Fea: allSanityPodcast(
      sort: { fields: publishedAt, order: DESC }
      limit: 1
    ) {
      nodes {
        id
        title
        _rawBody
        slug {
          current
        }
        publishedAt(formatString: "MMM DD YYYY")
        mainImage {
          asset {
            gatsbyImageData(
              width: 700
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          alt
        }
        file {
          asset {
            url
          }
        }
      }
    }
    All: allSanityPodcast(sort: { fields: publishedAt, order: DESC }, skip: 1) {
      nodes {
        id
        title
        _rawBody
        slug {
          current
        }
        publishedAt(formatString: "MMM DD YYYY")
        mainImage {
          asset {
            gatsbyImageData(
              width: 700
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          alt
        }
        file {
          asset {
            url
          }
        }
      }
    }
  }
`;
