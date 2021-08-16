import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DesignIcon from '../../svgs/nut-design.svg';

const DesignStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  background: var(--backgroundColour);
  .design {
    width: 90%;
    margin: 0 auto;
    max-width: 1000px;
    color: #fff;
    &--img {
      padding-bottom: 1rem;
      width: 100%;
      height: auto;

      svg {
        width: 100%;
        height: auto;
      }
    }
    &--wrapper {
      h3 {
        margin-bottom: 1.5rem;
        color: #fff;
        span {
          font-weight: 800;
          color: var(--yellow);
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
    .design {
      padding: 1.5rem 0;
      &--img {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 3rem 0;
    background-color: var(--backgroundColour);
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 5;
        h3 {
          color: #fff;
          span {
            color: var(--yellow);
          }
        }
        p {
          color: #fff;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding: 0;
    .design {
      padding: 3em 0;
      grid-gap: 2rem;
      &--wrapper {
        /* padding-top: 4.5rem; */
        align-self: center;
      }
      &--img {
        svg {
          width: 100%;
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
            Great <span>design</span> gets you noticed. We make that happen
          </h3>
          <p>
            Strong branding, design and creative digital content brings your
            brand to life, tells its own story and reawakens your purpose.
          </p>
          <div className="design--wrapper--btn">
            <Link to="/design-and-branding">
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
