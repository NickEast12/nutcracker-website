import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const HeroStyles = styled.section`
    width: 100%;
    /* background: red; */
    background: #283D43;
    .hero {
        /* width: 91.888%;  */
        margin: 0 auto;
        max-width: 1920px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        height: 100%;
        position: relative;
        padding-bottom: 6rem;
        /* padding-top: 7rem; */
        @media only screen and (min-width: 576px) {
            padding-top: 0px;
            padding-bottom: 1rem;
            /* padding-bottom: 7rem; */
        }
        @media only screen and (min-width: 768px) {
          padding-bottom: 0rem;
            /* padding-top: 0px; */
            /* padding-bottom: 2rem; */
        }
        @media only screen and (min-width: 1280px) {
            /* padding-top: 2rem; */
            /* padding-bottom: 8rem; */
        }
        @media only screen and (min-width: 1360px) {
            /* padding-top: 2rem; */
            /* padding-bottom: 7rem; */
        }
        @media only screen and (min-width: 1440px) {
            /* padding-top: 2rem; */
            /* padding-bottom: 5rem; */
        }
        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        .image {
            width: 100%;
            height: 100%;
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
        }
        .text {
            position: absolute;
            bottom: 2em;
            width: 95%;
            .hero-button {
              max-width: 210px;
              text-align: center;
              margin: 1.25rem auto 0 auto;
              a {
            display: block;
            background: #ffd400;
            height: 100%;
            padding: 1.1rem 1rem;
            border-radius: 8px;
            color: #000000;
            transition: all .24s ease-in-out;
            font-weight: 700;
            &:hover, &:focus {
              background: #c4a300;
            }
            @media only screen and (min-width: 992px) {
            font-size: 20px;
        }
        }
            }
            @media only screen and (min-width: 1380px) { 
                bottom: 5rem;
            }

            h1 {
                font-weight: 800;
                margin-bottom: 1rem;
                font-size: 1.5rem;
                @media only screen and (min-width: 768px) {
                  font-size: 2rem;

                }
                @media only screen and (min-width: 992px) { 
                  font-size: 42px;
                }
                @media only screen and (min-width: 1380px) { 
                    font-size: 50px;
                }
            }
            h2 {
                font-size: .85rem;
                @media only screen and (min-width: 768px) {
                    font-size: .95rem;
                }
                @media only screen and (min-width: 992px) { 
                    font-size: 1.22rem;
                }
                @media only screen and (min-width: 1380px) { 
                    font-size: 1.5rem;
                }
            }
            h1,h2 {
                color: white;
                text-align: center;
            }
        }
    }
`

export default function NXThreeHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Handle initial load
      video.addEventListener('canplaythrough', () => {
        setIsVideoLoaded(true);
      });

      // Handle video end
      const handleVideoEnd = () => {
        video.pause();
        // Wait 4 seconds before playing again
        timeoutRef.current = setTimeout(() => {
          video.currentTime = 0;
          video.play();
        }, 4000);
      };

      video.addEventListener('ended', handleVideoEnd);

      return () => {
        video.removeEventListener('canplaythrough', () => {
          setIsVideoLoaded(true);
        });
        video.removeEventListener('ended', handleVideoEnd);
        // Clean up timeout if component unmounts
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (isVideoLoaded) {
      document.querySelector('.image').style.opacity = '0';
      document.querySelector('video').style.opacity = '1';
    }
  }, [isVideoLoaded]);

  return (
    <HeroStyles>
        <div className="hero">
            <div className="image">
            <StaticImage
              src="../../assets/images/background.png"
              alt="NXThree"
              placeholder="blurred"
              loading='eager'
            />
            </div>
            <div className='video'>
            <video 
              ref={videoRef} 
              src="https://cdn.nosweatwebsites.co.uk/NX3_9sec_01.mp4" 
              autoPlay 
              muted
            ></video>
            </div>
            <div className="text">
            <h1>The formula for ambitious businesses</h1>
            <h2>Secure market share. Achieve measurable growth. Build brand authority.</h2>
            </div>
        </div>
    </HeroStyles>
  )
}