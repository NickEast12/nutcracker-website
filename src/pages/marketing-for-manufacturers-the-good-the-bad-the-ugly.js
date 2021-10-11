import React, { useRef } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby';
import SEO from '../components/functional/SEO';
import GlobalStyles from '../styles/GlobalStyles';
import MetaImg from '../assets/images/Manufacturing.jpg';
import Logo from '../svgs/nutcracker-logo.svg';
import BorderIcon from '../svgs/l-border.svg';

const LandingPageStyles = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1e363b;
  .bkg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &::after {
      background-color: rgba(30, 54, 59, 0.7);
      backdrop-filter: saturate(100%) blur(5px);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      opacity: 1;
    }
  }
  .header {
    position: relative;
    height: 85vh;
    padding-top: 1.5rem;
    .l-l {
      width: 90%;
      margin: 0 auto;
      position: relative;
      z-index: 5;
      text-align: center;
      svg {
        width: 150px;
        @media only screen and (min-width: 414px) {
          width: 175px;
        }
      }
      h1 {
        font-size: 2.25rem;
        margin: 1rem 0;
        color: #fff;
        @media only screen and (min-width: 414px) {
          font-size: 2.85rem;
        }
      }
      p {
        margin-top: 0.5rem;
        color: #fff;
      }
      h2 {
        font-family: var(--AgencyBlack);
        color: #f28c28;
        text-transform: uppercase;
        margin-top: 1.75rem;
        font-size: 2rem;
        font-weight: 900;
        letter-spacing: 1.5px;
        @media only screen and (min-width: 414px) {
          font-size: 2.55rem;
        }
      }
      button {
        margin-top: 1rem;
      }
      .gatsby-image-wrapper {
        z-index: 10;
      }
    }
    .l-r {
      width: 100%;
      .gatsby-image-wrapper {
        position: relative;
        z-index: 100;
      }
    }
    @media only screen and (min-width: 768px) {
      height: 70vh;
      padding-top: 2.5rem;
      section {
        width: 90%;
        margin: var(--auto);
        display: grid;
        grid-template-columns: 1fr 1fr;
        .l-l {
          text-align: left;
        }
        .l-r {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      section {
        max-width: var(--maxWidth);
        width: 90%;
        margin: var(--auto);
      }
      .l-l {
      }
    }
    @media only screen and (min-width: 1280px) {
      height: 70vh;
      padding-top: 4rem;
    }
  }
  .body {
    padding: 4.5rem 0 2rem 0;
    position: relative;
    background-color: #fff;
    .border-wrapper {
      position: absolute;
      top: -4.35rem;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
      svg {
        fill: #fff;
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 70px;
        transform: rotateY(180deg);
      }
      @media only screen and (min-width: 414px) {
        top: -4.1rem;
      }
      @media only screen and (min-width: 1280px) {
        top: -3.9rem;
      }
    }
    &__wrapper {
      width: 90%;
      margin: var(--auto);
      max-width: 1140px;
      section {
        p {
          margin-top: 0.5rem;
        }
        #content {
          font-weight: 700;
          span {
            color: #f28c28;
            font-weight: 700;
          }
          @media only screen and (min-width: 768px) {
            font-size: 1.25rem;
          }
        }
        ul {
          margin-top: 0.5rem;
          padding-left: 22px;
          li {
            margin-top: 0.5rem;
            strong {
              color: #f28c28;
              font-weight: 700;
            }
          }
        }
      }
      section {
        form {
          margin-top: 0.5rem;
          padding: 1rem;
          border-radius: 10px;
          input {
            width: 100%;
            border: none;
            background-color: var(--altBackground);
            padding: 1rem 1.5rem;
            margin-top: 0.85rem;
          }
          button {
            width: 100%;
            padding: 1rem 1.5rem;
            margin-top: 0.85rem;
            border: solid 2px #f28c28;
            background: #f28c28;
            transition: all 0.25s ease-in-out;
            cursor: pointer;
            font-size: 1rem;
            &:hover,
            &:active {
              background: #c17020;
              border: solid 2px #c17020;
            }
          }
        }
      }
      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        section {
        }
      }
    }
  }
  .footer {
    background: #fff;
    text-align: center;
    padding: 1rem 0;
  }
`;

const MarketingManufacturers = () => {
  const i = true;
  return (
    <main>
      <SEO
        title="Marketing For Manufacturers The Good. The Bad. And The Ugly. | Nutcracker Agency"
        description="In this guide, we explore The Good, The Bad and The Ugly of marketing in the manufacturing industry and share our key takeaways from Nutcracker"
        img={MetaImg}
      />
      <GlobalStyles />
      <LandingPage />
    </main>
  );
};

export default MarketingManufacturers;

const LandingPage = () => {
  const i = true;
  return (
    <LandingPageStyles>
      <div className="header">
        <section>
          <div className="l-l">
            <Logo />
            <h1>Marketing for manufacturers</h1>
            <h2>The good. The bad. And the ugly. </h2>
            <button
              type="button"
              className="btn btn--main"
              onClick={() => scrollTo('#content')}
            >
              <span>Read more</span>
            </button>
          </div>
          <div className="l-r">
            <StaticImage
              src="../assets/images/Manufacturing-guide.png"
              alt=""
              loading="eager"
            />
          </div>
        </section>
        <StaticImage
          src="../assets/images/Manufacturing.jpg"
          alt=""
          className="bkg"
        />
      </div>
      <div className="body">
        <div className="border-wrapper">
          <BorderIcon className="border" />
        </div>
        <div className="body__wrapper">
          <section>
            <p id="content">
              The UK is currently the ninth largest manufacturing nation in the
              world, which is great for us, but it also means that it is a{' '}
              <span> very </span>
              competitive industry.
            </p>
            <p>
              If you want to set yourselves apart from the competition, then you
              need to be marketing your manufacturing business, because in
              manufacturing, <em>marketing is the catalyst for invention</em>.
            </p>
            <p>
              In this guide, we explore{' '}
              <span>The Good, The Bad and The Ugly</span> of marketing in the
              manufacturing industry and share our key takeaways, so you can:
            </p>
            <ul>
              <li>
                <strong>Learn</strong> how to how to build an effective
                manufacturing marketing strategy
              </li>
              <li>
                <strong>See for yourself </strong> the explosive potential of
                marketing for manufacturers
              </li>
              <li>
                <strong>Understand</strong> where you might be missing a trick
              </li>
              <li>
                <strong>Uncover</strong> the tools you need to get yourself
                firmly seated on the conveyor belt to marketing success
              </li>
            </ul>
          </section>
          <section>
            <form
              name="marketing-for-manufacturers-form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/marketing-for-manufacturers-download"
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input
                type="hidden"
                name="form-name"
                value="marketing-for-manufacturers-form"
              />
              <p className="hidden">
                <label htmlFor="bot-field">
                  Don’t fill this out if you’re human:{' '}
                  <input name="bot-field" />
                </label>
              </p>

              <section>
                <input
                  type="text"
                  name="m-name"
                  id="m-name"
                  required
                  placeholder="Your name"
                />
                <input
                  type="email"
                  name="email"
                  id="l-email"
                  required
                  placeholder="Your email"
                />
              </section>
              <button type="submit">
                <span>Get your free copy</span>
              </button>
            </form>
          </section>
        </div>
      </div>
      <div className="footer">
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/cookie-policy">Cookie Policy</Link>
        </p>
      </div>
    </LandingPageStyles>
  );
};
