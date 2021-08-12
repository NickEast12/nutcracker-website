import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const NewServiceBodyStyles = styled.section`
  width: 100%;
  margin: 2rem 0 0 0;
  .s-b-l {
    padding: 2rem 0;
    max-width: 1250px;
    .left {
      width: 90%;
      margin: var(--auto);
      h3 {
        font-size: 1.95rem;
        margin-bottom: 1rem;
      }
      strong {
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: 1rem;
        display: block;
        color: var(--backgroundColour);
      }
      p {
        margin-bottom: 1rem;
      }
      ul {
        width: 95%;
        margin: 0 auto 0 1rem;
        li {
          margin: 0.5rem 0;
        }
      }
    }
    .right {
      margin-top: 2rem;
      .gatsby-image-wrapper {
        height: 18rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .s-b-l {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;
      margin: var(--auto);
      display: grid;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .right {
        .gatsby-image-wrapper {
          height: 100%;
        }
      }
    }
    .reverse {
      grid-template-areas: 'a b';
      .left {
        grid-area: b;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .s-b-l {
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        .gatsby-image-wrapper {
          height: auto;
        }
      }
    }
  }
`;
const NewServiceBodyLeft = ({
  title,
  strong,
  children,
  fp,
  sp,
  tp,
  alt,
  data,
}) => {
  const i = true;
  return (
    <NewServiceBodyStyles>
      <div className={alt ? 'reverse s-b-l' : 's-b-l'}>
        <div className="left">
          <h3>{title}</h3>
          {strong ? <strong>{strong}</strong> : ''}

          <p>{fp}</p>
          {sp ? <p>{sp}</p> : ''}
          {tp ? <p>{tp}</p> : ''}
          {data ? (
            <ul>
              {data.map((i) => (
                <li key={i.text}>{i.text}</li>
              ))}
            </ul>
          ) : (
            ' '
          )}
        </div>
        <div className="right">{children}</div>
      </div>
    </NewServiceBodyStyles>
  );
};

NewServiceBodyLeft.propTypes = {
  children: PropTypes.any,
  fp: PropTypes.any,
  sp: PropTypes.any,
  strong: PropTypes.any,
  title: PropTypes.any,
  tp: PropTypes.any,
};

export default NewServiceBodyLeft;
