import { css } from 'styled-components';
import AgencyBlackWOFF from '../assets/fonts/agencyfbblackcondensed_2-webfont.woff';
import AgencyBlackWOFF2 from '../assets/fonts/agencyfbblackcondensed_2-webfont.woff2';
import SportFontWOFF from '../assets/fonts/sportsfonts_-_winner_cond_regular-webfont.woff';
import SportFontWOFF2 from '../assets/fonts/sportsfonts_-_winner_cond_regular-webfont.woff2';
import EssonnesDisplayWOFF2 from '../assets/fonts/EssonnesDisplay-Regular.woff2';
import EssonnesDisplayWOFF from '../assets/fonts/EssonnesDisplay-Regular.woff';

const Typography = css`
  @font-face {
    font-family: 'Agency-Black';
    src: url('${AgencyBlackWOFF2}') format('woff2'),
      url('${AgencyBlackWOFF}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Sport';
    src: url('${SportFontWOFF2}') format('woff2'),
      url('${SportFontWOFF}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Essonnes';
    src: url('${EssonnesDisplayWOFF2}') format('woff2'),
      url('${EssonnesDisplayWOFF}') format('woff');
    font-weight: normal;
    font-style: normal;
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
