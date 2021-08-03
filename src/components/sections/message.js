import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MessageStyles = styled.section`
  width: 100%;
  padding: 5rem 0;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    display: block;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--backgroundColour);
    opacity: 0.75;
    content: '';
    z-index: 15;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 1;
  }
  div {
    width: 90%;
    height: 44vh;
    @media only screen and (min-width: 375px) {
      height: 49vh;
    }
    @media only screen and (min-width: 414px) {
      height: 54vh;
    }
    @media only screen and (min-width: 600px) {
      height: 10rem;
    }
    @media only screen and (min-width: 1280px) {
      height: 52.5vh;
    }
    max-width: var(--maxWidth);
    margin: 5rem auto;
    text-align: center;
    position: relative;
    z-index: 20;
    h1 {
      font-size: 5rem;
    }
    h1,
    h4,
    p {
      color: #fff;
    }
    h4 {
      margin: 0.5rem 0;
      font-size: 1.5rem;
    }
    p {
      margin-top: 1.5rem;
    }
    button {
      margin-top: 1rem;
      width: 130px;
    }
    @media only screen and (min-width: 1280px) {
      padding-top: 4rem;
    }
  }
`;
const Message = ({ title, subtitle, text }) => {
  const i = true;
  return (
    <MessageStyles>
      <img
        src="https://media.giphy.com/media/xTiTnLbo0KIJ8hrNjG/giphy.gif"
        alt=""
        srcSet=""
      />
      <div>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <Link to="/">
          <button type="button" className="btn btn--main">
            <span>Home</span>
          </button>
        </Link>
      </div>
    </MessageStyles>
  );
};

export default Message;
