import { Link, navigate } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';
// local imports
import Tree from '../icons/Tree';

const HomepageStyled = styled.section`
  width: 100%;
  background: var(--backgroundColour);
  @media only screen and (min-width: 375px) {
    height: 100vh;
  }

  .homepage {
    width: 90%;
    margin: 0 auto;
    padding: 6rem 0 2rem 0;
    max-width: var(--maxWidth);
    &--icon {
      display: none;
    }
    &--content {
      color: #fff;
      width: 95%;
      margin: 0 auto;

      h1 {
        color: #fff;
        font-size: 2.5rem;
        span {
          color: var(--mainColour);
          font-weight: 800;
        }
      }
      p {
        margin-top: 1rem;
      }

      &--btns {
        margin: 2rem auto 2rem 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        button {
          width: 100%;
          margin-bottom: 0.85rem;
        }
        @media only screen and (min-width: 768px) {
          flex-direction: row;
          justify-content: space-between;
          button {
            width: 48%;
          }
        }
      }
      h3 {
        color: #fff;
        font-size: 1.9rem;
        span {
          color: var(--yellow);
          font-weight: 800;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .homepage {
      padding: 8rem 0 0 0;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 100%;
    padding: 1rem 0 4rem 0;
    .homepage {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'a b';
      grid-gap: 4rem;
      &--icon {
        display: block;
        grid-area: b;
        svg {
          margin-top: -2rem;
          height: 100%;
          width: 100%;
          max-width: 410px;
        }
      }
      &--content {
        grid-area: a;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 3rem;
    .homepage {
      &--content {
        padding-top: 5rem;
      }
      &--icon {
        width: 90%;
        height: auto;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 3rem;
    .homepage {
      padding-bottom: 0.15rem;
      grid-gap: 8rem;
      &--content {
        padding-top: 2rem;
      }
      &--icon {
        width: 90%;
        height: 100%;
        svg {
          width: 100%;
          height: 100%;
          margin-top: -3rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 3rem;
    .homepage {
      padding-bottom: 1rem;
      grid-gap: 8rem;
      &--content {
        padding-top: 2.5rem;
      }
      &--icon {
        width: 100%;
        height: 100%;
        svg {
          width: 100%;
          height: 100%;
          margin-top: -3rem;
        }
      }
    }
  }
`;
const Homepage = () => {
  const homepageRef = useRef(null);
  const intersection = useIntersection(homepageRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  const fadeIn = (elm) => {
    gsap.to(elm, {
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
    <HomepageStyled ref={homepageRef}>
      <div className="homepage">
        <div className="homepage--icon willAnimate fadeIn ">
          <Tree />
        </div>
        <div className="homepage--content">
          <h1 className="willAnimate fadeIn">
            Marketing that <span>transforms</span> your business
          </h1>
          <p className="willAnimate fadeIn">
            A good marketing strategy turns ideas into actions. The result? New
            leads. New customers. New possibilities.
          </p>
          <div className="homepage--content--btns">
            <button
              type="button"
              className="btn btn--main willAnimate fadeIn "
              onClick={() => {
                navigate('/b2b-marketing-strategy');
              }}
            >
              <span>Find out more</span>
            </button>

            <button
              type="button"
              className="btn btn--alt willAnimate fadeIn"
              onClick={() => {
                navigate('/contact');
              }}
            >
              <span>Contact us</span>
            </button>
          </div>
          <h3 className="willAnimate fadeIn">
            Stand <span>out</span> from the crowd
          </h3>
        </div>
      </div>
    </HomepageStyled>
  );
};

export default Homepage;
