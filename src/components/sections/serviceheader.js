import React from 'react';
import styled from 'styled-components';

const ServiceHeaderStyles = styled.header`
  width: 100%;
  /* background-color: var(--backgroundColour); */
  padding: 7rem 0 2rem 0;
  .s-h {
    width: 85%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    text-align: center;
    h2 {
      color: #fff;
      color: var(--backgroundColour);
      font-size: 1.2rem;
    }
    h1 {
      color: var(--backgroundColour);
      margin: 1rem auto;
      font-weight: 300;
      max-width: 900px;
      /* font-size: 2.8rem; */
      span {
        font-weight: 700;
        color: var(--mainColour);
      }
      .second {
        color: var(--yellow);
      }
      .third {
        color: var(--accent);
      }
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 7rem 0 4rem 0;
  }
  @media only screen and (min-width: 1024px) {
    padding: 10rem 0 4rem 0;
  }
  @media only screen and (min-width: 1280px) {
    padding: 10rem 0 1rem 0;
  }
`;
const ServiceHeader = ({ page, children }) => {
  const i = true;
  return (
    <ServiceHeaderStyles>
      <div className="s-h">
        <h2>{page}</h2>
        {children}
      </div>
    </ServiceHeaderStyles>
  );
};

export default ServiceHeader;
