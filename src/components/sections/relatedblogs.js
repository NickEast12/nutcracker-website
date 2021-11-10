import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SingleBlog from '../functional/singleblog';

const RelatedBlogsStyles = styled.section`
  width: 100%;
  background-color: #fff;
  padding-top: 3rem;
  .empty {
    display: none;
  }
  .related {
    width: 90%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 1rem 0;
    max-width: 1100px;
    > h4 {
      font-size: 1.75rem;
      text-align: center;
      padding-bottom: 2rem;
    }
    @media only screen and (min-width: 414px) {
      width: 85%;
    }
    @media only screen and (min-width: 701px) {
      padding-top: 2rem;
      &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 2rem 0;
        grid-gap: 1.5rem;
      }
    }
    @media only screen and (min-width: 1280px) {
      &__grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
const RelatedBlogs = ({ relatedBlogsData, alt }) => {
  const data = relatedBlogsData.nodes;
  return (
    <RelatedBlogsStyles>
      <div className={data.length === 0 ? 'empty' : 'related'}>
        <h4>Fancy reading more?</h4>
        <div className="related__grid">
          {data.map((blog) => (
            <SingleBlog data={blog} key={blog.title} alt />
          ))}
        </div>
      </div>
    </RelatedBlogsStyles>
  );
};

RelatedBlogs.propTypes = {
  alt: PropTypes.any,
  relatedBlogsData: PropTypes.any,
};

export default RelatedBlogs;
