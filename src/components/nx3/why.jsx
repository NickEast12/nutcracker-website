import React from "react";
import styled from "styled-components";

import Background from "../../assets/images/why-background.png";
import XLogo from "../../svgs/x-logo.svg";
import IconOne from '../../svgs/icon-1.svg'
import IconTwo from '../../svgs/icon-2.svg'
import IconThree from '../../svgs/icon-3.svg'
import Animate from "./animate";

const WhyStyles = styled.section`
  /* background-color: var(--backgroundColour); */
  background-image: url(${Background});
  background-attachment: fixed;
  background-size: cover;
  padding: 5rem 0;
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
        @media only screen and (min-width: 1280px) {
          font-size: 55px; 
        }
        
      }
      .logo {
        width: 100px;
        margin: 0 auto 0 auto;
        @media only screen and (min-width: 768px) {
          width: 155px;
        }
      }
    }
    .cardss {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
        text-align: center;
        max-width: 1200px;
        margin: 2rem auto 0 auto;
        @media only screen and (min-width: 992px) {
            grid-template-columns: 1fr 1fr 1fr;
            margin-top: 4rem;
        }
        div {
            span {
                svg {
                    width: 100px;
                }
            }
            h4 {
                color: #FBE100;
                font-weight: 700;
                font-size: 22px;
                margin: 1rem 0;
                font-size: 22.5px;
                font-weught: 800;
                @media only screen and (min-width: 992px) {
                    font-size: 25px;
                }
                @media only screen and (min-width: 1280px) {
                    font-size: 28px;
                }
                @media only screen and (min-width: 1440px) {
                    font-size: 32px;
                }
            }
            p {
                color: white;
                max-width: 400px;
                margin: 0 auto;
                font-size: 14px;
                line-height: 20px;
                @media only screen and (min-width: 992px) {
                    font-size: 16px;
                    line-height: 22px;
                    max-width: 300px;
                }
                @media only screen and (min-width: 1280px) {
                    font-size: 18px;
                    max-width: 340px;
                    line-height: 27px;
                }
            }
        }
    }
  }
`;

export default function Why() {
  return (
    <WhyStyles>
      <Animate>
      <div className="wrapper">
        <div className="top">
          <div className="logo">
            <XLogo />
          </div>
          <h3>Why it works: The Nutcracker difference </h3>
        </div>
        <div className="cardss">
            <div>
                <span>
                    {/* <IconOne /> */}
                </span>
                <h4>Over a decade of <br />
                experience driving results </h4>
                <p>Since inception in 2014, we have refined and finessed the Nutcracker approach. We understand what it takes to deliver commercial results and build brands. We have worked across multiple industry sectors with different sized businesses, all with the same core goal: to grow market share.</p>
            </div>
            <div>
            <span>
                    {/* <IconTwo /> */}
                </span>
                <h4>Dynamic, <br />
                data-driven approach</h4>
                <p>nx³ is more than a campaign; it’s a complete strategy that aligns  social media, email marketing, SEO, PPC, and more to create a cohesive journey for your audience. Every touchpoint is optimised to guide your audience from  awareness to conversion, ensuring no opportunity is missed. </p>
            </div>
            <div>
            <span>
                    {/* <IconThree /> */}
                </span>
                <h4>Integrated, <br />
                multi-channel strategy</h4>
                <p>Markets change, and so do we. Our strategies are built to be  agile and adaptable, using data insights to continually refine and improve. We don’t just set up campaigns: we care about your results and are focused on getting you the results you need.</p>
            </div>
        </div>
      </div>
      </Animate>
    </WhyStyles>
  );
}
