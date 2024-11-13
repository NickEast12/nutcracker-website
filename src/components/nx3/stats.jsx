import React from "react";
import styled from "styled-components";

import Background from "../../assets/images/why-background.png";
import XLogo from "../../svgs/x-logo.svg";
import IconOne from '../../svgs/icon-1.svg'
import IconTwo from '../../svgs/icon-2.svg'
import IconThree from '../../svgs/icon-3.svg'
import Animate from "./animate";

const StatsStyles = styled.section`
  background-color: white;
  
  padding: 4rem 0;
  .wrapper {
    width: 91.888%;
    margin: 0 auto;
    max-width: 1920px;
    .top {
      h3 {
        color: #1e363b;
        margin:  0 0 .65rem 0 ;
        font-size: 1.5rem;
        text-align: center;
        max-width: none;
        font-weight: 800;
        @media only screen and (min-width: 576px) {
          font-size: 1.5rem;
          line-height: 1.5rem;
          /* margin-top: 2rem; */
        }
        @media only screen and (min-width: 1280px) {
          font-size: 1.95rem;
          line-height: 1.8rem;
        }
      }
      p {
        text-align: center;
        font-weight: 500;
        @media only screen and (min-width: 992px) {
            font-size: 20px;
        }
      }
    }
    .cards {
        margin-top: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
        text-align: center;
        max-width: 1200px;
        margin: 2rem auto 0 auto;
        @media only screen and (min-width: 992px) {
            grid-template-columns: 1fr 1fr 1fr;
            margin-top: 3rem;
        }
        div {
            .green {
                color: var(--mainColour);
            }
            color: var(--backgroundColour);
            .num {
                font-weight: 900;
                font-size: 3rem;
                line-height: 3rem;
                @media only screen and (min-width: 992px) { 
                    font-size: 3.5rem;
                    padding-bottom: 5px;
                }
            }
            .intro {
                font-weight: 900;
                font-size: 1.25rem;
                line-height: 1.75rem;
            }
            .text {
                margin-top: 0.75rem;
                strong {
                    font-weight: 900;
                }
            }
        }
    }
  }
`;

export default function Stats() {
  return (
    <StatsStyles>
      <Animate>

      
      <div className="wrapper">
        <div className="top">
          <h3>Don’t just take it from us</h3>
          <p>How our clients have achieved market share growth by using nx³</p>
        </div>
        <div className="cards">
            <div>
                <p className="num green">12.3k</p>
                <p className="intro green">e-commerce orders</p>
                <p className="text"><strong>For Printt</strong>. Results from <br /> a six-month period.</p>
            </div>
            <div>
                <p className="num">1.5k%</p>
                <p className="intro">increase in total shop sales</p>
                <p className="text"><strong>For Zano Controls’.</strong> Results from <br /> a twelve-month period.</p>
            </div>
            <div>
                <p className="num green">116%</p>
                <p className="intro green">increase in demo requests</p>
                <p className="text"><strong>For a leading SasS business.</strong> <br /> Results from a six-month period.</p>
            </div>
        </div>
      </div>
      </Animate>
    </StatsStyles>
  );
}
