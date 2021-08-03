import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const EmailStyles = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .e-s {
    width: 85%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h6 {
      color: var(--mainColour);
      font-weight: 700;
    }
    h1 {
      margin: 1rem 0;
      max-width: 750px;
    }
    a {
      button {
        margin-top: 2rem;
        max-width: 250px;
      }
    }
  }
`;
const Email = ({ message, title, text }) => {
  const i = true;
  return (
    <EmailStyles>
      <div className="e-s">
        <h6>{message}</h6>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to="/">
          <button type="button" className="btn btn--main">
            <span>Home</span>
          </button>
        </Link>
      </div>
    </EmailStyles>
  );
};

Email.propTypes = {
  message: PropTypes.any,
  text: PropTypes.any,
  title: PropTypes.any,
};

export default Email;
