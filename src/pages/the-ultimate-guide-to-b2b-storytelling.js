import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Logo from '../svgs/nutcracker-logo.svg';

const StorytellingLandingPage = () => {
  const i = true;
  return (
    <main>
      <GlobalStyles />
      <LandingPage />
    </main>
  );
};

export default StorytellingLandingPage;

const LandingPageStyles = styled.section`
  width: 100%;
  position: relative;
  .left {
    width: 85%;
    margin: var(--auto);
    padding: 1rem 0;
    svg {
      width: 190px;
    }
    h1 {
      margin: 2rem 0 1rem 0;
      font-size: 2rem;
      color: #fff;
    }
    h2 {
      font-size: 1.5rem;
      color: #fff;
    }
  }
  .bkg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgb(30, 54, 59);
    background: linear-gradient(
      180deg,
      rgba(30, 54, 59, 1) 28%,
      rgba(43, 165, 162, 1) 100%
    );
    clip-path: polygon(0 0, 100% 0, 100% 41%, 0 73%);
    z-index: -5;
  }
`;
const LandingPage = () => {
  const i = true;
  return (
    <LandingPageStyles>
      <section className="left">
        <Logo />
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
          customer’s head like kids in a poor old woman’s shoe, you need content
          that not only spins a good yarn but inspires your audience to take
          action. Click that button. Pick up that phone. Book that demo. Buy
          those magic beans.
        </p>
        <p>
          At Nutcracker, we’ve transformed industry unknowns into recognisable
          market leaders, by crafting compelling stories that cut across
          content, social media, digital and more.
        </p>
        <p>
          Want to learn more about B2B storytelling from a master raconteur?{' '}
        </p>
        <p>
          Just fill in your details and you can download{' '}
          <span>The Ultimate Guide to B2B Storytelling </span> quicker than
          Goldilocks can eat someone else’s breakfast.{' '}
        </p>
      </section>
      <section className="right">
        <img />
      </section>
      <div className="bkg" />
    </LandingPageStyles>
  );
};
