import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NutMedia from '../../svgs/new-social-media.svg';

const SocialMediaStyles = styled.section`
  width: 100%;
  padding: 2rem 0;
  .media {
    max-width: 1000px;
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
        ${({ theme }) => theme.Mixins.button};
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
  @media only screen and (min-width: 768px) {
    padding-bottom: 1rem;
    padding-top: 0;
    margin-top: 0;
    .media {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'a b';
      grid-gap: 2rem;
      &--img {
        grid-area: b;
        svg {
          width: 100%;
        }
      }
      &--wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
