import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';

const ContactHeaderStyles = styled.header`
  width: 100%;
  padding: 4rem 0 2rem 0;
  background-color: var(--backgroundColour);
  .contact--header {
    max-width: var(--maxWidth);
    width: 90%;
    margin: 4rem auto 3rem auto;
    text-align: left;
    color: var(--altBackground);
    h1 {
      margin-bottom: 0.85rem;
      color: var(--altBackground);
      span {
        width: 100%;
        /* background-image: linear-gradient(var(--mainColour) 0%, #1cb4b1 100%); */
        background-size: 100% 5px;
        background-position: 0 85%;
        font-family: inherit;
        font-weight: inherit;
        width: inherit;
        height: inherit;
        margin: inherit;
        padding: inherit;
        background-repeat: no-repeat;
        font-weight: 700;
      }
    }
    h1,
    p {
      opacity: 0;
      transform: translateY(20px);
    }
  }
  @media only screen and (min-width: 750px) {
    padding-top: 4.5rem;
    .contact--header {
      p {
        width: 60%;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .contact--header {
      padding: 3rem 0;
    }
  }
`;
const ContactHeader = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      delay: 0.5,
      stagger: {
        amount: 0.4,
      },
    });
  };
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    intersection && intersection.intersectionRatio < 0.2
      ? ''
      : fadeIn('.fadeIn');
  });
  return (
    <ContactHeaderStyles ref={sectionRef}>
      <div className="contact--header">
        <h1 className="fadeIn">
          <span>Let's chat</span>
        </h1>
        <p className="fadeIn">
          Some text on why they should get in contact or what they get out of it
        </p>
      </div>
    </ContactHeaderStyles>
  );
};

export default ContactHeader;
