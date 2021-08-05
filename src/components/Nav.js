import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { window, document } from 'browser-monads';
import NutrackerLogo from '../svgs/nutcracker-logo.svg';

const NavStyles = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 9999;
  .nav {
    width: 85%;
    max-width: var(--maxWidth);
    z-index: 99999;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    transition: all 0.35s linear;
    @media only screen and (min-width: 1024px) {
      padding: 2rem 0;
    }
    &--logo {
      width: 185px;
      position: relative;
      z-index: 999;
      svg {
        width: 100%;
      }
      @media only screen and (min-width: 1024px) {
        width: 200px;
      }
    }
    &--menu {
      position: absolute;
      width: 100%;
      margin-top: 3rem;
      transition: all 0.35s linear;
      /* animation: ${({ open }) => (open ? 'menuOut' : 'menu')} 0.35s both; */
      z-index: ${({ open }) => (open ? '9999' : '-99999')};
      opacity: ${({ open }) => (open ? '1' : '0')};
      visibility: ${({ open }) => (open ? 'shown' : 'hidden')};
      .desktop--menu {
        display: none;
        list-style: none;
        padding: 1rem;
      }
      @media only screen and (min-width: 1024px) {
        z-index: 9999999;
        opacity: 1;
        visibility: visible;
        position: static;
        margin-top: 0;
        width: 55%;
        .desktop--menu {
          display: block;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0;
          .dropdown {
            position: relative;
            /* transition: all 0.35s ease-in-out; */
            &:hover {
              section {
                animation: desktopMenuIn 0.35s ease-in-out forwards;
              }
            }
            section {
              opacity: 0;
              position: absolute;
              opacity: 0;
              visibility: hidden;
              width: 175px;
              top: 0;
              left: calc(0% - 39px);
              padding-top: 2rem;
              ul {
                width: 100%;
                list-style: none;
                padding: 0.25rem;
                border-radius: 4.5px;
                background-color: #fff;
                box-shadow: 0 2.4rem 4.4rem 0 rgb(5 22 70 / 15%);
                li {
                  color: #000;
                  text-align: center;
                  padding: 0.5rem 0;
                }
              }
            }
          }

          .dropdowntwo {
            position: relative;
            /* transition: all 0.35s ease-in-out; */
            &:hover {
              section {
                animation: desktopMenuIn 0.35s ease-in-out forwards;
              }
            }
            section {
              opacity: 0;
              position: absolute;
              opacity: 0;
              visibility: hidden;
              width: 175px;
              top: 0;
              left: calc(0% - 30px);
              padding-top: 2rem;
              ul {
                width: 100%;
                list-style: none;
                padding: 0.25rem;
                border-radius: 4.5px;
                background-color: #fff;
                box-shadow: 0 2.4rem 4.4rem 0 rgb(5 22 70 / 15%);
                a {
                  color: #000 !important;
                }
                li {
                  color: #000;
                  text-align: center;
                  padding: 0.5rem 0;
                }
              }
            }
          }

          button {
            width: 150px;
          }
        }
      }
    }
    &--hamburger {
      width: 30px;
      height: 100%;
      padding-top: 5.5px;
      transition: all 0.35s linear;
      position: relative;
      @media only screen and (min-width: 1024px) {
        display: none;
      }
      div {
        width: 100%;
        height: 3px;
        margin: 0 0 0 auto;
        background-color: var(--mainColour);
        content: '';
        border-radius: 3px;
        margin-bottom: 5px;
        transition: all 0.25s linear;
        transform-origin: 3px;
        &:nth-child(1) {
          transform: ${({ open }) => (open ? 'rotate(40deg)' : 'rotate(0deg)')};
          width: ${({ open }) => (open ? '100%' : '60%')};
        }
        &:nth-child(2) {
          width: 100%;
          transform: ${({ open }) =>
            open ? 'translateX(50px)' : 'translateX(0)'};
          opacity: ${({ open }) => (open ? '0' : '1')};
        }
        &:nth-child(3) {
          width: ${({ open }) => (open ? '100%' : '80%')};
          transform: ${({ open }) =>
            open ? 'rotate(-40deg)' : 'rotate(0deg)'};
        }
      }
    }
    .mobile--menu {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: -2;
      transition: all 0.4s ease-in-out;
      background-color: rgba(30, 54, 59, 0.7);
      backdrop-filter: saturate(180%) blur(24px);
      /* display: ${({ open }) => (open ? 'block' : 'none')}; */
      /* opacity: ${({ open }) => (open ? '1' : '0')}; */
      /* animation: ${({ open }) =>
        open ? 'menu' : 'menuOut'} 0.35s forwards; */
      opacity: ${({ open }) => (open ? '1' : '0')};
      visibility: ${({ open }) => (open ? 'shown' : 'hidden')};
      display: flex;
      flex-direction: column;
      justify-content: center;
      &--top {
        padding-top: 2.5rem;
        li {
          &:nth-child(1) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 0.35s
              forwards;
          }
          &:nth-child(2) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 0.5s
              forwards;
          }
          &:nth-child(3) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 0.65s
              forwards;
          }
          &:nth-child(4) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 0.8s
              forwards;
          }
          &:nth-child(5) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 0.95s
              forwards;
          }
          &:nth-child(6) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 1.1s
              forwards;
          }
        }
      }
      &--lower {
        li {
          &:nth-child(1) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 1.25s
              forwards;
          }
          &:nth-child(2) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 1.4s
              forwards;
          }
          &:nth-child(3) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 1.55s
              forwards;
          }
          &:nth-child(4) {
            opacity: 0;
            transform: translateY(-10px);
            animation: ${({ open }) => (open ? 'e-in' : '')} ease 0.35s 1.7s
              forwards;
          }
        }
      }
      &--top,
      &--lower {
        list-style: none;
        li {
          color: #ffffff;
          padding: 0.85rem 0;
          font-weight: 500;
          font-size: 0.95rem;
          @media only screen and (min-width: 375px) {
            font-size: 1.1rem;
            padding: 1rem 0;
          }
          text-align: center;
          a {
            font-family: var(--serif);
          }
          button {
            text-align: center;
            margin: 0 auto;
            display: block;
            width: 250px;
            /* margin-top: 0.5rem; */
            max-width: 100%;
            span {
            }
          }
        }
      }
      &--top {
      }
      &--lower {
        li {
          /* border-top: solid rgba(255, 255, 255, 0.95) 2px; */
          padding-bottom: 8px;
        }
        .menu-btn {
          text-align: center;
        }
      }
    }
  }
