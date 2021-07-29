import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import GetImage from '../functional/getImage';
import FeaIcon from '../../svgs/twinkle.svg';
import PodcastPlayer from './podcastplayer';

const FeaturedPodcastStyles = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: 10.5px;
  border: solid 2px var(--altBackground);
  transition: all 0.35s ease;
  margin-bottom: 2rem;
  cursor: pointer;
  .f-img {
    position: relative;
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      border-radius: 8.5px 8.5px 0 0;
    }
    &__overlay {
      position: absolute;
      background-color: #427e83;
      padding: 0.5rem 0.75rem;
      border-radius: 5px;
      top: 0.5rem;
      left: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 25px;
        height: 25px;
        fill: #fff;
      }
      p {
        margin-left: 7.5px;
        font-weight: 400;
        color: #fff;
      }
    }
  }
  .f-content {
    padding: 1.5rem 1rem 1rem 1rem;
    border-radius: 0 0 8.5px 8.5px;
    border: 1px solid rgb(236, 236, 236);
    border-top: none;
    span {
      margin: 0.5rem 0;
      display: block;
      font-weight: 600;
      color: var(--mainColour);
    }
    h2 {
      font-size: 1.65rem;
    }
    p {
      margin-top: 0.5rem;
      a {
        color: var(--mainColour);
        font-weight: 700;
      }
    }
  }
  &:hover {
    border: solid 2px var(--mainColour);
    transform: translateY(-10px);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1.25rem;
    .f-img {
      .gatsby-image-wrapper {
        border-radius: 8.5px 0 0 8.5px;
      }
    }
    .f-content {
      border-radius: 0 8.5px 8.5px 0;
      border-left: none;
      border-top: 1px solid rgb(236, 236, 236);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 1024px) {
    .f-content {
      padding: 1.5rem 2rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 2.5rem;
  }
`;
const FeaturedPodcast = ({ data }) => {
  const fea = data[0];
  const [open, setOpen] = useState(false);
  return (
    <>
      <FeaturedPodcastStyles open={open} onClick={() => setOpen(true)}>
        <div className="f-img">
          <GetImage data={fea.mainImage} />
          <section className="f-img__overlay">
            <FeaIcon />
            <p>Featured</p>
          </section>
        </div>
        <div className="f-content">
          <span>{`Podcast | ${fea.publishedAt}`}</span>
          <h2>{fea.title}</h2>
          <p>{fea.description}</p>
          <PortableText blocks={fea._rawBody} />
        </div>
      </FeaturedPodcastStyles>
      <PodcastPlayer file={fea} open={open} setOpen={setOpen} />
    </>
  );
};

FeaturedPodcast.propTypes = {
  data: PropTypes.any,
};

export default FeaturedPodcast;
