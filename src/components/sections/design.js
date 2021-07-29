import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DesignIcon from '../../svgs/nut-design.svg';

const DesignStyles = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 3rem 0;
  .design {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    color: var(--backgroundColour);
    &--img {
      padding-bottom: 2rem;
      width: 100%;
      height: 100%;

      svg {
        width: 100%;
        height: auto;
      }
    }
    &--wrapper {
      h3 {
        margin-bottom: 1.5rem;
        span {
          font-weight: 800;
          color: var(--mainColour);
        }
      }
      p {
      }
      &--btn {
        width: 50%;
        margin-top: 1.5rem;
        button {
          background: var(--mainColour);
          border: none;
          span {
            color: #fff;
          }
          &:hover {
            background-color: var(--navy);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .design {
      padding: 1.5rem 0;
      &--img {
        width: 95%;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 750px) {
    padding-bottom: 2rem;
    .design {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &--img {
        svg {
          width: 100%;
          z-index: -2;
        }
      }
      &--wrapper {
        position: relative;
        z-index: 5;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 0;
    .design {
      padding: 0;
      &--wrapper {
        /* padding-top: 4.5rem; */
        align-self: center;
      }
      &--img {
        svg {
          width: 90%;
          height: auto;
        }
      }
    }
  }
`;
const Design = () => {
  const i = true;
  return (
    <DesignStyles>
      <div className="design">
        <div className="design--img">
          <DesignIcon />
        </div>
        <div className="design--wrapper">
          <h3>
            Good <span>design</span> needs to get noticed. We'll make that
            happen
          </h3>
          <p>
            It’s a reflection of your brand, your team, your products. Done
            well, it creates a powerful emotional resonance with your audience
            that will underpin your brand.
          </p>
          <div className="design--wrapper--btn">
            <Link to="/design">
              <button type="button" className="btn">
                <span>Find out more</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </DesignStyles>
  );
};

export default Design;
