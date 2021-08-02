import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/images/favicon-32x32.png';

const ServiceBodyStyles = styled.section`
  width: 100%;
  .s-b {
    width: 90%;
    margin: var(--auto);
    padding: 2rem 0;
    &__left {
      p {
        margin-bottom: 1rem;
        span {
          color: var(--mainColour);
          font-weight: 700;
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
          width: 400px;
        }
      }
    }
  }
`;
const ServiceBody = ({ children, icon }) => {
  const i = true;
  return (
    <ServiceBodyStyles>
      <div className="s-b">
        <div className="s-b__left">{children}</div>
        <div className="s-b__right">{icon}</div>
      </div>
    </ServiceBodyStyles>
  );
};

ServiceBody.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
};

export default ServiceBody;
