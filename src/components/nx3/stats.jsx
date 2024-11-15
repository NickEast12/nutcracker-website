import React from "react";
import styled from "styled-components";
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
        color: var(--mainColour);
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
      p {
        text-align: center;
        font-weight: 500;
        @media only screen and (min-width: 992px) {
            font-size: 20px;
        }
      }
    }
    .cards {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
        text-align: center;
        max-width: 1200px;
        margin: 2rem auto 0 auto;
        @media only screen and (min-width: 576px) {
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (min-width: 992px) {
            grid-template-columns: 1fr 1fr 1fr;
            margin-top: 3.5rem;
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
                @media only screen and (min-width: 1280px) {
                  font-size: 72px;
                }
            }
            .intro {
                font-weight: 900;
                font-size: 1.25rem;
                line-height: auto;
                @media only screen and (min-width: 1280px) {
                  font-size: 1.3rem;
                  margin: .25rem 0;
                }
            }
            .text {
                margin-top: 0.05rem;
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
        <h3><span><img src="/nx3-logo.png" alt="" /></span>speaks for itself...</h3>
          {/* <p>How our clients have achieved market share growth by using nx³</p> */}
        </div>
        <div className="cards">
            <div className="card">
                <p className="num ">+12.3k</p>
                <p className="intro green">e-commerce orders</p>
                <p className="text">For Printt. Results from a <br /> six-month period.</p>
            </div>
            <div className="card">
                <p className="num">+1.5k%</p>
                <p className="intro green">increase in total shop sales</p>
                <p className="text">For Zano Controls. Results from <br /> a twelve-month period.</p>
            </div>
            <div className="card">
                <p className="num ">+116%</p>
                <p className="intro green">increase in demo requests</p>
                <p className="text">For a leading SaaS business. <br /> Results from a six-month period.</p>
            </div>
            <div className="card">
                <p className="num ">+750%</p>
                <p className="intro green">return on ad spend</p>
                <p className="text">For a leading food manufacture. Results <br /> from a three-month period.
                </p>
            </div>
            <div className="card">
                <p className="num">+960%</p>
                <p className="intro green">increase in form submits</p>
                <p className="text">For a leading data transformation <br /> business. Results from a one year period.</p>
            </div>
            <div className="card">
                <p className="num ">+400%</p>
                <p className="intro green">increase in organic purchases</p>
                <p className="text">For a leading construction supplier. <br /> Results from a one year period.</p>
            </div>
        </div>
      </div>
      </Animate>
    </StatsStyles>
  );
}
