import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GetImage from './getImage';
import FeaIcon from '../../svgs/twinkle.svg';

const FeaturedBlogStyles = styled.article`
  width: 100%;
  padding: 1rem 0;
  /* @media only screen and (min-width: 765px) {
    padding: 4rem 0;
  }
  @media only screen and (min-width: 1280px) {
    padding: 4rem 3rem;
  } */
  .fea {
    width: 90%;
    margin: var(--auto);
    transition: all 0.35s ease;
    border-radius: 10.5px;
    max-width: var(--maxWidth);
    border: solid var(--altBackground) 2px;
    &--img {
      width: 100%;
      height: auto;
      position: relative;
      .gatsby-image-wrapper {
        width: 100%;
        height: auto;
        border-radius: 8.5px 8.5px 0 0;
      }
      &__overlay {
        position: absolute;
        background-color: #427e83;
        padding: 0.5rem 0.75rem;
        border-radius: 5px;
        top: 0.5rem;
        left: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 25px;
          height: 25px;
          fill: #fff;
        }
        p {
          margin-left: 7.5px;
          font-weight: 400;
          color: #fff;
        }
      }
    }
    &--content {
      background-color: #fff;
      padding: 1.5rem 1rem 1rem 1rem;
      border-radius: 0 0 8.5px 8.5px;
      border: 1px solid rgb(236, 236, 236);
      border-top: 0;
      h6 {
        font-weight: 700;
        font-size: 0.95rem;
      }
      h2 {
        margin-top: 0.55rem;
        font-size: var(--titleSemiMedium);
      }
      .meta {
        color: rgba(0, 0, 0, 0.5);
      }
      p {
        margin-top: 1rem;
        color: var(--backgroundColour);
      }
      .author {
        border-top: solid 1px rgba(0, 0, 0, 0.15);
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 1rem;
        padding-top: 0.5rem;
        &__img {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          .gatsby-image-wrapper {
            border-radius: 50px;
          }
        }
        section {
          margin: 0;
          h6 {
            font-weight: 700;
            padding: 6px 0 0 9px;
            margin: 0;
          }
          p {
            color: var(--backgroundColour);
            padding: 0 0 0 9px;
            font-family: var(--slab);
            margin: 0;
            font-size: 0.85rem;
          }
          span {
            color: var(--mainColour);
          }
        }
      }
    }
    @media only screen and (min-width: 765px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      &--img {
        width: 100%;
        height: 100%;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 8.5px 0 0 8.5px;
        }
      }
      &--content {
        border-top: 1px solid rgb(236, 236, 236);
        border-radius: 0 8.5px 8.5px 0;
        /* padding: 1.5rem 1rem 1rem 1rem; */
        padding: 1.5rem 2rem;
        border-left: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    &:hover {
      border: solid var(--mainColour) 2px;
      transform: translateY(-10px);
    }
  }
`;
const SingleFeaturedBlog = ({ data }) => {
  const i = data;
  return (
    <FeaturedBlogStyles>
      <Link to={`/blog/${i.categories[0].slug.current}/${i.slug.current}`}>
        <div className="fea">
          <div className="fea--img">
            <GetImage data={i.mainImage} />
            <section className="fea--img__overlay">
              <FeaIcon />
              <p>Featured</p>
            </section>
          </div>
          <div className="fea--content">
            <h6>{i.categories[0].title}</h6>
            <h2>{i.title}</h2>
            <p className="meta">{`${i.publishedAt} | ${i.readingTimeInMinutes} min read`}</p>
            <div className="author">
              <div className="author__img">
                <GetImage data={i.authors[0].author.image} />
              </div>
              <section>
                <h6>{i.authors[0].author.name}</h6>
                <p>{i.authors[0].author.position}</p>
              </section>
            </div>
          </div>
        </div>
      </Link>
    </FeaturedBlogStyles>
  );
};

SingleFeaturedBlog.propTypes = {
  data: PropTypes.any,
};

export default SingleFeaturedBlog;
