import React from 'react';
import styled from 'styled-components';
import GetImage from '../../functional/getImage';

const FeaturedStyles = styled.header`
  width: 100%;
  .r-s {
    width: 85%;
    padding-top: 5rem;
    margin: var(--auto);
    &--text {
      p {
        text-transform: uppercase;
        font-weight: 400;
      }
      h1 {
        display: none;
      }
      h2 {
        font-size: 2.5rem;
        margin-top: 0.5rem;
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
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.5rem;
      &--img {
        margin-top: 0;
      }
      &--text {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
