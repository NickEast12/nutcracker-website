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
    max-width: 1000px;
    &--img {
      padding-bottom: 1.5rem;
      width: 100%;
      height: 100%;
      svg {
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
        ${({ theme }) => theme.Mixins.button};
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .leads {
      padding: 0 0 0 0;
      &--img {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 765px) {
    padding: 3rem 0 0 0;
    position: relative;
    overflow: hidden;
    .leads {
      display: grid;
      grid-template-columns: 45% 1fr;
      grid-gap: 1rem;
      grid-template-areas: 'a b';
      padding-bottom: 0;
      &--img {
        width: 100%;
        height: auto;
        svg {
          position: absolute;
          top: -5px;
          right: 0.15rem;
          width: 500px;
          height: auto;
        }
      }
      &--wrapper {
        grid-area: a;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding: 4rem 0 1rem 0;
    .leads {
      &--img {
        width: 100%;
        height: auto;
        svg {
          position: absolute;
          top: -5px;
          right: 0.15rem;
          width: 560px;
          height: auto;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .leads {
      padding-bottom: 4rem;
      grid-template-columns: 55% 1fr;
      &--img {
        svg {
          width: 650px;
          right: 4rem;
        }
      }
      &--wrapper {
        padding-top: 3rem;
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
