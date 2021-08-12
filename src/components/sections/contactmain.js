import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import { window, document, exists } from 'browser-monads';
import gsap from 'gsap/gsap-core';
import LinkedInIcon from '../../svgs/linkedin.svg';
import TwitterIcon from '../../svgs/twitter.svg';
import InstagramIcon from '../../svgs/instagram.svg';

const ContactMainStyles = styled.section`
  width: 100%;
  .cmain {
    width: 90%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 3rem 0;
    &__contact {
      h2 {
        font-size: var(--titleSemiMedium);
        font-weight: 700;
      }
      p {
        display: block;
        margin: 1rem 0;
      }

      .icons {
        display: flex;
        margin-top: 1rem;
        svg {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          fill: var(--mainColour);
        }
      }
      .links {
        a {
          display: block;
          margin: 1.15rem 0;
          color: var(--backgroundColour);
          font-weight: 700;
          span {
            border-bottom: solid 1px var(--backgroundColour);
          }
        }
      }
    }
    &__form {
      margin-top: 2.5rem;
      div {
        margin-bottom: 0.5rem;
        input,
        textarea {
          width: 100%;
          border: none;
          background-color: var(--altBackground);
          padding: 1rem 1.5rem;
        }
        input {
          margin-bottom: 0.5rem;
          padding: 1.25rem 1.5rem;
        }
        textarea {
          height: 15rem;
          resize: vertical;
        }
        button {
          margin-top: 1rem;
          padding: 1.25rem 1.5rem;
          background: none;
          border: solid var(--backgroundColour) 1px;
          max-width: 100%;
          transition: inherit;
          &:hover {
            background-color: var(--mainColour);
            border: solid var(--mainColour) 1px;
            span {
              color: #fff;
              transition: inherit;
            }
          }
          span {
            color: var(--backgroundColour);
          }
        }
      }
      i {
        font-family: var(--serif);
        display: block;
        margin-top: 1rem;
        a {
          color: var(--mainColour);
          text-decoration: underline;
        }
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      &__form {
        margin-top: 0;
      }
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: 45% 1fr;
      padding-top: 5rem;
      grid-gap: 4rem;
      &__contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &__form {
        form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          textarea {
            height: 100%;
          }
          button {
            margin-top: 0;
          }
        }
      }
    }
  }
`;
const ContactMain = () => {
  const mainRef = useRef(null);
  const intersection = useIntersection(mainRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
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
  if (intersection && intersection.isIntersecting) {
    fadeIn('.bodyFade');
  }
  const contactRef = useRef(null);
  const contactIntersection = useIntersection(contactRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const contactFadeIn = (element) => {
    gsap.to(element, 1.5, {
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
    if (contactIntersection && contactIntersection.isIntersecting) {
      contactFadeIn('.contactFade');
    }
  });

  return (
    <ContactMainStyles>
      <div className="cmain">
        <div className="cmain__contact">
          <div ref={mainRef}>
            <h2 className="willAnimate bodyFade">Get in touch.</h2>
            <p className="willAnimate bodyFade ">
              We’d love to get together with you and hear all about your B2B
              goals, commercial objectives and marketing to-do list. Drop us a
              line, say hi by email or give us your details and we’ll get back
              to you as soon as we can.
            </p>
            <section className="links">
              <a href="tel:020 3941 0305" className="willAnimate bodyFade">
                <span>020 3941 0305</span>
              </a>
              <a
                href="mailto:hello@nutcrackeragency.com"
                className="willAnimate bodyFade"
              >
                <span>hello@nutcrackeragency.com</span>
              </a>
            </section>
            <div className="icons">
              <a
                href="https://www.linkedin.com/company/nutcracker-agency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="willAnimate bodyFade " />
              </a>
              <a
                href="https://twitter.com/nutcrackersm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="willAnimate bodyFade " />
              </a>
              <a
                href="https://www.instagram.com/nutcrackeragency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="willAnimate  bodyFade" />
              </a>
            </div>
          </div>
        </div>
        <div className="cmain__form" ref={contactRef}>
          <form
            name="contact_form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="form-name" value="contact_form" />
            <p className="hidden">
              <label htmlFor="bot-field">
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div>
              <textarea
                name="message"
                id="message"
                required
                placeholder="What do you want to say?"
                className="willAnimate contactFade"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="willAnimate contactFade"
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your email"
                className="willAnimate contactFade"
              />
              <input
                type="text"
                name="company"
                id="company"
                required
                placeholder="Your company"
                className="willAnimate contactFade"
              />
              <button type="submit" className="btn willAnimate contactFade">
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContactMainStyles>
  );
};

export default ContactMain;
