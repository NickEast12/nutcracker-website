import React, { useState, useEffect } from "react";
import styled from "styled-components";

import XLogo from "../../svgs/x-logo.svg";


const BodyStyles = styled.section`
  background-color: white;
  padding: 5rem 0 0rem 0;
  .wrapper {
    width: 91.888%;
    margin: 0 auto;
    max-width: 1920px;
    .bold {
      font-weight: 800;
      margin-top: 1rem;
      }
    h3 {
      text-align: center;
      max-width: 1000px;
      margin: 0 auto;
      font-size: 0.9rem;
      line-height: 1.25rem;
      
      span {
        svg {
          width: 100px;
        }
      }
      @media only screen and (min-width: 576px) {
        font-size: 1.15rem;
        line-height: 1.5rem;
      }
      @media only screen and (min-width: 1280px) {
        font-size: 1.25rem;
        line-height: 1.8rem;
      }
    }
    .body {
      margin-top: 4rem;
      .logo {
        width: 100px;
        margin: 0 auto 0 auto;
        @media only screen and (min-width: 768px) {
          width: 155px;
        }
      }
      .video  {
        width: 100%;
        max-width: 700px;
        margin: 4rem auto 0 auto;
        video {
          width:90%;
          margin: 0 auto;
        }
      }
      h3 {
        margin: 1rem 0;
        font-size: 32px;
        text-align: center;
        max-width: none;
        font-weight: 800;
        display: flex ;
        justify-content: center;
        align-items: center;
        gap: 12px;
        span {
          svg {
            width: auto;
            height: 29px;
            @media only screen and (min-width: 768px) {
              height: 37px;
        }
        @media only screen and (min-width: 1280px) {
          height: 55px;
        }
          }
        }
        @media only screen and (min-width: 768px) {
          font-size: 37px;
          gap: 20px;
        }
        @media only screen and (min-width: 1280px) {
          font-size: 59px; 
        }
        
      }
      .shutter {
        margin: 3rem auto 0 auto;
        display: inline-block;
        text-align: center;
        
        width: 100%;
        img {
            max-width: 600px;
            width: 50%;
            margin: 0 auto;
        }
      }
    }
  }
`;


export default function Body() {
  const [videoRef, setVideoRef] = useState(null);

  useEffect(() => {
    const handleVideoPlay = () => {
      videoRef.currentTime = 0;
      videoRef.play();
    };

    if (videoRef) {
      const videoPlayTimer = setInterval(handleVideoPlay, 5000);
      return () => clearTimeout(videoPlayTimer);
    }
  }, [videoRef]);

  return (
    <BodyStyles>
      <div className="wrapper">
        
          <h3 >
          At Nutcracker we know that in today's competitive market, gaining and holding onto market share requires more than just eye-catching campaigns. It demands a strategic, integrated approach that guides your audience from first impression to loyal customer.
          </h3>
          <h3 className="bold">
          That's why we created nx³, a streamlined strategy designed to help businesses like yours attract attention, build engagement, and convert leads into lasting relationships.


          </h3>
          <div className="body">
            <h3>How <span><XLogo /></span> works</h3>
            {/* <div className="shutter">
            <img src='/new-shutter.gif' alt="" />
            </div> */}
            <div className='video'>
            <video 
              ref={videoRef} 
              src="https://NoSweatCDN.b-cdn.net/NX3_shutter_White_1000x1000d.mp4" 
              autoPlay 
              muted
              loop
            ></video>
            </div>
          </div>
      </div>
    </BodyStyles>
  );
}