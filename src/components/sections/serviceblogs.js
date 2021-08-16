import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SingleBlog from '../functional/singleblog';

const ServiceBlogsStyles = styled.section`
  width: 100%;
  padding: 2rem 0;
  .s-b {
    width: 90%;
    margin: var(--auto);
    padding: 2rem 0;
    max-width: var(--maxWidth);
    h4 {
      font-size: 1.75rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    > p {
      text-align: center;
      margin: 1rem 0;
    }
    &__grid {
      width: 90%;
      margin: var(--auto);
      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
      }
      @media only screen and (min-width: 1024px) {
        width: 85%;
      }
      @media only screen and (min-width: 1280px) {
        width: 90%;
      }
    }
  }
`;
const ServiceBlogs = ({ data, title }) => {
  const i = true;

  return (
    <ServiceBlogsStyles>
      <div className={data.length === 0 ? 'empty' : 's-b'}>
        <h4>{title}</h4>
        <div className="s-b__grid">
          {data.map((blog) => (
            <SingleBlog data={blog} key={blog.title} alt />
          ))}
        </div>
      </div>
    </ServiceBlogsStyles>
  );
};

ServiceBlogs.propTypes = {
  data: PropTypes.any,
};

export default ServiceBlogs;
