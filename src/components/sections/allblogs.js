import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ReducedBlog from '../functional/reducedblog';
import SingleBlog from '../functional/singleblog';

const PopularBlogsStyles = styled.section`
  width: 100%;
  padding: 1rem 0;
  .recent {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    > h3 {
      text-align: center;
      font-weight: 700;
    }
    &__wrapper {
      /* margin-top: 2rem; */
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
      &__wrapper {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
const AllBlogs = ({ data }) => {
  console.log(data);
  return (
    <PopularBlogsStyles>
      <div className="recent">
        <div className="recent__wrapper">
          {data.map((recent) => (
            <ReducedBlog key={recent.title} data={recent} alt />
          ))}
        </div>
      </div>
    </PopularBlogsStyles>
  );
};

AllBlogs.propTypes = {
  data: PropTypes.any,
};

export default AllBlogs;
