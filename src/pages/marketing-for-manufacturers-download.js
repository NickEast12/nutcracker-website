import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Icon from '../svgs/arrow.svg';

const StoryTellingStyles = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(30, 54, 59, 0.4);
    backdrop-filter: saturate(180%) blur(20px);
    z-index: -2;
  }
  .gatsby-image-wrapper {
    z-index: -4;
    width: 100%;
    height: 100vh;
  }
  section {
    max-width: 500px;
    position: absolute;
    border-radius: 5px;
    z-index: 5;
    padding: 1.5rem;
    text-align: center;
    width: 90%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2rem;
    }
    button {
      margin-top: 1rem;
      max-width: 250px;
      width: 100%;
      padding: 0.65rem 0.5rem;
      text-align: center;
      border-radius: 5px;
      background: var(--mainColour);
      border: solid 1px var(--mainColour);
      color: #fff;
    }
    .home {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      svg {
        width: 20px;
        height: 20px;
      }
      p {
        margin-left: 5px;
      }
    }
  }
`;
const MarketingForManfacturersDowload = ({ data }) => {
  const file = data.file.publicURL;
  return (
    <StoryTellingStyles>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <GlobalStyles />
      <section>
        <h1>Marketing for Manufacturers</h1>
        <button type="button">
          <a href={file} download rel="noopener noreferrer">
            <span>Download now</span>
          </a>
        </button>
        <Link to="/" className="home">
          <Icon />
          <p>Home</p>
        </Link>
      </section>
      <StaticImage src="../assets/images/Manufacturing.jpg" />
      <div className="overlay" />
    </StoryTellingStyles>
  );
};

export default MarketingForManfacturersDowload;

export const query = graphql`
  query PDFTwoQuery {
    file(name: { eq: "NC_Manufacturing-guide" }) {
      id
      name
      publicURL
    }
  }
`;
