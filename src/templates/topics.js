import PropTypes, { number } from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import SEO from '../components/functional/SEO';
import SingleBlog from '../components/functional/singleblog';
import Layout from '../components/layout';
import TopicsHeader from '../components/sections/topicsheader';
import SingleFeaturedBlog from '../components/functional/singlefeaturedblog';

const TopicsStyles = styled.section`
  width: 100%;
  background-color: var(--altBackground);
  padding: 2rem 0 3rem 0;
  .wrapper {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 750px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .nein {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    text-align: center;
    p {
      font-size: 1.4rem;
    }
  }
`;
const Topics = ({ pageContext, data }) => {
  const blogData = data.AllBlogs.nodes;
  const featuredData = data.FeaturedBlog.nodes;
  const topics = data.topics.nodes;
  // console.log(topics);
  const arr = [];
  const secondArr = [];
  for (const i of topics) {
    arr.push(i.slug.current);
    secondArr.push(i.title);
  }
  const newList = arr.filter((e) => e !== pageContext.slug);
  const newNameList = secondArr.filter((e) => e !== pageContext.title);
  const newData = newList.map((slug, index) => ({
    slug,
    name: newNameList[index],
  }));
  return (
    <Layout>
      <SEO />
      <TopicsHeader
        name={pageContext.title}
        description={pageContext.description}
        data={newData}
        page={pageContext.title}
        topics={topics}
      />
      <TopicsStyles>
        {featuredData.map((fea) => (
          <SingleFeaturedBlog data={fea} key={fea.slug.current} />
        ))}
        {blogData.length ? (
          <div className="wrapper">
            {blogData.map((i) => (
              <SingleBlog key={i.id} data={i} />
            ))}
          </div>
        ) : (
          <div className="nein">
            <p>Nothing to see here just yet</p>
          </div>
        )}
      </TopicsStyles>
    </Layout>
  );
};

Topics.propTypes = {
  data: PropTypes.shape({
    AllBlogs: PropTypes.any,
    FeaturedBlog: PropTypes.shape({
      nodes: PropTypes.any,
    }),
    topics: PropTypes.any,
  }),
  pageContext: PropTypes.shape({
    description: PropTypes.any,
    slug: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default Topics;

export const query = graphql`
  query Query($categoryRegex: String) {
    FeaturedBlog: allSanityPost(
      filter: {
        categories: { elemMatch: { title: { regex: $categoryRegex } } }
      }
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
    AllBlogs: allSanityPost(
      filter: {
        categories: { elemMatch: { title: { regex: $categoryRegex } } }
      }
      sort: { fields: publishedAt, order: DESC }
      skip: 1
    ) {
      nodes {
        title
        publishedAt(formatString: "MMM DD YYYY")
        slug {
          current
        }
        id
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
    topics: allSanityCategory(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        slug {
          current
        }
        title
      }
    }
  }
`;
