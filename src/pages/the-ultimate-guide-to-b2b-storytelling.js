import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import GlobalStyles from '../styles/GlobalStyles';
import Logo from '../svgs/nutcracker-logo.svg';
import SEO from '../components/functional/SEO';
import MetaImg from '../assets/images/background.jpeg';

const StorytellingLandingPage = () => {
  const i = true;
  return (
    <main>
      <SEO
        title="The Ultimate guide to B2B storytelling | Nutcracker Agency"
        description="Learn why storytelling needs to be a part of your content strategy to elevate your brand, influence decision making, connect to your audience and generate leads with the ultimate guide to B2B storytelling from Nutcracker."
        img={MetaImg}
      />
      <GlobalStyles />
      <LandingPage />
    </main>
  );
};

export default StorytellingLandingPage;

const LandingPageStyles = styled.section`
  width: 100%;
  .left {
    position: relative;
    &__wrapper {
      max-width: 900px;
      width: 85%;
      margin: var(--auto);
      padding: 1rem 0;
      .logo {
        svg {
          margin-top: 1rem;
          width: 190px;
        }
      }
      h1 {
        margin: 2rem 0 1rem 0;
        font-size: 2.5rem;
        color: #fff;
        font-weight: 700;
      }
      h2 {
        color: rgb(255, 218, 60);
        display: block;
        font-size: 1.35rem;
        font-family: var(--sans);
        font-weight: 400;
      }
      p {
        color: #fff;
        margin: 1rem 0;
      }
      .bkg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(30, 54, 59);
        /* clip-path: polygon(0 0, 100% 0, 100% 32%, 0 40%); */
        z-index: -5;
        &::after {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          background-color: #122023;
          opacity: 0.5;
        }
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .right {
    &__wrapper {
      width: 85%;
      max-width: 600px;
      margin: var(--auto);
      padding: 1rem 0;
      h3 {
        text-align: center;
        margin: 1rem 0;
        span {
          color: var(--mainColour);
          font-weight: 700;
        }
      }
      > p {
        text-align: center;
        span {
          color: var(--mainColour);
          font-weight: 700;
        }
      }
      .gatsby-image-wrapper {
        margin-top: 1rem;
      }
      form {
        margin: 1rem auto;
        border-radius: 5px;
        background: rgb(30, 54, 59);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 1rem;
        /* border: solid var(--mainColour) 4px; */
        p {
          color: #fff;
          text-align: center;
          span {
            color: var(--mainColour);
            font-weight: 700;
          }
        }
        section {
          margin-top: 1rem;
          input,
          button {
            width: 100%;
            padding: 0.65rem 0.5rem;
            text-align: center;
            border-radius: 5px;
          }
          input {
            border: solid 1px var(--mainColour);
          }
          button {
            background-color: var(--mainColour);
            color: #fff;
            border: solid 1px var(--mainColour);
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 765px) {
    display: grid;
    grid-template-columns: 55% 1fr;
    .left,
    .right {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 1024px) {
    .right {
      .gatsby-image-wrapper {
        max-width: 400px;
        margin: 2rem auto;
        text-align: center;
        display: block;
      }
      form {
        padding: 2rem;
        p {
          margin-bottom: 1.5rem;
        }
        section {
          border-radius: 5px;
          padding: 0.5rem;
          background-color: #fff;
          display: flex;
          input {
            border: none;
            &:focus {
              outline: none;
            }
          }
          button {
            width: 70%;
            margin-top: 0;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: 55% 1fr;
  }
`;
const LandingPage = () => {
  const i = true;
  return (
    <LandingPageStyles>
      <section className="left">
        <div className="left__wrapper">
          <section className="logo">
            <Logo />
          </section>
          <h1>The Ultimate guide to B2B storytelling</h1>
          <h2>
            Growing a business is no fairy-tale – but if you want to magic leads
            from your content marketing efforts, storytelling is a must have.
          </h2>
          <p>
            Storytelling is the best way to build your brand, influence decision
            making and make your business memorable.
          </p>
          <p>
            And with over 5000 brand messages a day competing for space in your
            customer’s head like kids in a poor old woman’s shoe, you need
            content that not only spins a good yarn but inspires your audience
            to take action. Click that button. Pick up that phone. Book that
            demo. Buy those magic beans.
          </p>
          <p>
            At Nutcracker, we’ve transformed industry unknowns into recognisable
            market leaders, by crafting compelling stories that cut across
            content, social media, digital and more.
          </p>
          <div className="bkg">
            <StaticImage
              src="../assets/images/background.jpeg"
              alt="The Ultimate guide to B2B storytelling | Nutcracker"
            />
          </div>
        </div>
      </section>
      <section className="right">
        <div className="right__wrapper">
          <h3>
            Want to learn more about <span>B2B storytelling</span> from a master
            raconteur?
          </h3>
          <StaticImage src="../assets/images/book.jpeg" />
          <form
            name="landinpage_form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/b2b-storytelling"
          >
            <input type="hidden" name="form-name" value="landinpage_form" />
            <p className="hidden">
              <label htmlFor="bot-field">
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <p>
              Just fill in your details and you can download{' '}
              <span> The Ultimate Guide to B2B Storytelling </span> quicker than
              Goldilocks can eat someone else’s breakfast.
            </p>
            <section>
              <input
                type="email"
                name="work-email"
                id="work-email"
                required
                placeholder="Enter your work email"
              />
              <button type="submit">
                <span>Get your free copy</span>
              </button>
            </section>
          </form>
        </div>
      </section>
    </LandingPageStyles>
  );
};
