import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DigitalIcon from '../../svgs/Digital.svg';

const DigitalStyles = styled.section`
  width: 100%;
  background: #fff;
  padding: 0;
  .Digital {
    max-width: var(--maxWidth);
    &--img {
      margin: 0;
      padding: 0;
      text-align: center;
      margin: var(--auto);
      width: 80%;
      svg {
        margin: 1rem auto;
        height: auto;
        max-width: 400px;
      }
    }
    &--wrapper {
      padding: 1rem 0 3rem 0;
      &--Digital {
        color: var(--backgroundColour);
        width: 90%;
        margin: 0 auto;
        h3 {
          margin: 1rem auto;
          span {
            color: var(--mainColour);
            font-weight: 800;
          }
        }
        p {
          font-size: var(--text);
        }
        &--btn {
          ${({ theme }) => theme.Mixins.button};
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 3rem;
    .Digital {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 55%;
      grid-gap: 2rem;
      padding-bottom: 0;
      grid-template-areas: 'b a';
      &--img {
        grid-area: b;
      }
      &--wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-bottom: 0;
    .Digital {
      grid-gap: 0;
      &--img {
        svg {
          height: 550px;
          width: 100%;
        }
      }
      &--wrapper {
        width: 90%;
        align-self: center;
      }
    }
  }
`;
const Digital = () => {
  const i = true;
  return (
    <DigitalStyles>
      <div className="Digital">
        <div className="Digital--img">
          <DigitalIcon />
        </div>
        <div className="Digital--wrapper">
          <div className="Digital--wrapper--Digital">
            <h3>
              Getting your <span>brand</span> in front of your audience,
              wherever they are online
            </h3>
            <p>
              From SEO to PPC to paid social, digital marketing makes sure your
              brand appears in front of your customers at every step on their
              path to purchase – from social media to search results – bringing
              inbound leads to you.
            </p>

            <div className="Digital--wrapper--Digital--btn">
              <Link to="/digital">
                <button type="button" className="btn btn--main">
                  <span>Find out more</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DigitalStyles>
  );
};

export default Digital;
