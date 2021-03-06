import { css } from 'styled-components';

const Animations = css`
  @keyframes menu {
    to {
      opacity: 1;
      visibility: visible;
    }
  }
  @keyframes menuOut {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
      z-index: -9999;
    }
  }
  @keyframes desktopMenuIn {
    to {
      opacity: 1;
      visibility: visible;
      z-index: 99999;
    }
  }
  @keyframes e-in {
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes fade-in-bck {
    0% {
      -webkit-transform: translateZ(80px);
      transform: translateZ(80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }

  .nav {
    transition: all 0.35s linear;
    z-index: 99999;
    &-active {
      background: rgba(30, 54, 59, 0.65);
      backdrop-filter: saturate(180%) blur(14px);
      @media only screen and (min-width: 1024px) {
        .nav {
          padding: 1rem 0 !important;
          .nav--menu {
            ul {
              li {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .nav-disable {
    backdrop-filter: none;
  }
  .darkBg {
    .desktop--menu {
      li {
        color: #fff;
      }
    }
  }
`;

export default Animations;
