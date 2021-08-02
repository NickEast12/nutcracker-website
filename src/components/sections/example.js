import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const ServicesExampleStyles = styled.section`
  width: 100%;
  background-color: #fff;
  padding-bottom: 1.5rem;
  .example {
    max-width: var(--maxWidth);
    width: 90%;
    margin: 0 auto;
    h4 {
      font-weight: 700;
      color: var(--mainColour);
      font-size: 2rem;
    }
    &__wrapper {
      section {
        position: relative;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 5rem 1rem 1rem 1rem;
        margin: 2.25rem 0;
        border-radius: 7px;
        h3 {
          margin: 1rem 0;
          color: var(--mainColour);
        }
        p {
          margin-bottom: 1rem;
        }
      }
      .desktop {
        display: none;
      }
      .mob {
        display: block;
      }
      .lines {
        position: relative;
        .gatsby-image-wrapper {
          width: 100%;
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .nut {
        position: relative;
        .gatsby-image-wrapper {
          width: 100%;
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .tick {
        position: relative;
        .gatsby-image-wrapper {
          width: 100%;
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .example {
      &__wrapper {
        section {
          h3 {
            padding-top: 1rem;
          }
        }
        .lines,
        .nut,
        .tick {
          width: 100%;
          &__img {
            width: 100%;
          }
          .gatsby-image-wrapper {
            width: 100%;
            height: 7rem;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .example {
      &__wrapper {
        section {
          h3 {
            padding-top: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 470px) {
    .example {
      &__wrapper {
        section {
        }
        .lines,
        .nut,
        .tick {
          &__img {
            height: 0.5rem;
          }
          .gatsby-image-wrapper {
            width: 90%;
            height: auto;
            position: absolute;
            top: 0;
            left: auto;
            right: -1px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 750px) {
    .example {
      &__wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        section {
        }
        .desktop {
          display: block;
        }
        .mob {
          display: none;
        }

        .lines,
        .nut,
        .tick {
          width: 100%;
          &__img {
            height: 0;
            width: 100%;
            .gatsby-image-wrapper {
              width: 100%;
              top: 15px;
            }
          }
        }
        .lines {
          &__img {
            .gatsby-image-wrapper {
              top: 20px;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1100px) {
    .example {
      &__wrapper {
        section {
          h3 {
            padding-top: 3rem;
          }
        }
        .lines__img {
          .gatsby-image-wrapper {
            top: 40px;
          }
        }
      }
    }
  }
`;
const ServicesExample = ({ problem, solution, result }) => {
  const i = true;
  return (
    <ServicesExampleStyles>
      <div className="example">
        <h4>For example:</h4>
        <div className="example__wrapper">
          <section className="lines">
            <div className="lines__img mob">
              <StaticImage src="../../assets/images/lines.png" alt="" />
            </div>
            <div className="lines__img desktop">
              <StaticImage
                src="../../assets/images/problem-desktop.png"
                alt=""
              />
            </div>
            <h3>The problem</h3>
            <p>{problem}</p>
          </section>
          <section className="nut">
            <div className="nut__img mob">
              <StaticImage
                src="../../assets/images/lines-nut.png"
                alt=""
                placeholder="blurred"
              />
            </div>
            <div className="nut__img desktop">
              <StaticImage
                src="../../assets/images/lines-desktop.png"
                alt=""
                placeholder="blurred"
              />
            </div>
            <h3>Our solution</h3>
            <p>{solution}</p>
          </section>
          <section className="tick">
            <div className="tick__img mob">
              <StaticImage src="../../assets/images/lines-tick.png" alt="" />
            </div>
            <div className="tick__img desktop">
              <StaticImage
                src="../../assets/images/result-desktop.png"
                alt=""
              />
            </div>
            <h3>Our result</h3>
            <p>{result}</p>
          </section>
        </div>
      </div>
    </ServicesExampleStyles>
  );
};

ServicesExample.propTypes = {
  problem: PropTypes.any,
  result: PropTypes.any,
  solution: PropTypes.any,
};

export default ServicesExample;
