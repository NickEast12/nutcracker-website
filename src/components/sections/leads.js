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
    overflow: hidden;
    .rel {
      padding: 3rem 0 0 0;
      position: relative;
    }
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
    .rel {
      padding: 4rem 0 3.5rem 0;
      max-width: var(--maxWidth);
      margin: var(--auto);
    }
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
          right: 1rem;
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
      <div className="rel">
        <div className="leads">
          <div className="leads--img">
            <NutLeadsIcon />
            {/* <NutLeadsIconAnimated /> */}
          </div>
          <div className="leads--wrapper">
            <h3>
              Targeted <span>lead generation</span> strategies that deliver
              results
            </h3>
            <p>
              Creating the right awareness - fuelled by insight, intelligence
              and creativity, across a mix of channels - has the potential to
              deliver high quality leads at scale.
            </p>
            <div className="leads--wrapper--btn">
              <Link to="/lead-generation">
                <button type="button" className="btn">
                  <span>Tell me more</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LeadsStyles>
  );
};

export default Leads;
