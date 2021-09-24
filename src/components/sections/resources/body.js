import React, { useState } from 'react';
import styled from 'styled-components';
import GetImage from '../../functional/getImage';
import ArrowIcon from '../../../svgs/arrow.svg';

const BodyStyles = styled.section`
  width: 100%;
  margin: 3.5rem 0 2rem 0;
  .r-b {
    max-width: var(--maxWidth);
    width: 85%;
    margin: var(--auto);
    h3 {
      text-align: center;
      position: relative;
      &::after {
        position: absolute;
        z-index: 2;
        bottom: -1rem;
        left: calc(0% + 42%);
        width: 50px;
        height: 4px;
        background-color: var(--mainColour);
        content: '';
      }
    }
    &--grid {
      margin-top: 3rem;
      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5rem;
      }
    }
  }
`;
const Body = ({ data }) => {
  const { empty, setEmpty } = useState(false);
  return data.length !== 0 ? (
    <BodyStyles>
      <div className="r-b">
        <h3>Latest resources &amp; downloads</h3>
        <div className="r-b--grid">
          {data.map((x, i) => (
            <SingleResource data={x} key={i} />
          ))}
        </div>
      </div>
    </BodyStyles>
  ) : (
    ''
  );
};

export default Body;

const SingleResourceStyles = styled.article`
  width: 100%;
  .s-r {
    .gatsby-image-wrappe {
    }
    h4 {
      font-size: 1.35rem;
      margin-top: 1rem;
    }
    a {
      font-weight: 600;
      transition: all 0.25s ease-in-out;
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
      color: var(--mainColour);
      span {
        display: flex;
        justify-content: center;
        svg {
          transition: all 0.25s ease-in-out;
          margin-left: 5px;
          width: 19px;
          height: 19px;
          fill: var(--mainColour);
        }
      }
      &:hover {
        transform: translateX(3px);
        span {
          svg {
            transform: translateX(5px);
          }
        }
      }
    }
  }
`;
const SingleResource = ({ data }) => (
  <SingleResourceStyles>
    <div className="s-r">
      <GetImage data={data.mainImage} />
      <h4>{data.title}</h4>
      <a href={`${data.file.asset.url}?dl=`} download>
        Download Resource
        <span>
          <ArrowIcon />
        </span>
      </a>
    </div>
  </SingleResourceStyles>
);
