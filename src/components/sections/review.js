import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import { gsap } from 'gsap';
import GetImage from '../functional/getImage';

const ReviewStyles = styled.section`
  width: 100%;
  padding: 2rem 0 3rem 0;
  background-color: #fff;
  border-top: solid 2px var(--altBackground);
  border-bottom: solid 2px var(--altBackground);
  text-align: center;
  @media only screen and (min-width: 1024px) {
    /* margin: 3rem 0 2rem 0; */
  }
  .review {
    max-width: var(--maxWidth);
    width: 80%;
    margin: 0 auto;

    @media only screen and (min-width: 750px) {
      width: 70%;
    }
    @media only screen and (min-width: 1024px) {
      width: 60%;
    }
    &__img {
      width: 90px;
      height: auto;
      margin: 1rem auto;
      text-align: center;
      @media only screen and (min-width: 750px) {
        width: 250px;
      }
      .gatsby-image-wrapper {
        width: 100%;
        height: auto;
      }
    }
    blockquote {
      padding: 0.5rem 0;
      font-size: var(--titleExtraSmall);
      max-width: 700px;
      margin: var(--auto);
      line-height: 1.5;
      letter-spacing: -0.1px;
      color: var(--backgroundColour);
      font-weight: 300;
    }
    h5 {
      margin-top: 1rem;
      color: var(--mainColour);
      font-weight: 800;
    }
    h6 {
      margin-top: 0.5rem;
      color: var(--backgroundColour);
      font-weight: 300;
      font-size: var(--titleExtraSmall);
    }
  }
`;
const Review = ({ reviewData }) => {
  const i = true;
  return (
    <ReviewStyles>
      <div className="review">
        <div className="review__img ">
          <GetImage data={reviewData.image} />
        </div>
        <blockquote>"{reviewData.quote}"</blockquote>
        <h5>{reviewData.name}</h5>
        <h6>{reviewData.job}</h6>
      </div>
    </ReviewStyles>
  );
};

Review.propTypes = {
  reviewData: PropTypes.shape({
    asset: PropTypes.any,
    image: PropTypes.shape({
      asset: PropTypes.shape({
        fluid: PropTypes.any,
      }),
    }),
    job: PropTypes.any,
    name: PropTypes.any,
    quote: PropTypes.any,
  }),
};

export default Review;
