import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import Review from '../components/sections/review';
import ServiceHeader from '../components/sections/serviceheader';
import ServiceBody from '../components/sections/servicebody';
import ServiceContact from '../components/servicecontact';
import NewServiceBodyLeft from '../components/sections/newservicebody';
import LowerIcon from '../svgs/marketing-strategy-nutcracker-agency.svg';
import ServiceBlogs from '../components/sections/serviceblogs';

const icon = [
  {
    src: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 621.8 638.32"
      >
        <path
          d="M185.35 584.27s23.66-9.52 33.36 15.86v21.11s-13.76 8.34-32.78 2.57z"
          fill="#ffe100"
        />
        <path
          d="M201.83 583.31l-.5-1v-1.63l-1.05-.58-1.28-.5-.93-1.17H196l-2.59-4.35-.67 1.44-.7-.12-2.57 3.85-1.28 5.48-1.4 2.33 1.4 24.15 3.15 16.68 6.18 6.3 4.33 1.93s.8.29.68-4.73c0 0 .58-1.52.93-.12 0 0-.11 5.86.82 5.48l4.08-2.68 9.33-14.35 5-20.06v-17.73l-4.32-4.08-.58 2-.82 1-.35 2.57-1.05.23-.7 5.37h-1.05l-.42 1.69s4.87 6.32 5.09 9.39c0 0-.6 13.94-8.57 21.92l-3.56 2.35a19.26 19.26 0 01-11.78.12l-1.76-4.49-.58-2 .35-2.8-1.4-4.78-1.53-18.42s-.25-4.12-.25-4.47.24-1.63.24-1.63l.3-2.27s7.05-1.37 11.88-.32z"
          fill="#4c4c4c"
        />
        <path
          d="M193.37 574.09s-13-.38-20.87 5h-1.15s-8.42 4-11.68 21.44 12.64 33.12 19.34 34.27 4.4-1 11.3 2.3 11.51-1 11.51-1 .33-2.28-2.58-2.28l-1.05-.7-1.05-1.63h-1.28l-.58-1.75s-2.92-2.68-4-8.52l-1.41-9.32-.1-1.65c-1.12 0-1.94-14.67-1.48-17.94 0 0-.85-5.39-.15-7.61l.7-2.8.58-2.68 1.28-2 1.28-1.87.7.12zM219.06 576.46a49.4 49.4 0 0116 8.87h.82s13.88 9 2.8 33.48c0 0-8.75 16.33-23.91 18a23.54 23.54 0 01-3.15-.7s-4.67-.7-7.35.7l1.87-2.1.47-2.57L210 630l.23-3.62.7-.82.47-.93 2-1.87v-1.63l1.05-2.8 1.28-.23c.77.1 6.31-14.51 5-19.09l-.23-2.26-.23-4.67-.12-1.71.35-3.43-.7-1.17.58-3.38-1.4-2.57-.58-2z"
          fill="#00a7a2"
        />
        <ellipse cx={202.03} cy={560.99} rx={4.06} ry={3.9} fill="#4c4c4c" />
        <ellipse cx={202.03} cy={546.57} rx={4.06} ry={3.9} fill="#00a7a2" />
        <ellipse cx={202.03} cy={532.14} rx={4.06} ry={3.9} fill="#ffe100" />
        <path
          fill="none"
          stroke="#ffe100"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M201.83 535.25v-64.57l-.48-44.63M305.33 406.11s142.91 27.54 143.39-71.22M364.21 301.18s-77.87 18-141.49-15.19"
        />
        <path
          d="M223.1 355.11H12.92A12.91 12.91 0 010 342.2V175.08a5.75 5.75 0 015.75-5.75h207.79a9.56 9.56 0 019.56 9.56z"
          fill="#ffe100"
        />
        <path fill="#00a8a3" d="M137.87 215.36h23.37v88.69h-23.37z" />
        <path fill="#9b0056" d="M109.26 249.57h23.37v54.49h-23.37z" />
        <path fill="#00a8a3" d="M80.65 263.21h23.37v40.85H80.65z" />
        <path fill="#9b0056" d="M52.04 283.73h23.37v20.33H52.04z" />
        <path
          d="M223.1 186.79H0v-12.71a5.88 5.88 0 015.88-5.88h211.41a5.8 5.8 0 015.8 5.8v12.79z"
          fill="#203e45"
        />
        <ellipse cx={11.82} cy={177.49} rx={3.33} ry={3.45} fill="#fff" />
        <ellipse cx={24.12} cy={177.49} rx={3.33} ry={3.45} fill="#00a7a2" />
        <ellipse cx={36.43} cy={177.49} rx={3.33} ry={3.45} fill="#ffe100" />
        <path
          d="M544 32.11H187.76V8.6a8.6 8.6 0 018.6-8.6h339a8.66 8.66 0 018.66 8.66v23.45z"
          fill="#203e45"
        />
        <ellipse cx={206.63} cy={16.05} rx={5.32} ry={5.96} fill="#fff" />
        <ellipse cx={226.28} cy={16.05} rx={5.32} ry={5.96} fill="#00a7a2" />
        <ellipse cx={245.92} cy={16.05} rx={5.32} ry={5.96} fill="#ffe100" />
        <path
          d="M535.44 272.85H196.36a8.6 8.6 0 01-8.6-8.6V32.11H544v232.15a8.6 8.6 0 01-8.56 8.59z"
          fill="#00a8a3"
        />
        <path
          d="M307.37 339.27H101.11v-12.22a6.37 6.37 0 016.37-6.37H299a8.37 8.37 0 018.37 8.37z"
          fill="#203e45"
        />
        <ellipse cx={112.04} cy={329.97} rx={3.08} ry={3.45} fill="#fff" />
        <ellipse cx={123.41} cy={329.97} rx={3.08} ry={3.45} fill="#00a7a2" />
        <ellipse cx={134.78} cy={329.97} rx={3.08} ry={3.45} fill="#ffe100" />
        <path
          d="M297.34 478.64H109.89a8.78 8.78 0 01-8.78-8.78V339.27h206.26v129.34a10 10 0 01-10.03 10.03z"
          fill="#00a8a3"
        />
        <g data-name="ysfmeN">
          <path
            d="M302.08 92.13c5.18-4.09 10.07-8.64 15.6-12.2 30.55-19.69 69.63-17.13 96.81 6.63 6.5 5.69 11.68 12.89 18 20l-15.45 7.68c-13.88-21-33.17-31.9-58.33-31-19.1.68-35.06 8.74-47.33 23.49a64.89 64.89 0 0012.69 94.81c31.13 21.79 76.89 12.31 96-25.84 2.35 1.12 4.73 2.25 7.1 3.4l7.2 3.51a68.74 68.74 0 01-12.91 19.73c-30.15 32.8-79.06 36.13-113.07 7.77-29.45-24.55-37-69.22-17.34-102.52a18.83 18.83 0 001.05-2.58q5.01-6.43 9.98-12.88z"
            fill="#fff"
          />
          <path
            d="M402 121.64c-4.39 2.16-8.45 4.35-12.68 6.08-1 .4-3-.37-3.84-1.27-11.85-12.94-31.38-14.55-44.64-3.53a32.61 32.61 0 00-5.7 44.56c13.88 19 43.28 17 54.41-3.77.37-.69.85-1.33 1.46-2.26l14.06 6.91c-7.65 19.22-29.94 31.19-51.43 28a48.36 48.36 0 01-40.91-44.43 49 49 0 0133.61-50.14c21.06-6.85 44.55 1.4 55.66 19.85z"
            fill="#fff"
          />
          <path
            d="M374.09 158a16.18 16.18 0 11-3-22.82 16.34 16.34 0 013 22.82z"
            fill="#9b0056"
          />
        </g>
        <path
          d="M505.24 335.94H375.61A10.93 10.93 0 01364.68 325v-98.06A10.93 10.93 0 01375.61 216h129.63a10.93 10.93 0 0110.93 10.93V325a10.94 10.94 0 01-10.93 10.94z"
          fill="#9b0056"
        />
        <path
          d="M516.16 233.66H364.68v-11.87a6.72 6.72 0 016.72-6.72h136.67a8.09 8.09 0 018.09 8.09z"
          fill="#203e45"
        />
        <ellipse cx={376.47} cy={224.36} rx={3.32} ry={3.45} fill="#fff" />
        <ellipse cx={388.74} cy={224.36} rx={3.32} ry={3.45} fill="#00a7a2" />
        <ellipse cx={401.01} cy={224.36} rx={3.32} ry={3.45} fill="#ffe100" />
        <path
          d="M452.49 150.8l-25.4-.05c1.76 5.77 3.43 11.28 5.26 17.31L387 146l45.46-22.32-5.15 17.32 24.93-.15c.19 3.3.36 6.44.54 9.58z"
          fill="#ffe100"
        />
        <g data-name="bsa4Db.tif" fill="#fff">
          <path d="M482.51 312.86l-9.35 9.39-11.34-11.35-12.2-12.22a1.14 1.14 0 00-1.66-.23 27.9 27.9 0 01-10.24 3.69 28.76 28.76 0 01-16.86-2.27 29.25 29.25 0 01-15.31-16 27.88 27.88 0 01-2.07-13.67A29.38 29.38 0 01415 249.35a28.33 28.33 0 0114.23-5.91 28.93 28.93 0 0125.73 9.34 28.35 28.35 0 017.83 19.41 28.78 28.78 0 01-3.78 15c-.89 1.57-.88 1.24.36 2.48zM410 272.78a23.1 23.1 0 1023.12-23 23.17 23.17 0 00-23.12 23z" />
          <path d="M426.47 272.79a3.28 3.28 0 11-3.34-3.24 3.38 3.38 0 013.34 3.24zM436.37 272.8a3.28 3.28 0 11-3.34-3.25 3.37 3.37 0 013.34 3.25zM446.28 272.85a3.28 3.28 0 11-3.29-3.29 3.37 3.37 0 013.29 3.29z" />
        </g>
        <g data-name="l2kqsQ" fill="#fff">
          <path d="M159.06 393.77L178.33 413c.32-.28.57-.48.79-.7 3.24-3.23 6.49-6.44 9.69-9.7.62-.63 1-.61 1.59 0q13.32 13.36 26.67 26.69c.1.1.22.19.38.33l13.84-13.92 21.15 21.3 7.63-7.62-28.93-28.86-13.64 13.65-27.74-27.83-11.08 11.22-11.54-11.69 8.25-8.12-.17-.26h-24.48v24.71z" />
          <path d="M150.75 402.2l8.32-8.44L178.34 413c.32-.28.57-.48.79-.7 3.24-3.23 6.49-6.44 9.69-9.7.62-.63 1-.61 1.59 0q13.32 13.4 26.67 26.7c.1.1.22.19.38.33l13.84-13.92L252.45 437l7.63-7.62-28.93-28.86-13.64 13.69-27.74-27.83-11.08 11.22-11.54-11.69 8.25-8.12-.17-.26h-24.48z" />
        </g>
        <path
          d="M515.19 278.39S624.39 294.53 619.65 173s-71.9-26.37-169-26.59"
          fill="none"
          stroke="#ffe100"
          strokeMiterlimit={10}
          strokeWidth={4}
        />
      </svg>
    ),
  },
];
const list = [
  {
    text: 'Maximise your marketing potential',
  },
  {
    text: 'Identify new opportunities and weak spots in your outreach',
  },
  {
    text: 'Open up new channels of communication with your target audience',
  },
  {
    text: 'Co-work with internal teams to improve marketing and sales alignment',
  },
  {
    text: 'Guide your strategy, using social media, content marketing and SEO to develop digital campaigns that get the best return for you',
  },
  {
    text: 'Measure everything. We gauge success based on results',
  },
];

