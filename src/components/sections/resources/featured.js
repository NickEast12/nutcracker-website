import React from 'react';
import styled from 'styled-components';
import GetImage from '../../functional/getImage';

const FeaturedStyles = styled.header`
  width: 100%;
  position: relative;
  .r-s {
    width: 85%;
    padding-top: 5rem;
    margin: var(--auto);
    &--text {
      padding-bottom: 1rem;
      p {
        text-transform: uppercase;
        font-weight: 500;
        color: var(--mainColour);
      }
      h1 {
        display: none;
      }
      h2 {
        font-size: 2.5rem;
        margin-top: 1rem;
      }
      a {
        display: block;
        button {
          margin-top: 1rem;
        }
      }
    }
    &--img {
      margin-top: 1.5rem;
      position: relative;
      .gatsby-image-wrapper {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        z-index: -200;
        max-width: 300px;
      }
      &::after {
        display: block;
        position: absolute;
        top: 0;
        left: 5px;
        width: 2px;
        height: 100%;
        content: '';
        background-color: #000;
        z-index: 10;
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.5rem;
      padding-top: 7rem;
      &--img {
        margin-top: 0;
      }
      &--text {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1024px) {
      width: 80%;
      padding-top: 9.5rem;
      grid-gap: 3rem;
      &--img {
        .gatsby-image-wrapper {
          max-width: 395px;
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      width: 70%;
      padding-top: 8rem;
      grid-gap: 3rem;
      &--img {
        .gatsby-image-wrapper {
          max-width: 395px;
        }
      }
    }
  }
`;
const Featured = ({ data }) => {
  const fea = data[0];
  return (
    <FeaturedStyles>
      <div className="r-s">
        <div className="r-s--text">
          <p>Featured Resource</p>
          <h1>Resources</h1>
          <h2>{fea.title}</h2>
          <a href={`${fea.file.asset.url}?dl=`} download>
            <button type="button" className="btn btn--main">
              <span>Download</span>
            </button>
          </a>
        </div>
        <div className="r-s--img">
          <GetImage data={fea.mainImage} />
        </div>
      </div>
    </FeaturedStyles>
  );
};

export default Featured;
