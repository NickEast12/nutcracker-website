import React from "react";
import styled from "styled-components";

import Background from "../../assets/images/cta-background.png";
import { Link } from "gatsby";

const CtaStyles = styled.section`
  background-color: white;
  background-image: url(${Background});
  background-size: cover;
  padding: 4rem 0;
  .wrapper {
    width: 91.888%;
    margin: 0 auto;
    max-width: 1920px;
    .top {
      h3 {
        color: #ffffff;
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
            background: var(--backgroundColour);
            height: 100%;
            padding: 1.1rem 1rem;
            border-radius: 8px;
            color: #ffffff;
            border: solid 2px var(--backgroundColour);
            transition: all .24s ease-in-out;
            &:hover, &:focus {
                background: none;
            }
        }
      }
    }
  }
`;

export default function Cta() {
  return (
    <CtaStyles>
      <div className="wrapper">
        <div className="top">
          <h3>Ready to take your market share to the next level?</h3>
          <p>Book some time with one of the team. We can discuss your business, <br /> your goals and how nx3 can support them.</p>
          <div className="btn-wrapper">
            <Link to="/contact/">Book a free consultation</Link>
          </div>
        </div>
      </div>
    </CtaStyles>
  );
}
