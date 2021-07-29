import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NutPen from '../../svgs/nut-pen.svg';

const ContentStyles = styled.section`
  width: 100%;
  background: #fff;
  padding: 0;
  .content {
    max-width: var(--maxWidth);
    &--img {
      margin: 0;
      padding: 0;
      svg {
        height: auto;
        width: 100%;
        margin-bottom: -5px;
      }
    }
    &--wrapper {
      padding: 3rem 0;
      &--content {
        color: var(--backgroundColour);
        width: 90%;
        margin: 0 auto;
        h3 {
          margin-bottom: 1.5rem;
          span {
            color: var(--mainColour);
            font-weight: 800;
          }
        }
        p {
          font-size: var(--text);
        }
        &--btn {
          width: 50%;
          margin-top: 1.5rem;
          button {
            background: var(--mainColour);
            border: none;
            &:hover {
              background-color: var(--navy);
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .content {
      padding: 1.5rem 0;
      &--img {
        width: 95%;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 750px) {
    padding-bottom: 3rem;
    .content {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      padding-top: 3rem;
      padding-bottom: 0;
      &--img {
        position: relative;
        width: 100%;
        height: 100%;
        /* svg {
          position: absolute;
          top: 0;
          left: -4rem;
          height: 100%;
          width: auto;

          z-index: 0;
        } */
      }
      &--wrapper {
        position: relative;
        z-index: 5;
        background: none;
        padding: 3rem 0 4rem 0;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-bottom: 0;
    .content {
      padding: 2rem 0 0 0;
      grid-gap: 0;
      &--img {
        svg {
          width: 85%;
          height: 100%;
          /* top: -5.3rem; */
          left: 0;
        }
      }
      &--wrapper {
        /* padding-top: 4rem; */
        align-self: center;
      }
    }
  }
`;
const Content = () => {
  const i = true;
  return (
    <ContentStyles>
      <div className="content">
        <div className="content--img">
          <NutPen />
        </div>
        <div className="content--wrapper">
          <div className="content--wrapper--content">
            <h3>
              There is power in <span>content.</span> We know how to unlock it
            </h3>
            <p>
              Our content creation and strategy are designed to engage, inspire
              and influence your audience – with measurable results.
            </p>
            <div className="content--wrapper--content--btn">
              <Link to="/content">
                <button type="button" className="btn btn--main">
                  <span>Find out more</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContentStyles>
  );
};

export default Content;
