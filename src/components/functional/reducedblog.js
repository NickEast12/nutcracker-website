import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SingleBlogStyles = styled.article`
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-radius: 10.5px;
  background-color: #fff;
  border: solid var(--altBackground) 2px;
  padding: 0;
  transition: all 0.35s ease;
  .b-c {
    padding: 1.5rem 1rem 1rem 1rem;
    border-radius: 8.5px;
    border: 1px solid rgb(236, 236, 236);
    border-top: none;
    h6 {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--mainColour);
    }
    h3 {
      margin-top: 0.55rem;
      font-size: var(--titleSemiMedium);
    }
    .meta {
      color: rgba(0, 0, 0, 0.5);
    }
    p {
      margin-top: 1rem;
      color: var(--backgroundColour);
    }
  }
  &:hover {
    border: solid var(--mainColour) 2px;
    transform: translateY(-10px);
  }
`;
const ReducedBlog = ({ data }) => {
  const i = true;
  return (
    <SingleBlogStyles>
      <Link
        to={`/blog/${data.categories[0].slug.current}/${data.slug.current}`}
      >
        <section className="b-c">
          <h6>{`${data.categories[0].title} `}</h6>
          <h3>{data.title}</h3>
          <p className="meta">{`${data.readingTimeInMinutes} min read`}</p>
        </section>
      </Link>
    </SingleBlogStyles>
  );
};

ReducedBlog.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.any,
    categories: PropTypes.any,
    excerpt: PropTypes.any,
    mainImage: PropTypes.shape({
      alt: PropTypes.any,
      asset: PropTypes.shape({
        fluid: PropTypes.any,
      }),
    }),
    publishedAt: PropTypes.any,
    readingTimeInMinutes: PropTypes.any,
    slug: PropTypes.shape({
      current: PropTypes.any,
    }),
    title: PropTypes.any,
  }),
};

export default ReducedBlog;