`;
const Nav = ({ alt }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const changeNavScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  window.addEventListener('scroll', changeNavScroll);
  return (
    <NavStyles
      className={open ? 'nav-disable' : '' || scroll ? 'nav nav-active' : 'nav'}
      open={open}
    >
      <div className="nav">
        <div className="nav--logo">
          {/* <StaticImage
            src="../assets/images/nutcracker-logo.png"
            alt="Nutracker Logo"
          /> */}
          <Link to="/">
            <NutrackerLogo />
          </Link>
        </div>
        <div className={alt ? 'nav--menu darkBg ' : 'nav--menu '}>
          <ul className="desktop--menu">
            <li className="dropdown">
              What we do
              <section>
                <ul>
                  <li>
                    <Link to="/marketing">Marketing</Link>
                  </li>
                  <li>
                    <Link to="/content">Content</Link>
                  </li>
                  <li>
                    <Link to="/social-media">Social media</Link>
                  </li>
                  <li>
                    <Link to="/design">Design</Link>
                  </li>
                  <li>
                    <Link to="/lead-generation">Lead generation</Link>
                  </li>
                  <li>
                    <Link to="/pr">PR</Link>
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <Link to="/team">The team</Link>
            </li>
            <li className="dropdowntwo">
              News &amp; views
              <section>
                <ul>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/podcasts">Podcasts</Link>
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <Link to="/contact">
                <button className="btn btn--main" type="button">
                  <span>Contact us now</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="nav--hamburger"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          open={open}
        >
          <div />
          <div />
          <div />
        </div>
        <div className="mobile--menu" open={open}>
          <ul className="mobile--menu--top">
            <li>
              <Link to="/marketing">Marketing</Link>
            </li>
            <li>
              <Link to="/content">Content</Link>
            </li>
            <li>
              <Link to="/social-media">Social media</Link>
            </li>
            <li>
              <Link to="/design">Design</Link>
            </li>
            <li>
              <Link to="/lead-generation">Lead generation</Link>
            </li>
            <li>
              <Link to="/pr">PR</Link>
            </li>
          </ul>
          <ul className="mobile--menu--lower">
            <li>
              <Link to="/team">The team</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/podcasts">Podcasts</Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="btn btn--main" type="button">
                  <span>Contact us now</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
};

Nav.propTypes = {
  alt: PropTypes.any,
};

export default Nav;
