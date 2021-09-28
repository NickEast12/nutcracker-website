import React, { useState } from 'react';
import styled from 'styled-components';
import GetImage from '../../functional/getImage';
import ArrowIcon from '../../../svgs/arrow.svg';

const BodyStyles = styled.section`
  width: 100%;
  margin: 3.5rem 0 2rem 0;
  .r-b {
    max-width: 1000px;
    width: 85%;
    margin: var(--auto);
    h3 {
      text-align: center;
      position: relative;
      font-size: 1.45rem;
    }
    &--line {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      div {
        background-color: var(--mainColour);
        width: 150px;
        height: 4px;
      }
    }
    &--grid {
      margin-top: 3rem;
      display: grid;
      grid-gap: 1.5rem;
      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2.5rem;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 5rem;
  }
`;
const Body = ({ data }) => {
  const { empty, setEmpty } = useState(false);
  return data.length !== 0 ? (
    <BodyStyles>
      <div className="r-b">
        <h3>Latest resources &amp; downloads</h3>
        <div className="r-b--line">
          <div />
        </div>
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
    .gatsby-image-wrapper {
      position: relative;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      max-width: 300px;
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
    h4 {
      font-size: 1.25rem;
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
    }
    &:hover {
      a {
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
    <a href={`${data.file.asset.url}?dl=`} download>
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
    </a>
  </SingleResourceStyles>
);
