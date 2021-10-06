import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/functional/SEO';
import GlobalStyles from '../styles/GlobalStyles';
import MetaImg from '../assets/images/background.jpeg';
import Logo from '../svgs/nutcracker-logo.svg';
import BorderIcon from '../svgs/l-border.svg';

const LandingPageStyles = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1e363b;
  /* background-color: rgba(30, 54, 59, 0.7); */
  h1 {
    /* font-family: var(--AgencyBlack); */
    color: #fff;
  }
  .bkg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
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
    height: 80vh;
    padding-top: 1.5rem;
    background-color: #1e363b;
    .l-l {
      background-color: #1e363b;
      width: 90%;
      margin: 0 auto;
      position: relative;
      z-index: 5;
      svg {
        width: 150px;
      }
      h1 {
        font-size: 2.85rem;
        margin: 1rem 0;
      }
      p {
        margin-top: 0.5rem;
        color: #fff;
      }
    }
    .border {
      position: absolute;
      bottom: -6.85%;
      fill: #1e363b;
      left: 0;
      width: 100%;
      overflow: hidden;
      z-index: -2;
      line-height: 0;
      transform: rotate(180deg) scaleX(-1);
    }
  }
`;

const MarketingManufacturers = () => {
  const i = true;
  return (
    <main>
      <SEO
        title="The Ultimate Guide To B2B Storytelling | Nutcracker Agency"
        description="Learn why storytelling needs to be a part of your content strategy to elevate your brand, influence decision making, connect to your audience and generate leads with the ultimate guide to B2B storytelling from Nutcracker."
        img={MetaImg}
      />
      <GlobalStyles />
      <LandingPage />
    </main>
  );
};

export default MarketingManufacturers;

const LandingPage = () => (
  <LandingPageStyles>
    <div className="header">
      <div className="l-l">
        <Logo />
        <h1>Marketing for manufacturers</h1>
        {/* <p>
          Let us guess, you’re a manufacturer and you’ve landed on this page?
        </p>
        <p>
          If we’re wrong about that, click off this page right now (there’s
          nothing to see here). If we’re right, which we’re hoping we are, then
          keep reading. You’ve been brought here for a reason.{' '}
        </p>
        <p>
          To summarise and to keep it concise, we’re here to tell you about
          marketing. Specifically:
        </p>
        <h2>The good. The bad. The ugly.</h2> */}
        <p>
          The UK is currently the ninth largest manufacturing nation in the
          world, which is great for us, but it also means that it is a very
          competitive industry.{' '}
        </p>
        <p>
          If you if you want to set yourselves apart from the competition, then
          you need to be marketing your manufacturing business, because in
          manufacturing, marketing is the catalyst for invention.
        </p>
        <button>
          <span>Download</span>
        </button>
        {/* <p>
          In this guide, we explore The Good, The Bad and The Ugly of marketing
          in the manufacturing industry and share our key takeaways, so you can:
        </p>
        <ul>
          <li>
            <strong>Learn </strong>how to how to build an effective
            manufacturing marketing strategy
          </li>
          <li>
            <strong>See for yourself </strong>the explosive potential of
            marketing for manufacturers
          </li>
          <li>
            <strong>Understand </strong> where you might be missing a trick
          </li>
          <li>
            <strong>Uncover </strong> the tools you need to get yourself firmly
            seated on the conveyor belt to marketing success
          </li>
        </ul> */}
      </div>
      <div className="l-r">
        <StaticImage src="../assets/images/Manufacturing-guide.png" alt="" />
      </div>
      <BorderIcon className="border" />
    </div>
    {/* <StaticImage
      src="../assets/images/Manufacturing.jpg"
      alt=""
      className="bkg"
    /> */}
  </LandingPageStyles>
);
