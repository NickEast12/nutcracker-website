import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
//* Local imports
import { Link } from 'gatsby';
import LinkedInIcon from '../svgs/linkedin.svg';
import TwitterIcon from '../svgs/twitter.svg';
import InstagramIcon from '../svgs/instagram.svg';
import CheckIcon from '../svgs/check.svg';
import NutrackerLogo from '../svgs/nutcracker-logo.svg';

const FooterStyles = styled.footer`
  width: 100%;
  padding: 0 0 2.5rem 0;
  background-color: #fff;

  .footer {
    padding: 2rem 0 0 0;
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
    @media only screen and (min-width: 750px) {
      padding: 4rem 0 0 0;
    }
    &__img {
      width: 60%;
      margin: 0 auto;
      svg {
        width: 100%;
        height: auto;
        margin: 0 !important;
        padding: 0 !important;
      }
      @media only screen and (min-width: 414px) {
        margin: 0.5rem auto;
      }
    }
    &__links {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 1.5rem auto 0 auto;
      section {
        h6 {
          font-size: 1.25rem;
          color: var(--backgroundColour);
          font-weight: 500;
        }
        ul {
          list-style: none;
          margin-top: 0.5rem;
          a {
            color: rgba(0, 0, 0, 0.65);
            font-family: var(--serif);
            &:hover {
              /* color: rgba(0, 0, 0, 1); */
              color: var(--mainColour);
            }
          }
          li {
            margin-bottom: 0.5rem;
            font-size: var(--textMediumSmall);
            color: rgba(0, 0, 0, 0.65);
          }
        }
      }
      @media only screen and (min-width: 414px) {
        margin: 2rem auto 1rem auto;
      }
    }
    @media only screen and (min-width: 414px) {
      width: 75%;
      margin: 0 auto;
    }
    @media only screen and (min-width: 750px) {
      display: flex;
      justify-content: space-between;
      width: 85%;
      &__img {
        margin: 0;
        svg {
          width: 250px;
        }
      }
      &__links {
        width: 270px;
        margin-top: 0;
        justify-content: none;
      }
    }
  }
  .social {
    max-width: 1000px;
    padding: 1.5rem 0;
    &--inner {
      width: 30%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      a {
        color: inherit;
        svg {
          margin: 0;
          padding: 0;
          width: 25px;
          height: 25px;
          /* fill: rgba(0, 0, 0, 0.65); */
          fill: var(--mainColour);
        }
      }
    }
    @media only screen and (min-width: 414px) {
      padding: 1rem 0 1.5rem 0;
      width: 75%;
      margin: 0 auto;
    }
    @media only screen and (min-width: 750px) {
      width: 85%;
      &--inner {
        width: 120px;
        padding: 1rem 0;
        margin: 0 auto 0 0;
      }
    }
  }
  .legal {
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
    &--inner {
      p {
        text-align: center;
        color: rgba(0, 0, 0, 0.65);
        font-size: var(--textMediumSmall);
      }
      ul {
        margin-top: 1.5rem;
        list-style: none;
        display: flex;
        justify-content: space-between;
        text-decoration: underline;
        li {
          color: rgba(0, 0, 0, 0.65);
          font-size: var(--textMediumSmall);
          cursor: pointer;
          &:hover {
            color: rgba(0, 0, 0, 1);
          }
        }
      }
    }
    @media only screen and (min-width: 414px) {
      width: 75%;
      margin: 0 auto;
    }
    @media only screen and (min-width: 750px) {
      width: 85%;
      &--inner {
        display: flex;
        justify-content: space-between;
        p {
          text-align: left;
        }
        ul {
          margin-top: 0;
          li {
            text-align: right;
            &:nth-child(1) {
              padding-right: 25px;
            }
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const i = true;
  return (
    <FooterStyles>
      <FooterSignUp />
      <div className="footer">
        <div className="footer__img">
          <NutrackerLogo />
        </div>
        <div className="footer__links">
          <section>
            <h6>Services</h6>
            <ul>
              <li>
                <Link to="/b2b-marketing-strategy">Marketing</Link>
              </li>
              <li>
                <Link to="/content-marketing-services">Content</Link>
              </li>
              <li>
                <Link to="/social-media-marketing">Social media</Link>
              </li>
              <li>
                <Link to="/design-and-branding">Design</Link>
              </li>
              <li>
                <Link to="/lead-generation">Lead generation</Link>
              </li>
              <li>
                <Link to="/pr">PR</Link>
              </li>
              <li>
                <Link to="/digital">Digital</Link>
              </li>
            </ul>
          </section>
          <section>
            <h6>Company</h6>
            <ul>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/podcasts">Podcasts</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="social">
        <div className="social--inner">
          <a
            href="https://www.linkedin.com/company/nutcracker-agency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/nutcrackersm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.instagram.com/nutcrackeragency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="legal">
        <div className="legal--inner">
          <p>
            &copy; {new Date().getFullYear()} Nutracker Agency Ltd. All rights
            reserved.
          </p>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;

const FooterSignUpStyles = styled.section`
  width: 100%;
  background-color: var(--backgroundColour);
  .signup {
    max-width: var(--maxWidth);
    width: 80%;
    margin: 0 auto;
    color: #fff;
    border-radius: 4.5px;
    text-align: center;
    padding: 2rem 0;
    &--left {
      &__img {
        width: 60px;
        margin: 0 auto;
        z-index: 5;
      }
      h4 {
        margin: 1rem 0;
        font-size: 2rem;
        color: var(--altBackground);
      }
      p {
        line-height: 1.4;
        margin-bottom: 1.5rem;
        font-weight: 300;
      }
    }
    &--right {
      form {
        input {
          width: 100%;
          padding: 0.75rem 0;
          text-align: center;
          border-radius: 4px 4px 0 0;
          border: none;
        }
        button {
          border: none;
          padding: 0.75rem 0;
          border-radius: 0 0 4px 4px;
          max-width: 100%;
          &:hover {
            background-color: var(--mainColour);
          }
        }
      }
      &__check {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 1rem;
        section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0;
          svg {
            width: 15px;
            height: 15px;
            fill: var(--mainColour);
          }
          p {
            padding-left: 5px;
            font-size: var(--textMediumSmall);
          }
        }
      }
    }
    @media only screen and (min-width: 414px) {
      width: 90%;
      margin: 0 auto;
      &--left {
        &__img {
          text-align: left;
          margin: 0;
          width: 70px;
          margin: 0 auto;
        }
        p {
          width: 90%;
          margin: 1.75rem auto;
        }
      }
      &--right {
        form {
          width: 90%;
          margin: 0 auto;
        }
        &__check {
          gap: 0.15rem;
        }
      }
    }
    @media only screen and (min-width: 765px) {
      &--right {
        width: 80%;
        margin: 0 auto;
        form {
          input,
          button {
            padding: 1rem 0;
          }
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      padding: 3rem 4rem;
      display: grid;
      grid-template-columns: 35% 1fr;
      width: 100%;
      &--left {
        text-align: left;
        &__img {
          text-align: left;
          margin: 0;
          width: 45px;
        }
        h4 {
          margin: 1rem 0;
        }
        p {
          margin: 0;
          text-align: left;
          width: 100%;
        }
      }
      &--right {
        /* padding-top: 2.5rem; */
        margin: 0 0 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        form {
          width: 100%;
          display: grid;
          grid-template-columns: 70% 1fr;
          input {
            border-radius: 4.5px 0 0 4.5px;
          }
          button {
            border-radius: 0 4.5px 4.5px 0;
          }
        }
        &__check {
          /* flex-wrap: nowrap; */
          width: 100%;
          margin: 0.5rem 0 0 0;
          justify-content: space-between;
        }
      }
    }
  }
`;
const FooterSignUp = () => {
  const i = true;
  return (
    <FooterSignUpStyles>
      <div className="signup">
        <div className="signup--left">
          <div className="signup--left__img">
            <StaticImage
              src="../assets/images/nut.png"
              alt="Nut News"
              placeholder="blurred"
            />
          </div>
          <h4>Nut News</h4>
          <p>
            Want to stay in the know with all things B2B marketing advice and
            get your hands on exclusive content plus a seriously cool and
            entrepreneurial monthly newsletter from Nutcracker?{' '}
          </p>
        </div>
        <div className="signup--right">
          <form
            name="newsletter_collection"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/thank-you"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input
              type="hidden"
              name="form-name"
              value="newsletter_collection"
            />
            <p className="hidden">
              <label htmlFor="bot-field">
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="btn btn--main">
              <span>Sign up</span>
            </button>
          </form>
          <div className="signup--right__check">
            <section>
              <CheckIcon />
              <p>Marketing tips</p>
            </section>
            <section>
              <CheckIcon />
              <p>Tips &amp; tricks</p>
            </section>
            <section>
              <CheckIcon />
              <p>Exclusive content</p>
            </section>
            <section>
              <CheckIcon />
              <p>Announcements</p>
            </section>
          </div>
        </div>
      </div>
    </FooterSignUpStyles>
  );
};
