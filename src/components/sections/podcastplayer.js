import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import CrossIcon from '../../svgs/close.svg';
import GetImage from '../functional/getImage';

const PodcastPlayerStyles = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(30, 54, 59, 0.5);
  backdrop-filter: saturate(180%) blur(24px);
  top: 0;
  left: 0;
  z-index: 10000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .pp {
    position: relative;
    width: 95%;
    padding: 1.5rem;
    background-color: var(--altBackground);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3.5px;
    .gatsby-image-wrapper {
      border-radius: 5px;
      max-width: 400px;
    }
    h5 {
      margin: 1rem 0;
      font-size: 1.5rem;
    }
    button {
      cursor: pointer;
      border: none;
      background: none;
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      span {
        svg {
          width: 20px;
          height: 20px;
          fill: var(--mainColour);
        }
      }
    }
    @media only screen and (min-width: 414px) {
      width: 85%;
    }
    @media only screen and (min-width: 768px) {
      width: 55%;
    }
    @media only screen and (min-width: 1028px) {
      width: 35%;
    }
  }
`;
const PodcastPlayer = ({ file, open, setOpen }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
    }
  }, [open]);
  return open ? (
    <PodcastPlayerStyles onClick={() => setOpen(false)}>
      <div className="pp">
        <GetImage data={file.mainImage} />
        <h5>{file.title}</h5>
        <ReactAudioPlayer src={file.file.asset.url} autoPlay controls />
        <button type="button" onClick={() => setOpen(false)}>
          <span>
            <CrossIcon />
          </span>
        </button>
      </div>
    </PodcastPlayerStyles>
  ) : (
    ''
  );
};

PodcastPlayer.propTypes = {
  file: PropTypes.any,
  open: PropTypes.any,
  setOpen: PropTypes.any,
};

export default PodcastPlayer;
