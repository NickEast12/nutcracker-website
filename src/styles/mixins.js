import { css } from 'styled-components';

const Mixins = {
  button: css`
    width: 100%;
    margin-top: 1.5rem;
    button {
      background: var(--mainColour);
      border: none;
      span {
        color: #fff;
      }
      &:hover {
        background-color: var(--navy);
      }
    }
  `,
  title: css`
    width: 100%;
  `,
};

export default Mixins;
