import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DigitalIcon from '../../svgs/Digital.svg';
import XLogo from "../../svgs/x-logo.svg";

const DigitalStyles = styled.section`
  width: 100%;
  background: #fff;
  padding: 0;
  .Digital {
    max-width: var(--maxWidth);
    &--img {
      margin: 0;
      padding: 0;
      display: none;
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
        grid-area: a;
        display: block;
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
          <XLogo />
        </div>
        <div className="Digital--wrapper">
          <div className="Digital--wrapper--Digital">
            <h3>
            Stand <span>out</span> from the crowd
            </h3>
            <p>
            While nx3 is at our core, we know every brand’s journey is unique. That’s why we offer a full range of services, from one-off projects to flexible packages, to support your goals and drive results.
            </p>

            <div className="Digital--wrapper--Digital--btn">
              <Link to="/nx3/">
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


{/* <div className="text">
            <h1>Stand out from the crowd</h1>
            <h2>While nx3 is at our core, we know every brand’s journey is unique. That’s why we offer a full range of services, from one-off projects to flexible packages, to support your goals and drive results.</h2>
            <div className='hero-button'>
              <Link to="/nx3/">Find out more</Link>
            </div>
            </div> */}