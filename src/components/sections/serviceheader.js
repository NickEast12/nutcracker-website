import React from 'react';
import styled from 'styled-components';

const ServiceHeaderStyles = styled.header`
  width: 100%;
  background-color: var(--backgroundColour);
  padding: 6rem 0 3rem 0;
  .s-h {
    width: 85%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h5 {
      color: #fff;
      color: var(--yellow);
    }
    h1 {
      color: #fff;
      margin: 1rem 0;
      font-weight: 300;
      strong {
        font-weight: 700;
        span {
          font-weight: 700;
          color: var(--mainColour);
        }
        .second {
          color: var(--yellow);
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 7rem 0 4rem 0;
  }
  @media only screen and (min-width: 1024px) {
    padding: 8rem 0 5rem 0;
  }
`;
const ServiceHeader = ({ page, children }) => {
  const i = true;
  return (
    <ServiceHeaderStyles>
      <div className="s-h">
        <h5>{page}</h5>
        {children}
      </div>
    </ServiceHeaderStyles>
  );
};

export default ServiceHeader;
