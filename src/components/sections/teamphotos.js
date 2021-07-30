import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
// import gsap from 'gsap/gsap-core';
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import EmailIcon from '../../svgs/email.svg';
import LinkedinIcon from '../../svgs/linkedin.svg';
import GetImage from '../functional/getImage';

const TeamPhotosStyles = styled.section`
  @keyframes ItemIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  width: 100%;
  background-color: #fff;
  padding: 3rem 0;
  max-width: 1100px;
  margin: var(--auto);
  .team--photos {
    max-width: var(--maxWidth);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    column-gap: 0.85rem;
    @media only screen and (min-width: 768px) {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(4, minmax(120px, 1fr));
      grid-template-rows: masonry;
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, minmax(120px, 1fr));
    }
    &--box {
      width: 100%;
      height: 100%;
      position: relative;
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }
      &--content {
        transition: all 0.35s ease-in-out;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(65, 64, 76, 0);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        section {
          width: 80%;
          margin: 0 auto;
          text-align: center;
          padding-top: 1.5rem;

          color: #fff;
          /* @media only screen and (min-width: 375px) {
            padding-top: 2.5rem;
          }
          @media only screen and (min-width: 414px) {
            padding-top: 3rem;
          }
          @media only screen and (min-width: 750px) {
            padding-top: 2.5rem;
          }
          @media only screen and (min-width: 1024px) {
            padding-top: 5rem;
          }
          @media only screen and (min-width: 1280px) {
            width: 70%;
          } */
          h5 {
            font-size: 1.4rem;
            font-weight: 500;
            opacity: 0;
            color: var(--altBackground);
            transform: translateY(10px);
            transition: all 0.35s ease-in-out;
          }
          p {
            margin-top: 0.25rem;
            line-height: 1.2;
            opacity: 0;
            transform: translateY(10px);
          }
          .icons {
            width: 50%;
            margin: 1em auto 0 auto;
            display: flex;
            justify-content: space-between;
            transition: all 0.35s ease-in-out;
            opacity: 0;
            transform: translateY(10px);
            svg {
              width: 20px;
              &:hover {
                fill: var(--mainColour);
              }
            }
            @media only screen and (min-width: 1024px) {
              width: 35%;
            }
          }
        }

        &:hover h5 {
          animation: 0.35s ease-in-out forwards ItemIn;
        }
        &:hover p {
          animation: 0.35s 0.25s ease-in-out forwards ItemIn;
        }
        &:hover .icons {
          animation: 0.35s 0.45s ease-in-out forwards ItemIn;
        }
      }
      &:nth-child(even) {
        margin-top: 2rem;

        .team--photos--box--content:hover {
          background-color: rgba(30, 54, 59, 0.5);
        }
      }
      &:nth-child(odd) {
        .team--photos--box--content:hover {
          background-color: rgba(43, 165, 162, 0.5);
        }
      }
    }
  }
`;
const TeamPhotos = ({ TeamData }) => {
  const photosRef = useRef(null);
  const intersection = useIntersection(photosRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  });
  const fadeIn = (element) => {
    gsap.to(element, 2, {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      delay: 1,
      stagger: {
        amount: 1,
      },
    });
  };
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    intersection && intersection.intersectionRatio < 0.2
      ? ''
      : fadeIn('.photosIn');
  });

  return (
    <TeamPhotosStyles>
      <div className="team--photos" ref={photosRef}>
        {TeamData.map((team) => (
          <div
            className="team--photos--box willAnimate photosIn"
            key={team.name}
          >
            <GetImage data={team.image} />

            <div className="team--photos--box--content">
              <section>
                <h5>{team.name}</h5>
                <p>{team.position}</p>
                <div className="icons">
                  {team.email === null || 0 ? (
                    ''
                  ) : (
                    <a href={`mailto:${team.email}`}>
                      <EmailIcon />
                    </a>
                  )}
                  {team.linkedin === null || 0 ? (
                    ''
                  ) : (
                    <a
                      href={team.linkedin}
                      target="_blank"
                      rel="noopener
                      noreferrer"
                    >
                      <LinkedinIcon />
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </TeamPhotosStyles>
  );
};

TeamPhotos.propTypes = {
  TeamData: PropTypes.any,
};

export default TeamPhotos;

// TODO 17 in total, 16 + 1 off screen
