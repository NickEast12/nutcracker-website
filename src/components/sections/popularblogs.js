import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SingleBlog from '../functional/singleblog';

const PopularBlogsStyles = styled.section`
  width: 100%;
  background-color: var(--altBackground);
  padding: 3rem 0 4rem 0;
  .recent {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    > h3 {
      text-align: center;
      font-weight: 700;
    }
    &__wrapper {
      margin-top: 2rem;
    }
    &__btn {
      width: 80%;
      margin: 1.5rem auto 0 auto;
    }
    @media only screen and (min-width: 750px) {
      &__wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
      }
      &__btn {
        margin-top: 3rem;
        max-width: 250px;
      }
    }
    @media only screen and (min-width: 1024px) {
      width: 85%;
      &__wrapper {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
const PopularBlogs = ({ data }) => {
  const i = true;
  return (
    <PopularBlogsStyles>
      <div className="recent">
        <h3>Most Popular</h3>
        <div className="recent__wrapper">
          {data.map((recent) => (
            <SingleBlog key={recent.title} data={recent} alt />
          ))}
        </div>
      </div>
    </PopularBlogsStyles>
  );
};

PopularBlogs.propTypes = {
  data: PropTypes.any,
};

export default PopularBlogs;
