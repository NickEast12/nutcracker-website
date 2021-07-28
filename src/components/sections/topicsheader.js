import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import DownIcon from '../../svgs/down-chevron.svg';

const TopicsHeaderStyles = styled.header`
  width: 100%;
  padding: 6rem 0 3rem 0;
  @media only screen and (min-width: 768px) {
    padding: 8rem 0 0 0;
  }
  .t-h {
    width: 90%;
    margin: var(--auto);

    h1 {
      font-size: var(--titleSemiLarge);
      text-align: center;
      font-weight: 700;
    }
    > p {
      margin-top: 1rem;
      text-align: center;
    }
    section {
      width: 100%;
      margin: 2rem 0 0 0;
      .topics {
        width: 100%;
        margin: var(--auto);
        position: relative;
        max-width: var(--maxWidth);
        &--active {
          width: 100%;
          border-radius: 4px;
          background-color: var(--altBackground);
          border: 1px solid rgb(236, 236, 236);
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          span {
          }
          svg {
            width: 15px;
            height: 100%;
          }
        }
        ul {
          position: absolute;
          background-color: #fff;
          width: 100%;
          box-shadow: 0 8px 16px rgb(21 20 23 / 10%);
          border: 1px solid rgb(236, 236, 236);
          border-radius: 8px;
          list-style: none;
          z-index: 5;
          padding: 0.5rem 0;
          li {
            padding: 0.75rem 1rem;
          }
        }
      }
      .topics--desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        .topics {
          display: none;
        }
        .topics--desktop {
          display: block;
          padding: 1.5rem 0 0.9rem 0;
          width: 90%;
          margin: var(--auto);
          ul {
            list-style: none;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            .marker {
              font-weight: 700;
              span {
                padding-bottom: 5px;
                border-bottom: solid 7px var(--mainColour);
              }
            }
            li {
              font-size: 1.1rem;
              a[aria-current='page'] {
                span {
                  font-weight: 700;
                  padding-bottom: 5px;
                  border-bottom: solid 7px var(--mainColour);
                }
              }
            }
          }
        }
      }
    }
    @media only screen and (min-width: 768px) {
      section {
        margin-bottom: 0;
      }
    }
  }
`;
const TopicsHeader = ({ name, description, data, page, topics }) => {
  const [open, setOpen] = useState(false);
  return (
    <TopicsHeaderStyles>
      <div className="t-h">
        <h1>{name}</h1>
        <p>{description}</p>
        <section open={open}>
          <div className="topics">
            <div
              role="button"
              className="topics--active"
              onClick={() => setOpen(!open)}
              tabIndex={0}
            >
              <span>{page}</span>
              <DownIcon />
            </div>
            <TopicList open={open} data={data} />
          </div>
          <div className="topics--desktop">
            <ul>
              <li>
                <Link to="/blog/all">
                  <span>All Blogs</span>
                </Link>
              </li>
              {topics.map((topic) => (
                <li key={topic.slug.current}>
                  <Link to={`/blog/${topic.slug.current}`}>
                    <span>{topic.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </TopicsHeaderStyles>
  );
};

TopicsHeader.propTypes = {
  data: PropTypes.any,
  description: PropTypes.any,
  name: PropTypes.any,
  page: PropTypes.any,
  topics: PropTypes.any,
};

export default TopicsHeader;

const TopicList = ({ open, data }) =>
  open ? (
    <ul>
      <li>
        <Link to="/blog/all">All Blogs</Link>
      </li>
      {data.map((topic) => (
        <li key={topic.name}>
          <Link to={`/blog/${topic.slug}`}>{topic.name}</Link>
        </li>
      ))}
    </ul>
  ) : (
    ''
  );

TopicList.propTypes = {
  data: PropTypes.any,
  open: PropTypes.any,
};
