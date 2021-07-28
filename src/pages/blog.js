import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/functional/SEO';
import Layout from '../components/layout';
import BlogHeader from '../components/sections/blogheader';
import BlogTopics from '../components/sections/blogtopics';
import PopularBlogs from '../components/sections/popularblogs';
import FeaturedBlog from '../components/sections/featuredblog';
import AllBlogs from '../components/sections/allblogs';

const Blog = ({ data }) => {
  const FeaturedBlogData = data.FeaturedBlog.nodes;
  const PopularBlogData = data.PopularBlog.nodes;
  const AllBlogData = data.AllBlogs.nodes;
  console.log(AllBlogData);
  return (
    <Layout alt>
      <SEO />
      <BlogHeader />
      <FeaturedBlog data={FeaturedBlogData} />
      <PopularBlogs data={PopularBlogData} />
      <BlogTopics />
      <AllBlogs data={AllBlogData} />
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query MyQuery {
    FeaturedBlog: allSanityPost(
      sort: { fields: publishedAt, order: DESC }
      limit: 1
    ) {
      nodes {
        title
        publishedAt(formatString: "MMM DD YYYY")
        slug {
          current
        }
        readingTimeInMinutes

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
        categories {
          title
          slug {
            current
          }
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
        authors {
          author {
            name
            position
            image {
              alt
              asset {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        excerpt
      }
    }
    PopularBlog: allSanityPost(
      filter: { popular: { eq: true } }
      sort: { fields: publishedAt, order: DESC }
      limit: 6
    ) {
      nodes {
        title
        popular
        publishedAt(formatString: "MMM DD YYYY")
        slug {
          current
        }
        readingTimeInMinutes
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
        categories {
          title
          slug {
            current
          }
          mainImage {
            alt
            asset {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        authors {
          author {
            name
            position
            image {
              alt
              asset {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        excerpt
      }
    }
    AllBlogs: allSanityPost(
      filter: { popular: { eq: null } }
      sort: { fields: publishedAt, order: DESC }
      limit: 9
      skip: 1
    ) {
      nodes {
        title
        popular
        publishedAt(formatString: "MMM DD YYYY")
        slug {
          current
        }
        readingTimeInMinutes
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
        categories {
          title
          slug {
            current
          }
          mainImage {
            alt
            asset {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        authors {
          author {
            name
            position
            image {
              alt
              asset {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        excerpt
      }
    }
  }
`;
