import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import getYouTubeId from 'get-youtube-id';
import { window } from 'browser-monads';
import YouTube from 'react-youtube';
import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  FacebookShareButton,
} from 'react-share';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import EmailIcon from '../svgs/blogsend.svg';
import TwitterIcon from '../svgs/blogtwitter.svg';
import FacebookIcon from '../svgs/blogfacebook.svg';
import LinkedInIcon from '../svgs/bloglinkedin.svg';
import GetImage from '../components/functional/getImage';
import RelatedBlogs from '../components/sections/relatedblogs';

const Blog = ({ data }) => {
  const blogData = data.Blog;
  const coverImage = blogData.mainImage;
  const RelatedData = data.Category;
  return (
    <Layout>
      <SEO
        title={`${blogData.title} | Nutcracker Agency`}
        description={blogData.excerpt}
        img={blogData.mainImage.asset.url}
      />
      <BlogHeader coverImage={coverImage} />
      <main>
        <BlogBody blogData={blogData} />
        <RelatedBlogs relatedBlogsData={RelatedData} />
      </main>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    Blog: PropTypes.shape({
      mainImage: PropTypes.any,
    }),
    Category: PropTypes.any,
  }),
};

export default Blog;

const BlogHeaderStyles = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 5rem 0 0 0;
  .bheader {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    .gatsby-image-wrapper {
      height: auto;
      width: 100%;
      border-radius: 4.5px;
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 7rem;
    .bheader {
      width: 70%;
    }
  }
`;
const BlogHeader = ({ coverImage }) => (
  <BlogHeaderStyles>
    <div className="bheader">
      {/* <Img fluid={coverImage.asset.fluid} alt={coverImage.alt} /> */}
      <GetImage data={coverImage} />
    </div>
  </BlogHeaderStyles>
);

BlogHeader.propTypes = {
  coverImage: PropTypes.any,
};
const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.GATSBY_SANITY_ID,
    dataset: 'production',
  }).image(source);

const BlogBodyStyles = styled.article`
  width: 100%;
  background-color: #fff;
  .bb {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    &__left {
      padding-top: 1.5rem;
      &--title {
        h5 {
          font-weight: 700;
          color: var(--mainColour);
        }
        h1 {
          margin: 0.75rem 0;
        }
        span {
          color: var(--mainColour);
          font-weight: 700;
          font-family: var(--slab);
          display: inline-block;
        }
        p {
          margin-right: 5px;
          display: inline-block;
          font-family: var(--slab);
        }
      }
      &--body {
        margin-top: 1.5rem;
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 1rem 0;
        }
        strong {
          color: #000;
        }
        p {
          line-height: 1.45;
          font-size: var(--text);
          margin: 1.2rem 0;
        }
        ul {
          list-style: inside;
        }
        ol {
          list-style-position: inside;
        }
        li {
          margin: 0.5rem 0;
          line-height: 1.45;
          font-size: var(--text);
        }
        a {
          color: var(--mainColour);
          font-weight: 800;
        }
        .image {
          img {
            width: 100%;
            height: auto;
          }
        }
        iframe {
          width: 100%;
        }
      }
    }
    &__right {
      margin-top: 1rem;
      &--author {
        background-color: var(--navy);
        color: #fff;
        padding: 1rem;
        display: flex;
        border-radius: 4.5px;
        section {
          margin-right: 10px;
          .gatsby-image-wrapper {
            width: 50px;
            height: 50px;
            border-radius: 40px;
          }
        }
        div {
          h6 {
            color: var(--altBackground);
            font-size: var(--titleExtraSmall);
            font-weight: 400;
            margin-top: 4.5px;
            font-weight: 500;
          }
          p {
          }
        }
      }
      &--share {
        width: 100%;
        padding: 1.75rem 0 0 0;
        p {
          text-align: center;
          margin-bottom: 1rem;
          font-weight: 700;
          color: var(--mainColour);
        }
        &__wrapper {
          display: flex;
          justify-content: space-evenly;
        }
        button {
          width: 100%;
          svg {
            width: 20px;
            fill: var(--mainColour);
          }
        }
      }
    }
    @media only screen and (min-width: 750px) {
      display: grid;
      grid-template-columns: 65% 1fr;
      grid-gap: 1.5rem;
      position: relative;
      .sticky {
        position: sticky;
        top: 5rem;
      }
      &__right {
        position: static;
        top: 1rem;
        height: 100%;
        &--author {
          bottom: 5rem;
          display: block;
          section {
            width: 80px;
            margin: 0 auto 0.5rem auto;
            .gatsby-image-wrapper {
              width: 100%;
              height: auto;
            }
          }
          div {
            text-align: center;
          }
        }
        &--share {
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      width: 70%;
      padding-top: 2rem;
    }
  }
`;
const BlogBody = ({ blogData }) => {
  const serializers = {
    types: {
      mainImage: (props) => (
        <div className="image">
          <img
            src={`${urlFor(props.node.asset)
              .width(1388)
              .height(926)
              .fit('crop')
              .auto('format')}`}
            alt={blogData.title}
          />
        </div>
      ),
      videoEmbed: ({ node }) => {
        const { url } = node;
        const id = getYouTubeId(url);
        return <YouTube videoId={id} className="video" />;
      },
    },
  };
  return (
    <BlogBodyStyles>
      <div className="bb">
        <div className="bb__left">
          <div className="bb__left--title">
            <h5>{blogData.categories[0].title}</h5>
            <h1>{blogData.title}</h1>
            {/* <p>{` ${blogData.publishedAt} :`}</p>
            <span>{`${blogData.readingTimeInMinutes} min read`}</span> */}
          </div>
          <div className="bb__left--body">
            <PortableText
              blocks={blogData._rawBody}
              serializers={serializers}
            />
          </div>
        </div>
        <div className="bb__right">
          <div className="sticky">
            <div className="bb__right--author">
              <section>
                <GetImage data={blogData.authors[0].author.image} />
                {/* <Img
                  fluid={blogData.authors[0].author.image.asset.fluid}
                  alt={blogData.authors[0].author.image.alt}
                /> */}
              </section>
              <div>
                <h6>{blogData.authors[0].author.name}</h6>
                <p>{blogData.authors[0].author.position}</p>
              </div>
            </div>
            <div className="bb__right--share">
              <p>Share this: </p>
              <div className="bb__right--share__wrapper">
                <EmailShareButton
                  url={window.location.href}
                  subject={blogData.title}
                  body="Check out this amazing blog by the UCtel team"
                >
                  <div className="share--box email">
                    <EmailIcon />
                  </div>
                </EmailShareButton>
                <TwitterShareButton
                  url={window.location.href}
                  title={blogData.title}
                >
                  <div className="share--box twitter">
                    <TwitterIcon />
                  </div>
                </TwitterShareButton>
                <LinkedinShareButton
                  url={window.location.href}
                  summary={blogData.excerpt}
                  source="UCtel Blog"
                >
                  <div className="share--box linkedin">
                    <LinkedInIcon />
                  </div>
                </LinkedinShareButton>
                <FacebookShareButton
                  url={window.location.href}
                  quote={blogData.title}
                >
                  <div className="share--box facebook">
                    <FacebookIcon />
                  </div>
                </FacebookShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogBodyStyles>
  );
};

BlogBody.propTypes = {
  blogData: PropTypes.shape({
    _rawBody: PropTypes.any,
    authors: PropTypes.any,
    categories: PropTypes.any,
    excerpt: PropTypes.any,
    publishedAt: PropTypes.any,
    readingTimeInMinutes: PropTypes.any,
    title: PropTypes.any,
  }),
};

export const query = graphql`
  query SingleBlogQuery($slug: String!, $category: String!) {
    Blog: sanityPost(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      publishedAt(formatString: "MMM DD YYYY")
      id
      categories {
        title
      }
      excerpt
      _rawBody
      authors {
        author {
          name
          position
          id
          image {
            alt
            asset {
              url
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      mainImage {
        alt
        asset {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
          url
        }
      }
    }
    Category: allSanityPost(
      filter: {
        categories: { elemMatch: { title: { eq: $category } } }
        slug: { current: { ne: $slug } }
      }
      limit: 3
    ) {
      nodes {
        title
        slug {
          current
        }
        publishedAt(formatString: "MMM DD YYYY")
        id
        readingTimeInMinutes
        categories {
          title
          slug {
            current
          }
        }
        authors {
          author {
            name
            id
            position
            image {
              alt
              asset {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        mainImage {
          alt
          asset {
            gatsbyImageData(
              width: 700
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
