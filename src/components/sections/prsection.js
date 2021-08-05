import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PRIcon from '../../svgs/new-bubbles.svg';

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
      width: 80%;
      margin: var(--auto);
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
      &--btn {
        ${({ theme }) => theme.Mixins.button};
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .design {
      padding: 0;
      &--img {
        width: 75%;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .design {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      &--img {
        width: 100%;
        height: 100%;
      }
      &--wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding-bottom: 0;
    .design {
      margin-bottom: 0;
      padding-bottom: 0;
      &--img {
        width: 80%;
      }
      &--wrapper {
        /* padding-top: 6.5rem; */
        align-self: center;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-bottom: 0;
    padding-top: 0;
    margin-top: 0;
    .design {
      margin-bottom: 0;
      padding-bottom: 0;
      &--img {
        width: 70%;
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
        </div>
        <div className="design--wrapper">
          <h3>
            <span>PR</span> that builds your brand online
          </h3>
          <p>
            Enhance your reputation and visibility within your chosen sectors
            and beyond with PR that generates response from your target
            audience, makes the news and tells the story that needs to be told.
          </p>
          <div className="design--wrapper--btn">
            <Link to="/pr">
              <button type="button" className="btn">
                <span>Find out how</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </DesignStyles>
  );
};

export default PagePR;
