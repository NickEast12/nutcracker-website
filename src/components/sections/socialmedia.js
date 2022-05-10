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
      grid-template-areas: 'b a';
      grid-gap: 2rem;
      &--img {
        grid-area: a;
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
            Grow your business online using <span>social media</span>
          </h3>
          <p>
            Whether you want to build awareness of your brand, drive sales,
            engage new customers or be part of the conversation, social media is
            the place to do it.
          </p>
          <div className="media--wrapper--btn">
            <Link to="/social-media-marketing">
              <button type="button" className="btn">
                <span>Show me how</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </SocialMediaStyles>
  );
};

export default SocialMedia;
