import React from 'react';
import styled from 'styled-components';

const ServiceSectionStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  background-color: var(--backgroundColour);
  .s-s {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h3 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: #fff;
      span {
        color: var(--accent);
        font-weight: inherit;
      }
      @media only screen and (min-width: 375px) {
        font-size: 1.95rem;
      }
    }
    p {
      margin-bottom: 1rem;
      max-width: 750px;
      color: #fff;
    }
    @media only screen and (min-width: 1024px) {
      /* padding-left: 4rem; */
    }
  }
`;
const ServiceSection = ({ children, alt }) => {
  const i = true;
  return (
    <ServiceSectionStyles>
      <div className="s-s">{children}</div>
    </ServiceSectionStyles>
  );
};

export default ServiceSection;
