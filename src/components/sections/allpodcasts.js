import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FeaturedPodcast from './featuredpodcast';
import SinglePodcast from './singlePodcast';

const AllPodcastsStyles = styled.section`
  width: 100%;
  background-color: var(--altBackground);
  .p-w {
    padding: 2rem 0;
    max-width: var(--maxWidth);
    width: 90%;
    margin: var(--auto);
    @media only screen and (min-width: 1280px) {
      padding: 3rem 0;
    }
    .wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.25rem;
      }
      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media only screen and (min-width: 1280px) {
        grid-gap: 2rem;
      }
    }
  }
`;
const AllPodcasts = ({ featuredPodcast, allPodcasts }) => (
  <AllPodcastsStyles>
    <div className="p-w">
      <FeaturedPodcast data={featuredPodcast} />
      <section className="wrapper">
        {allPodcasts.map((podcast) => (
          <SinglePodcast data={podcast} key={podcast.id} />
        ))}
      </section>
    </div>
  </AllPodcastsStyles>
);

AllPodcasts.propTypes = {
  allPodcasts: PropTypes.any,
  featuredPodcast: PropTypes.any,
};

export default AllPodcasts;
