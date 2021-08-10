import PropTypes from 'prop-types';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import DownIcon from '../../svgs/down-chevron.svg';

const BlogTopicsStyles = styled.aside`
  width: 100%;
  margin: 2rem 0 0 0;
  .topics {
    width: 90%;
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
      padding: 1.5rem 0;
      width: 90%;
      margin: var(--auto);
      ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        /* gap: 2rem; */
        .marker {
          font-weight: 700;
          span {
            padding-bottom: 5px;
            border-bottom: solid 7px var(--mainColour);
          }
        }
        li {
          font-size: 0.85rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .topics--desktop {
      width: 60%;
    }
  }
`;
const BlogTopics = () => {
  const data = useStaticQuery(graphql`
    query {
      topics: allSanityCategory(sort: { fields: _createdAt, order: DESC }) {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  const topicData = data.topics.nodes;
  const [open, setOpen] = useState(false);
  console.log(topicData);
  return (
    <BlogTopicsStyles open={open}>
      <div className="topics">
        <div
          className="topics--active"
          role="button"
          className="topics--active"
          onClick={() => setOpen(!open)}
          tabIndex={0}
        >
          <span>All blogs</span>
          <DownIcon />
        </div>
        <TopicList open={open} topicData={topicData} />
      </div>
      <div className="topics--desktop">
        <ul>
          <li className="marker">
            <Link to="/blog/all">
              <span>All Blogs</span>
            </Link>
          </li>
          {topicData.map((topics) => (
            <li key={topics.slug.current}>
              <Link to={`/blog/${topics.slug.current}`}>{topics.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </BlogTopicsStyles>
  );
};

export default BlogTopics;

const TopicList = ({ open, topicData }) =>
  open ? (
    <ul>
      {topicData.map((topic) => (
        <li key={topic.slug.current}>
          <Link to={topic.slug.current}>{topic.title}</Link>
        </li>
      ))}
    </ul>
  ) : (
    ''
  );

TopicList.propTypes = {
  open: PropTypes.any,
  topicData: PropTypes.any,
};
