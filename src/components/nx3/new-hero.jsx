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
            bottom: 3rem;
            width: 100%;
            text-align: left;
            max-width: var(--maxWidth);
            @media only screen and (min-width: 768px) { 
                width: 90%;
            }
            .nut {
                .gatsby-image-wrapper {
                    width: 50px;
                    margin-bottom: 10px;
                    @media only screen and (min-width: 768px) { 
                        margin-bottom: 17px;
                    }
                }  
            }
            @media only screen and (min-width: 1380px) { 
                bottom: 3rem;
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
                font-weight: 300;
                @media only screen and (min-width: 576px) {
                    font-size: 1.2rem;
                }
                @media only screen and (min-width: 768px) {
                    font-size: 1.3rem;
                }
                @media only screen and (min-width: 992px) { 
                    font-size: 1.4rem;
                }
                @media only screen and (min-width: 1380px) { 
                    font-size: 1.8rem;
                }
            }
            h1,h2 {
                color: white;
                text-align: left;
            }
            
        }
    }
`

export default function NewHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);
  const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (video) {
//       video.addEventListener('canplaythrough', () => {
//         setIsVideoLoaded(true);
//       });
//     }

//     return () => {
//       if (video) {
//         video.removeEventListener('canplaythrough', () => {
//           setIsVideoLoaded(true);
//         });
//       }
//     };
//   }, []);

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
            <video ref={videoRef} src="https://NoSweatCDN.b-cdn.net/NX3_9sec_01.mp4" autoPlay muted></video>
            </div>
            <div className="text">
                <div className="nut">
                <StaticImage src="../../assets/images/nut.png" alt="" />
                </div>
            <h1>The formular for ambitious business.</h1>
            <h2>Seure market share, build brand authority. <br /> Achieve measurable growth</h2>
            </div>
        </div>
    </HeroStyles>
  )
}