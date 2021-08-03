import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GetImage from '../functional/getImage';
import EmailIcon from '../../svgs/email.svg';
import LinkedinIcon from '../../svgs/linkedin.svg';
import CloseIcon from '../../svgs/close.svg';

const SingleTeamStyles = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  .box--content {
    transition: all 0.35s ease-in-out;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(65, 64, 76, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    section {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      padding-top: 1.5rem;

      color: #fff;
      /* @media only screen and (min-width: 375px) {
            padding-top: 2.5rem;
          }
          @media only screen and (min-width: 414px) {
            padding-top: 3rem;
          }
          @media only screen and (min-width: 750px) {
            padding-top: 2.5rem;
          }
          @media only screen and (min-width: 1024px) {
            padding-top: 5rem;
          }
          @media only screen and (min-width: 1280px) {
            width: 70%;
          } */
      h5 {
        font-size: 1.4rem;
        font-weight: 500;
        opacity: 0;
        color: var(--altBackground);
        transform: translateY(10px);
        transition: all 0.35s ease-in-out;
      }
      p {
        margin-top: 0.25rem;
        line-height: 1.2;
        opacity: 0;
        transform: translateY(10px);
      }
      .icons {
        width: 50%;
        margin: 1em auto 0 auto;
        display: flex;
        justify-content: space-between;
        transition: all 0.35s ease-in-out;
        opacity: 0;
        transform: translateY(10px);
        svg {
          width: 20px;
          &:hover {
            fill: var(--mainColour);
          }
        }
        @media only screen and (min-width: 1024px) {
          width: 35%;
        }
      }
    }

    &:hover h5 {
      animation: 0.35s ease-in-out forwards ItemIn;
    }
    &:hover p {
      animation: 0.35s 0.25s ease-in-out forwards ItemIn;
    }
    &:hover .icons {
      animation: 0.35s 0.45s ease-in-out forwards ItemIn;
    }
  }
  &:nth-child(even) {
    margin-top: 2rem;

    .box--content:hover {
      background-color: rgba(30, 54, 59, 0.5);
    }
  }
  &:nth-child(odd) {
    .box--content:hover {
      background-color: rgba(43, 165, 162, 0.5);
    }
  }
`;

const SingleTeam = ({ team }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
    }
  }, [open]);
  return (
    <>
      <SingleTeamStyles
        className="willAnimate photosIn"
        key={team.name}
        onClick={() => setOpen(true)}
        onKeyDown={() => setOpen(true)}
        role="button"
        tabIndex={0}
      >
        <GetImage data={team.image} />

        <div className="box--content">
          <section>
            <h5>{team.name}</h5>
            <p>{team.position}</p>
            <div className="icons">
              {team.email === null || 0 ? (
                ''
              ) : (
                <a href={`mailto:${team.email}`}>
                  <EmailIcon />
                </a>
              )}
              {team.linkedin === null || 0 ? (
                ''
              ) : (
                <a
                  href={team.linkedin}
                  target="_blank"
                  rel="noopener
                  noreferrer"
                >
                  <LinkedinIcon />
                </a>
              )}
            </div>
          </section>
        </div>
      </SingleTeamStyles>
      <SingleBio open={open} setOpen={setOpen} team={team} />
    </>
  );
};

SingleTeam.propTypes = {
  team: PropTypes.shape({
    email: PropTypes.any,
    image: PropTypes.any,
    linkedin: PropTypes.any,
    name: PropTypes.any,
    position: PropTypes.any,
  }),
};

export default SingleTeam;

const SingleBioStyles = styled.aside`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  background-color: rgba(30, 54, 59, 0.5);
  backdrop-filter: saturate(180%) blur(24px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  section {
    max-width: var(--maxWidth);
    animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    overflow: scroll;
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    padding: 2rem 1rem;
    width: 90%;
    margin: var(--auto);
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    .t-i {
      width: 50%;
      margin: var(--auto);
      .gatsby-image-wrapper {
        width: 100%;
        border-radius: 6px;
        max-width: 250px;
      }
    }
    .t-c {
      h5 {
        text-align: center;
        margin-top: 1rem;
        font-size: 1.4rem;
      }
      p {
        text-align: center;
        margin: 1rem 0;
        font-size: 0.8rem;
        @media only screen and (min-width: 375px) {
          font-size: 0.95rem;
        }
      }
      .icons {
        display: flex;
        width: 80px;
        margin: var(--auto);
        justify-content: space-between;
        align-items: center;
        a {
          svg {
            fill: var(--mainColour);
            width: 30px;
          }
          &:nth-child(2) {
            svg {
              width: 26px;
            }
          }
        }
      }
    }
    > svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 20px;
      height: 20px;
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 40% 1fr;
      width: 90%;
      .t-i {
        display: flex;
        justify-content: center;
        align-items: center;
        .gatsby-image-wrapper {
        }
      }
      .t-c {
        h5,
        p {
          text-align: left;
        }
        .icons {
          margin: 0 auto 0 0;
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 35% 1fr;
      grid-gap: 2rem;
      width: 75%;
      padding: 2rem;
      .t-i {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .gatsby-image-wrapper {
        }
      }
      .t-c {
        h5,
        p {
          text-align: left;
        }
        .icons {
          margin: 0 auto 0 0;
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      display: grid;
      grid-template-columns: 35% 1fr;
      grid-gap: 2rem;
      width: 60%;
      padding: 2rem;

      .t-c {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;
const SingleBio = ({ open, setOpen, team }) => {
  const i = true;
  return open ? (
    <SingleBioStyles onClick={() => setOpen(false)}>
      <section>
        <CloseIcon onClick={() => setOpen(false)} />
        <div className="t-i">
          <GetImage data={team.image} />
        </div>
        <div className="t-c">
          <h5>{team.name}</h5>
          <p>{team.bio}</p>

          <div className="icons">
            {team.email === null || 0 ? (
              ''
            ) : (
              <a href={`mailto:${team.email}`}>
                <EmailIcon />
              </a>
            )}
            {team.linkedin === null || 0 ? (
              ''
            ) : (
              <a
                href={team.linkedin}
                target="_blank"
                rel="noopener
                  noreferrer"
              >
                <LinkedinIcon />
              </a>
            )}
          </div>
        </div>
      </section>
    </SingleBioStyles>
  ) : (
    ''
  );
};
