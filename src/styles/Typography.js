import { css } from 'styled-components';
import AgencyBlackWOFF from '../assets/fonts/agencyfbblackcondensed.woff';
import AgencyBlackWOFF2 from '../assets/fonts/agencyfbblackcondensed.woff2';

const Typography = css`
  @font-face {
    font-family: 'Agency-Black';
    src: url('${AgencyBlackWOFF2}') format('woff2'),
      url('${AgencyBlackWOFF}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  html {
    font-size: 16px;
    @media only screen and (min-width: 414px) {
      font-size: 17px !important;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 18px !important;
    }
    /* @media only screen and (min-width: 375px) {
      font-size: 18.5px;
    }
    @media only screen and (min-width: 414px) {
      font-size: 19px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 20px;
    } */
  }
  h1 {
    font-size: var(--titleLarge);
  }
  h2 {
    font-size: var(--titleMedium);
  }
  h3 {
    font-size: var(--titleMedium);
  }
  h4 {
    font-size: var(--titleRegular);
  }
  h5 {
    font-size: var(--titleSmall);
  }
  h6 {
    font-size: var(--titleSmall);
  }
  p,
  li,
  span,
  i,
  input,
  textarea {
    font-size: var(--base);
  }
`;

export default Typography;
