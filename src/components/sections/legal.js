import React from 'react';
import styled from 'styled-components';

const LegalStyles = styled.section`
  width: 100%;
  div {
    width: 90%;
    margin: 0 auto;
    padding-top: 7rem;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 750px) {
      width: 80%;
    }
    @media only screen and (min-width: 1280px) {
      width: 50%;
    }
    h5 {
      color: var(--mainColour);
      font-size: 1.2rem;
      font-weight: 700;
    }
    h1 {
      margin-top: 1rem;
    }
    h6 {
      margin-top: 1rem;
      font-size: 1rem;
      span {
        color: var(--mainColour);
      }
    }
    p {
      margin: 1rem 0;
    }
    ul {
      list-style: inside;
      li {
        margin-top: 0.5rem;
      }
    }
    section {
      margin-bottom: 2rem;
    }
    a {
      color: var(--mainColour);
    }
  }
`;
const Legal = ({ title, date, children }) => (
  <LegalStyles>
    <div>
      <h5>LEGAL</h5>
      <h1>{title}</h1>
      <h6>
        Last updated on : <span>{date}</span>
      </h6>
      {children}
    </div>
  </LegalStyles>
);

export default Legal;
