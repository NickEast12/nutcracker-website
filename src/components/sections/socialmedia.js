import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NutMedia from '../../svgs/nut-media.svg';

const SocialMediaStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .media {
    max-width: var(--maxWidth);
    width: 90%;
    margin: 0 auto;
    &--img {
      margin: 0;
      padding: 0 0 2rem 0;
      svg {
        width: 100%;
        height: auto;
      }
    }
    &--wrapper {
      h3 {
        color: var(--backgroundColour);
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
          }
          &:hover {
            background-color: var(--navy);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .media {
      padding: 1.5rem 0;
      &--img {
        width: 95%;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 750px) {
    padding-bottom: 1rem;
    .media {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'a b';
      &--img {
        grid-area: b;
        svg {
          width: 100%;
        }
      }
      &--wrapper {
        h3,
        p {
          /* color: var(--altBackground); */
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .media {
      &--img {
        width: 85%;
        svg {
        }
      }
      &--wrapper {
        /* padding-top: 5rem; */
        align-self: center;
      }
    }
  }
`;

const SocialMedia = () => {
  const i = true;
  return (
    <SocialMediaStyles>
      <div className="media">
        <div className="media--img">
          <NutMedia />
        </div>
        <div className="media--wrapper">
          <h3>
            <span>Social media</span> connects with your customers
          </h3>
          <p>
            Join the online conversation, build your brand and unlock new
            relationships.
          </p>
          <div className="media--wrapper--btn">
            <Link to="/social-media">
              <button type="button" className="btn">
                <span>Find out more</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </SocialMediaStyles>
  );
};

export default SocialMedia;
