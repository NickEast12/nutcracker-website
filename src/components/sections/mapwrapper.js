import React from "react";
import styled, { css } from "styled-components";
import Map from "../functional/map";
// import OfficeIcon from '../../svgs/office.svg';
import OfficeIcon from "../../svgs/nut.svg";

const MapWrapperStyles = styled.section`
  width: 100%;
  background-color: #fff;
  .map {
    &__content {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
      /* padding: 1rem 0.75rem; */
      border-radius: 5px;
      margin-bottom: 1.5rem;
      ${props => props.$second && css`
        margin-bottom: 2.5rem!important;
      `}
      svg {
        width: 60px;

        fill: #fff;

        padding: 0.5rem;
      }

      h5 {
        margin-top: 0.5rem;
        font-weight: 700;
        color: var(--mainColour);
        margin-bottom: 0.5rem;
      }
      address {
        span {
          color: var(--mainColour);
          font-weight: 700;
        }
        font-style: normal;
        line-height: 1.4;
        font-size: .95rem;
      }
    }
    @media only screen and (min-width: 750px) {
      position: relative;
      &__content {
        position: relative;
        width: 90%;
        margin: 0 auto;
        max-width: var(--maxWidth);
        &--wrapper {
          position: absolute;
          top: 4rem;
          left: 2rem;
          width: 35%;
          z-index: 5;
          padding: 1.5rem;
          background-color: #fff;
          box-shadow: 0 2.4rem 4.4rem 0 rgb(5 22 70 / 15%);
          ${props => props.$second && css`
        right: 2rem;
        left: auto;
      `} 
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      &__content--wrapper {
        width: 25%;
        border-radius: 10px;
      }
    }
  }
`;
const MapWrapper = props => {
  const { sutton } = props 
  return (
    <MapWrapperStyles {...props}>
      <div className="map">
        <div className="map__content">
          <div className="map__content--wrapper">
            <OfficeIcon />
            {sutton ? ( <address>
              <a
                href="https://www.google.co.uk/maps/search/Nutcracker+Agency+Salatin+House+19+Cedar+Road+Sutton+SM2+5DA/@51.358596,-0.1906146,17z/data=!3m1!4b1"
                target="_blank"
                rel="noopener noreferrer"
              >        
              <span>Sutton Office</span> <br />        
                Salatin House 19
                <br /> Cedar Road
                <br /> Sutton
                <br /> SM2 5DA
              </a>
            </address>) : (
              
              <address>
                <a
                  href="https://goo.gl/maps/xBTLLcCBhJFysQvb7"
                  target="_blank"
                  rel="noopener noreferrer"
                > <span>Ipswich Office</span> <br />
                  3rd and 4th Floors
                  <br />
                  Franciscan House
                  <br />
                  51 Princes Street
                  <br />
                  Ipswich
                  <br />
                  IP1 1UR
                </a>
              </address>

            )}
          </div>
        </div>
        <div className="map__wrapper">
          <Map sutton={sutton} />
        </div>
      </div>
    </MapWrapperStyles>
  );
};

export default MapWrapper;
