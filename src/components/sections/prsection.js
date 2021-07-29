import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PRIcon from '../../svgs/nut-pr.svg';
import PRIconAnimated from '../../svgs/new-speechbubbles.svg';

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
    .design {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      &--img {
        width: 100%;
        height: 100%;
      }
      &--wrapper {
        padding-top: 1.5rem;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-bottom: 0;
    .design {
      margin-bottom: 0;
      padding-bottom: 0;
      &--img {
        svg {
          width: 90%;
          height: 100%;
        }
      }
      &--wrapper {
        /* padding-top: 6.5rem; */
        align-self: center;
      }
    }
  }
`;
const PagePR = () => {
  const i = true;
  return (
    <DesignStyles>
      <div className="design">
        <div className="design--img">
          <PRIcon />
          {/* <PRIconAnimated /> */}
        </div>
        <div className="design--wrapper">
          <h3>
            Tell the stories that need to be told with a different kind of
            <span> PR</span>
          </h3>
          <p>
            It’s a reflection of your brand, your team, your products. Done
            well, it creates a powerful emotional resonance with your audience
            that will underpin your brand.
          </p>
          <div className="design--wrapper--btn">
            <Link to="/pr">
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

export default PagePR;
