import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap/gsap-core';
import { useIntersection } from 'react-use';
import styled from 'styled-components';

const TeamHeaderStyles = styled.header`
  width: 100%;
  background-color: var(--backgroundColour);
  padding-top: 5rem;
  .team--header {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    padding-bottom: 3rem;
    color: var(--altBackground);
    button {
      transition: inherit;
    }
    h1 {
      margin: 1rem 0;
      color: var(--altBackground);
      span {
        font-weight: 800;
        color: var(--mainColour);
      }
    }
    p {
      font-size: var(--titleExtraSmall);
    }
    button {
      margin-top: 1.5rem;
      width: 75%;
      &:hover {
        background-color: var(--mainColour);
        span {
          color: var(--backgroundColour);
        }
      }
    }
  }
  @media only screen and (min-width: 750px) {
    .team--header {
      &--wrapper {
        width: 75%;
        margin: 0 auto 0 0;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding: 6rem 0 3rem 0;
  }
  @media only screen and (min-width: 1280px) {
    .team--header {
      padding: 3rem 0;
    }
  }
`;
const TeamHeader = () => {
  const teamRef = useRef(null);
  const intersection = useIntersection(teamRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      delay: 0.5,
      stagger: {
        amount: 0.4,
      },
    });
  };
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    intersection && intersection.intersectionRatio < 0.2
      ? ''
      : fadeIn('.fadeIn');
  });
  return (
    <TeamHeaderStyles ref={teamRef}>
      <div className="team--header">
        <div className="team--header--wrapper">
          <h1 className="willAnimate fadeIn">
            The Nutcracker team will <span>get you noticed.</span>
          </h1>
          <p className="willAnimate fadeIn">
            Every member of the team brings something unique to showcase the
            best of your business.
          </p>
          <Link to="/contact">
            <button className="btn btn--main willAnimate fadeIn" type="button">
              <span>Contact us</span>
            </button>
          </Link>
        </div>
      </div>
    </TeamHeaderStyles>
  );
};

export default TeamHeader;
