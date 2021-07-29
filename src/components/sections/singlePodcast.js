import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import GetImage from '../functional/getImage';
import PodcastPlayer from './podcastplayer';

const FeaturedPodcastStyles = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: 10.5px;
  border: solid 2px var(--altBackground);
  transition: all 0.35s ease;
  cursor: pointer;
  .f-img {
    position: relative;
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      border-radius: 8.5px 8.5px 0 0;
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
`;
const SinglePodcast = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FeaturedPodcastStyles open={open} onClick={() => setOpen(true)}>
        <div className="f-img">
          <GetImage data={data.mainImage} />
        </div>
        <div className="f-content">
          <span>{`Podcast | ${data.publishedAt}`}</span>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <PortableText blocks={data._rawBody} />
        </div>
      </FeaturedPodcastStyles>
      <PodcastPlayer file={data} open={open} setOpen={setOpen} />
    </>
  );
};

SinglePodcast.propTypes = {
  data: PropTypes.any,
};

export default SinglePodcast;
