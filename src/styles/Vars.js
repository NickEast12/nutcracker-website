import { css } from 'styled-components';

const Vars = css`
  :root {
    //*Colours
    --mainColour: #2ba5a2;
    --backgroundColour: #1e363b;
    --yellow: #ffd400;
    --navy: #41404c;
    --altBackground: rgb(245, 245, 245);
    --accent: rgb(157, 10, 74);
    //*Font
    --sans: museo-sans, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    --AgencyBlack: Agency-Black, -apple-system, system-ui, 'Helvetica Neue',
      Helvetica, Arial, sans-serif;
    //*Font-size
    --titleLarge: 3.052rem;
    --titleSemiLarge: 2.441rem;
    --titleMedium: 1.953rem;
    --titleSemiMedium: 1.563rem;
    --titleSmall: 1.25rem;
    --text: 1rem;
    --textMedium: 0.95rem;
    --textMediumSmall: 0.89rem;
    --textSmall: 0.8rem;
    //*Widths
    --maxWidth: 1200px;
    --auto: 0 auto;
  }
`;

export default Vars;
