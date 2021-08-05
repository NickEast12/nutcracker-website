import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NutPen from '../../svgs/new-pen.svg';

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
        height: 300px;
        width: 100%;
      }
    }
    &--wrapper {
      padding: 1rem 0 3rem 0;
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
          ${({ theme }) => theme.Mixins.button};
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .content {
      &--img {
        width: 100%;
        margin: 0 auto;
        svg {
          height: 400px;
          width: 100%;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    padding-bottom: 3rem;
    .content {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 55%;
      grid-gap: 2rem;
      padding-bottom: 0;

      &--wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-bottom: 0;
    .content {
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
              <span>Content</span> creation and strategy done right should
              engage, inspire, influence and leave a lasting impression.
            </h3>
            <p>
              Content creation and strategy done right should engage, inspire,
              influence and leave a lasting impression.
            </p>
            <div className="content--wrapper--content--btn">
              <Link to="/content">
                <button type="button" className="btn btn--main">
                  <span>Find out how we do it</span>
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
