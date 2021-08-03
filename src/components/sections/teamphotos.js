import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap/gsap-core';
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';
import styled from 'styled-components';
import SingleTeam from './singleteam';

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
          <SingleTeam team={team} key={team.name} />
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
