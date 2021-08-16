import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BlogHeaderStyles = styled.header`
  width: 100%;
  background-color: #fff;
  padding-top: 5rem;
  padding-bottom: 3rem;
  background-color: var(--backgroundColour);
  .blog__header {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    text-align: center;
    &__content {
      margin-top: 1.5rem;

      h1 {
        margin: 0.5rem auto;
        color: #fff;
        max-width: 850px;

        span {
          font-weight: 800;
          &:nth-child(1) {
            color: var(--yellow);
          }
          &:nth-child(2) {
            color: var(--mainColour);
          }
          &:nth-child(3) {
            color: var(--accent);
          }
        }
      }
    }
    &__featured {
      margin-top: 2.5rem;
      h4 {
        margin-top: 1rem;
        color: var(--mainColour);
        font-weight: 800;
      }
    }
  }
  @media only screen and (min-width: 765px) {
    padding: 6rem 0 4rem 0;
  }
  @media only screen and (min-width: 1280px) {
    padding: 9rem 0 6rem 0;
    .blog__header {
      display: grid;
      /* grid-template-columns: 35% 1fr; */
      grid-gap: 3rem;
      &__content {
        padding-top: 0rem;
      }
      &__featured {
        margin-top: 0;
        width: 100%;
      }
    }
  }
`;
const BlogHeader = ({ children }) => {
  const i = true;
  return (
    <BlogHeaderStyles>
      <div className="blog__header">
        <div className="blog__header__content">
          <h1>{children}</h1>
        </div>
      </div>
    </BlogHeaderStyles>
  );
};

BlogHeader.propTypes = {
  children: PropTypes.any,
};

export default BlogHeader;
