import React from 'react';
import styled from 'styled-components';

const ServiceSectionStyles = styled.section`
  width: 100%;
  padding: 0.5rem 0;
  @media only screen and (min-width: 414px) {
    padding: 1rem 0;
  }
  .s-s {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    text-align: center;
    h2 {
      font-size: 1.55rem;
      max-width: 850px;
      margin: 1rem auto;
      font-weight: 700;
    }
    p {
      margin: var(--auto);
      max-width: 750px;
      margin-bottom: 1rem;
      color: var(--backgroundColour);
    }
    @media only screen and (min-width: 1280px) {
      /* padding-left: 7.5rem; */
    }
  }
`;
const AltServiceSection = ({ children, alt, icon }) => {
  const i = true;
  return (
    <ServiceSectionStyles>
      <div className="s-s">{children}</div>
    </ServiceSectionStyles>
  );
};

export default AltServiceSection;
