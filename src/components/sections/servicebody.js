import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../assets/images/favicon-32x32.png';

const ServiceBodyStyles = styled.section`
  width: 100%;
  .s-b {
    width: 90%;
    margin: var(--auto);
    padding: 2rem 0;
    &__left {
      h3 {
        font-size: 1.95rem;
        span {
          color: var(--mainColour);
          font-weight: inherit;
        }
      }
      strong {
        font-weight: 700;
        margin: 1rem 0;
        line-height: 1.5;
        display: block;
      }
      p {
        margin-bottom: 1rem;
        span {
          color: var(--mainColour);
          font-weight: 700;
          font-size: 1.2rem;
        }
      }
      ul {
        width: 85%;
        margin: var(--auto);
        list-style: none;
        li {
          padding: 0.75rem 0;
          position: relative;
          &::before {
            position: absolute;
            left: -35px;
            top: 6px;
            background-image: url(${Icon});
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            content: '';
          }
        }
      }
    }
    &__right {
      margin-top: 2rem;
      svg {
        width: 100%;
        height: auto;
      }
    }
    .large-icon-fix {
      margin: var(--auto);
      text-align: center;
      svg {
        width: 20%;
        height: 100%;
        margin: var(--auto);
        @media only screen and (min-width: 768px) {
          width: 15%;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding: 1.5rem 0;
    .s-b {
      max-width: var(--maxWidth);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.1rem;
      &__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &__right {
        margin: var(--auto);
        svg {
          width: 450px;
        }
      }
      .large-icon-fix {
        svg {
          width: 30%;
          height: auto;
        }
      }
    }
  }
  ${(props) =>
    props.$digital &&
    css`
      .s-b__left {
        p {
          a {
            font-weight: 500;
            text-decoration: underline;
            &:hover,
            &:active {
              color: var(--mainColour);
            }
          }
        }
      }
      .s-b__right {
        width: 100%;
        margin: 1rem auto;
        text-align: center;
        svg {
          max-width: 400px;
          margin: var(--auto);
        }
      }
      @media only screen and (min-width: 1024px) {
        .s-b {
          grid-template-columns: 55% 1fr;
        }
      }
    `}
`;
const ServiceBody = (props) => {
  const i = true;
  return (
    <ServiceBodyStyles {...props}>
      <div className="s-b">
        <div className="s-b__left">{props.children}</div>
        <div
          className={props.alt ? 's-b__right large-icon-fix' : 's-b__right '}
        >
          {props.icon}
        </div>
      </div>
    </ServiceBodyStyles>
  );
};

ServiceBody.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
};

export default ServiceBody;
