import { Link, navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// local imports
import AnimatedTree from '../../svgs/tree-animated.svg';

const HomepageStyled = styled.section`
  width: 100%;
  .homepage {
    width: 90%;
    margin: 0 auto;
    padding: 5rem 0 0 0;
    max-width: var(--maxWidth);
    &--icon {
      /* padding: 3rem 0; */
      max-width: 400px;
      margin: 0 auto;
      svg {
        width: 100%;
        text-align: center;
        a {
          font-size: 4.85px;
        }
      }
    }
    &--content {
      color: #000;
      width: 95%;
      margin: 0 auto;
      h1 {
        color: var(--backgroundColour);
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
        justify-content: space-between;
        button {
          width: 48%;
          margin-bottom: 0.85rem;
        }
      }
      h3 {
        color: var(--backgroundColour);
        span {
          color: var(--yellow);
          font-weight: 800;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .homepage {
      padding-top: 3.25rem;
    }
  }
  @media only screen and (min-width: 750px) {
    .homepage {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'a b';
      grid-gap: 2rem;
      padding-top: 6rem;
      &--icon {
        grid-area: b;
        padding: 0;
        svg {
        }
      }
      &--content {
        grid-area: a;
        padding-top: 2rem;
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
        width: 100%;
        height: auto;
        svg {
          max-width: 600px;
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
const Homepage = () => {
  const i = true;
  return (
    <HomepageStyled>
      <div className="homepage">
        <div className="homepage--icon">
          {/* <TreeIcon /> */}
          {/* <AnimatedTree /> */}
        </div>
        <div className="homepage--content">
          <h1>
            Marketing that <span>transforms</span> your business
          </h1>
          <p>
            A good marketing strategy turns ideas into actions. The result? New
            leads. New customers. New possibilities.
          </p>
          <div className="homepage--content--btns">
            <button
              type="button"
              className="btn btn--main"
              onClick={() => {
                navigate('/marketing');
              }}
            >
              <span>Find out more</span>
            </button>

            <button
              type="button"
              className="btn btn--alt"
              onClick={() => {
                navigate('/contact');
              }}
            >
              <span>Contact us</span>
            </button>
          </div>
          <h3>
            Stand <span>out</span> from the crowd
          </h3>
        </div>
      </div>
    </HomepageStyled>
  );
};

export default Homepage;
