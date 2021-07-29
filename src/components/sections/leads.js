import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NutLeadsIcon from '../../svgs/nut-leads.svg';
// import NutLeadsIconAnimated from '../../svgs/new-funnel.svg';
// import NutLeadsIconAnimated from '../../svgs/funnel-animated.svg';

const LeadsStyles = styled.section`
  width: 100%;
  padding: 0;
  .leads {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    &--img {
      padding-bottom: 2rem;
      width: 100%;
      height: 100%;

      svg {
        /* margin-top: -3px; */
        width: 100%;
        height: auto;
      }
    }
    &--wrapper {
      padding-bottom: 3rem;
      h3 {
        margin-bottom: 1.5rem;
        /* color: var(--altBackground); */
        span {
          font-weight: 800;
          color: var(--mainColour);
        }
      }
      p {
      }
      &--btn {
        width: 50%;
        margin-top: 1.5rem;
        button {
          background: var(--mainColour);
          border: solid 2px var(--mainColour);
          span {
            /* color: #000; */
          }
          &:hover {
            background: none;
            span {
              color: var(--yellow);
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .leads {
      padding: 0 0 1.5rem 0;
      &--img {
        width: 95%;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 750px) {
    padding: 1rem 0;
    .leads {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      grid-template-areas: 'a b';
      padding-bottom: 0;
      &--img {
        position: relative;
        width: 100%;
        height: 100%;
        svg {
          position: absolute;
          width: 100%;
          height: 100%;
          /* top: -1.1rem;
          left: -6rem; */
        }
      }
      &--wrapper {
        grid-area: a;
        padding-top: 2rem;
        h3,
        p {
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .leads {
      padding-bottom: 4rem;
      &--img {
        svg {
          width: 130%;
          height: 120%;
          top: -21px;
        }
      }
      &--wrapper {
        /* padding-top: 6rem; */
        align-self: center;
      }
    }
  }
`;

const Leads = () => {
  const i = true;
  return (
    <LeadsStyles>
      <div className="leads">
        <div className="leads--img">
          <NutLeadsIcon />
          {/* <NutLeadsIconAnimated /> */}
        </div>
        <div className="leads--wrapper">
          <h3>
            <span>Qualified leads</span>, ready to convert
          </h3>
          <p>
            It’s that simple. We unearth new leads and deliver them to your
            team, ready to turn into new business, new revenue and new
            opportunities.
          </p>
          <div className="leads--wrapper--btn">
            <Link to="/lead-generation">
              <button type="button" className="btn">
                <span>Find out more</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </LeadsStyles>
  );
};

export default Leads;
