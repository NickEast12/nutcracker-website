import React from "react";
import styled from "styled-components";

import Animate from "./animate";


const CtaStyles = styled.section`
  background-color: #1b5354;
  padding: 4rem 0;
  .wrapper {
    width: 91.888%;
    margin: 0 auto;
    max-width: 1920px;
    .top {
      h3 {
        color: #ffffff;
        margin: 1rem 0;
        font-size: 32px;
        text-align: center;
        max-width: none;
        font-weight: 800;
        
        /* display: flex ;
        justify-content: center;
        align-items: center;
        gap: 12px; */
        br {
          display: hidden;
        }
       img {
        width: 99px;
        margin-left: 10px;
       }
        @media only screen and (min-width: 768px) {
          font-size: 37px;
          gap: 20px;
        }
        @media only screen and (min-width: 1280px) {
          font-size: 43px; 
          line-height: 55px;
        }
        
      }
      }
      p {
        text-align: center;
        font-weight: 500;
        color: #ffffff;
        margin-top: 2.5rem;
        @media only screen and (min-width: 992px) {
            font-size: 20px;
        }
      }
      .btn-wrapper {
        margin: 2rem auto 0 auto;
        text-align: center;
        max-width: 300px;
        a {
            display: block;
            background: #ffd400;
            height: 100%;
            padding: 1.1rem 1rem;
            border-radius: 8px;
            color: #000000;
            border: solid 2px #ffd400;
            transition: all .24s ease-in-out;
            font-weight: 700;
            &:hover, &:focus {
                background: none;
            }
            @media only screen and (min-width: 992px) {
            font-size: 20px;
        }
        }
      }
    }
  
`;

export default function Cta() {
  return (
    <CtaStyles>
        
    <Animate>
      <div className="wrapper">
        <div className="top">
          <h3>Ready to see what <span><img src="/nx3-logo.png" alt="" /></span> <br /> can do for you?</h3>
          {/* <h3><span>Ready to see what<XLogo /></span>
          can do for you?</h3> */}
          
          <div className="btn-wrapper">
            <a href="mailto:jenny.knighting@nutcrackeragency.com">Book a free consultation</a>
          </div>
        </div>
      </div>
      </Animate>
    </CtaStyles>
  );
}
