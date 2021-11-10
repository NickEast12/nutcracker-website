import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GetImage from './getImage';

const SingleBlogStyles = styled.article`
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-radius: 10.5px;
  background-color: #fff;
  border: 2px solid rgb(236, 236, 236);
  padding: 0;
  transition: all 0.35s ease;

  .m-i {
    .gatsby-image-wrapper {
      width: 100%;
      height: auto;
      border-radius: 8.5px 8.5px 0 0;
    }
  }
  .b-c {
    padding: 1.5rem 1rem 1rem 1rem;
    border-radius: 0 0 8.5px 8.5px;

    border-top: none;
    display: flex;
    flex-direction: column;

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
    .author {
      border-top: solid 1px rgba(0, 0, 0, 0.15);
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 1rem;
      padding-top: 0.5rem;
      &__img {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        .gatsby-image-wrapper {
          border-radius: 50px;
        }
      }
      section {
        margin: 0;
        h6 {
          font-weight: 700;
          padding: 6px 0 0 9px;
          margin: 0;
        }
        p {
          color: var(--backgroundColour);
          padding: 0 0 0 9px;
          font-family: var(--slab);
          margin: 0;
          font-size: 0.85rem;
        }
        span {
          color: var(--mainColour);
        }
      }
    }
  }
  &:hover {
    border: solid var(--mainColour) 2px;
    transform: translateY(-10px);
  }
`;
const SingleBlog = ({ data }) => {
  const i = true;
  return (
    <SingleBlogStyles>
      <Link
        to={`/blog/${data.categories[0].slug.current}/${data.slug.current}`}
      >
        <section className="m-i">
          <GetImage data={data.mainImage} />
        </section>
        <section className="b-c">
          <h6>{`${data.categories[0].title} `}</h6>
          <h3>{data.title}</h3>
          <p className="meta">{`${data.publishedAt} | ${data.readingTimeInMinutes} min read`}</p>
          <div className="author">
            <div className="author__img">
              <GetImage data={data.authors[0].author.image} />
            </div>
            <section>
              <h6>{data.authors[0].author.name}</h6>
              <p>{data.authors[0].author.position}</p>
            </section>
          </div>
        </section>
      </Link>
    </SingleBlogStyles>
  );
};

SingleBlog.propTypes = {
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

export default SingleBlog;