const Marketing = ({ data }) => {
  const review = data.Review;
  const blogs = data.Category.nodes;
  return (
    <Layout>
      <SEO
        title="B2B Marketing Strategy, Implementation &amp; Insight | Nutcracker "
        description="As a B2B marketing agency, Nutcracker provides consultation and strategy to brands and startups looking to grow their business, achieve their dreams and succeed expectations. Find out more."
      />
      <ServiceHeader page="B2B marketing strategy">
        <h1>
          We build, design and execute <span>results-focused </span> B2B
          marketing strategies
        </h1>
      </ServiceHeader>
      <ServiceBody icon={icon[0].src}>
        <p>
          <span>A good marketing strategy always starts with the why.</span>{' '}
          It’s about going beneath the surface. It should underpin the way you
          run your business, lay the foundations for future decision-making and
          be driven by long-term strategic vision.
        </p>
        <p>
          Why do your customers need your product(s) or service(s)? If you can’t
          answer the why, explain who you are, and outline what you stand for,
          neither will your customers.
        </p>
      </ServiceBody>
      <NewServiceBodyLeft
        alt
        title="Our approach to your marketing strategy"
        strong="Building an effective marketing strategy involves extensive research
        into your target market, creating your customer persona, exploring
        trends, and investigating market size and demographics."
        fp="Whether you’re ready to scale up, need to overcome a business challenge, or are just looking for a fresh take on your marketing, we’ll look at the bigger picture, connect the dots and bring a new lease of life to your marketing. We promise to:"
        data={list}
      >
        <LowerIcon />
      </NewServiceBodyLeft>
      <ServiceContact>
        <h5>
          <span>Nutcracker</span> digs deep to develop a marketing strategy that
          will lead your business to success. We start with your business
          objectives and then we find the answers.
        </h5>
        <p>
          Have questions about B2B digital sales, marketing strategies or how
          Nutcracker can help?
        </p>
      </ServiceContact>
      <ServiceBlogs data={blogs} title="Our marketing insight" />
      <Review reviewData={review} />
    </Layout>
  );
};

Marketing.propTypes = {
  data: PropTypes.shape({
    Review: PropTypes.any,
  }),
};

export default Marketing;

export const Query = graphql`
  query ReviewQuery {
    Review: sanityReview(location: { eq: "marketingpage" }) {
      title
      quote
      name
      job
      id
      image {
        alt
        asset {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    Category: allSanityPost(
      filter: {
        categories: { elemMatch: { slug: { current: { eq: "marketing" } } } }
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
