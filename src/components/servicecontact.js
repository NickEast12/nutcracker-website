import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ServiceContactStyles = styled.section`
  width: 100%;
  background: #fff;
  margin-top: 1.5rem;
  .s-c {
    max-width: var(--maxWidth);
    width: 85%;
    margin: var(--auto);
    text-align: center;
    padding: 3rem 0;
    section {
      h5 {
        max-width: 950px;
        font-size: 1.75rem;
        margin: var(--auto);
        span {
          font-weight: 700;
          color: var(--mainColour);
        }
      }
      p {
        max-width: 650px;
        margin: 1rem auto 0 auto;
        span {
          color: var(--accent);
        }
      }
    }
    form {
      max-width: 700px;
      margin: 1.5rem auto 0 auto;
      section {
        margin-bottom: 0.25rem;
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
          cursor: pointer;
          width: 100%;
          margin-top: 0.25rem;
          padding: 1.25rem 1.5rem;
          background: var(--mainColour);
          border: solid var(--mainColour) 1px;
          max-width: 100%;
          transition: inherit;
          span {
            font-weight: 500;
            color: #fff;
          }
        }
      }
      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem;
        section {
          textarea {
            height: 100%;
          }
          button {
            margin-top: 0;
          }
        }
        .i-p {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  /* @media only screen and (min-width: 768px) {
    .s-c {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  } */
`;
const ServiceContact = ({ children }) => {
  const i = true;
  return (
    <ServiceContactStyles>
      <div className="s-c">
        <section>{children}</section>
        <form
          name="service_contact_form"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="service_contact_form" />
          <p className="hidden">
            <label htmlFor="bot-field">
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <section>
            <textarea
              name="message"
              id="s-message"
              required
              placeholder="Your message"
            />
          </section>
          <section className="i-p">
            <input
              type="text"
              name="name"
              id="s-name"
              required
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              id="s-email"
              required
              placeholder="Your email"
            />
            <button type="submit">
              <span>Let's chat</span>
            </button>
          </section>
        </form>
      </div>
    </ServiceContactStyles>
  );
};

export default ServiceContact;
