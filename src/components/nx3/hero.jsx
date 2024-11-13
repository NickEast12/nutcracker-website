import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const HeroStyles = styled.section`
    width: 100%;
    /* height: 100vh; */
    background: #283D43;
    .hero {
        width: 91.888%; 
        margin: 0 auto;
        max-width: 1920px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        height: 100%;
        position: relative;
        padding-bottom: 10rem;
        padding-top: 2rem;
        @media only screen and (min-width: 576px) {
            padding-top: 0px;
            padding-bottom: 7rem;
        }
        @media only screen and (min-width: 768px) {
            padding-top: 0px;
            padding-bottom: 2rem;
        }
        @media only screen and (min-width: 992px) {
            padding-top: 0px;
            padding-bottom: 0rem;
        }
        video {
            width: 100%;
            height: auto;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        .image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
        }
        .text {
            position: absolute;
            bottom: 3rem;
            width: 100%;
            @media only screen and (min-width: 1380px) { 
                bottom: 5rem;
            }

            h1 {
                font-weight: 800;
                margin-bottom: 1rem;
                font-size: 1.5rem;
                @media only screen and (min-width: 992px) { 
                    font-size: 2rem;
                }
                @media only screen and (min-width: 1380px) { 
                    font-size: 2.5rem;
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

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('canplaythrough', () => {
        setIsVideoLoaded(true);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('canplaythrough', () => {
          setIsVideoLoaded(true);
        });
      }
    };
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
            <video ref={videoRef} src="https://TickedPink.b-cdn.net/NX3_9sec_01.mp4" autoPlay muted></video>
            </div>
            <div className="text">
            <h1>Where strategy meets creativity and digital expertise</h1>
            <h2>The formula for securing market share, building brand authority and achieving measurable growth</h2>
            </div>
        </div>
    </HeroStyles>
  )
}