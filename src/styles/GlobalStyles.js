import { createGlobalStyle } from 'styled-components';
// ? Local imports
import vars from './vars';
import animations from './animations';
import typography from './typography';

const GlobalStyles = createGlobalStyle`
    ${vars}
    ${animations}
    ${typography}
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    a, a:visited {
        color: inherit;
        text-decoration: none;
   }
  
    body {
        width: 100%;
        height: 100%;
        overflow: scroll;
        -webkit-font-smoothing: subpixel-antialiased !important; 
        text-rendering:optimizeLegibility !important;
        background-color: #fff;
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: var(--sans);
      margin: 0;
      letter-spacing: -.5px;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      text-rendering: optimizeLegibility; 
      font-smoothing: antialiased; 
      font-weight: 500;
      color: var(--backgroundColour);
    }
    .title--bold {
        font-weight: 700;
    }
    .title--intro {
        font-size: var(--titleSmall);
        font-weight: 700;
        color: var(--mainColour);
    }
    .btn:hover  &::after{
        opacity: 0;
    }
    .btn {
        width: 100%;
        padding: .75rem 0; 
        border-radius: 3px;
        cursor: pointer;
        max-width: 300px;
        position: relative;
        z-index: 99;
        overflow-x: hidden;
        transition: all .35s ease-in-out;
        border: solid 2px var(--mainColour);
       
        span {
            vertical-align: center;
            font-size: var(--text);
            font-family: var(--serif);
            letter-spacing: -.5px;
            color: #fff;
            font-weight: 500;
            position: relative;
            z-index: 999;
            transition: all .35s ease-in-out;
        }
    }
    .btn--main {
        background: var(--mainColour);
        border: none;
        &:hover {
          background-color: var(--navy);
        }
    }
    .btn--alt {
        background: none;
        border: solid 2px var(--mainColour);
        span {
            color: var(--mainColour);
        }
        &:hover {
          background-color: var(--mainColour);
          transform: scale(1.01, 1.05);
          span {
              color: #fff;
          }
        }
    }
    p , li, input, address, label,input, textarea, blockquote, button, span  {
      font-family: var(--sans);
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      font-weight: 300;
    }
    p {
        line-height: 1.5;
    }
    a {
        font-family: var(--sans);
        fill: #fff; 
    }
    .willAnimate {
        opacity: 0;
        transform: translateY(20px);
    }
    .hidden {
        display: none;
    }
    .cookie__wrapper {
        position: fixed;
        width: 80%;
        bottom: 1rem;
        z-index: 999;
        background-color: #fff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 4.5px;
        left: calc(0% + 10%);
        padding: 1.5rem 2rem;
        text-align: center;
        @media only screen and (min-width: 600px) {
            text-align: left;
            width: 350px;
            left: calc(0% + 5%);
        }
        span {
            color: var(--mainColour);
            border-bottom: solid 1px var(--mainColour);
            
        }
        .cookie--btn {
            font-family: var(--serif);
            font-feature-settings: "kern" 1;
            font-kerning: normal;
            font-weight: 300;
            color: #fff;
            margin-top: 1rem;
        }
       
            
    }
    
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: inherit;
    }
   
    /* a[aria-current="page"] {
        color: var(--mainColour)!important;
    } */
  
`;

export default GlobalStyles;
