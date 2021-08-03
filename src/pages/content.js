import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import Review from '../components/sections/review';
import ServiceHeader from '../components/sections/serviceheader';
import ServiceBody from '../components/sections/servicebody';
import ServicesExample from '../components/sections/example';
import ServiceList from '../components/sections/servicelist';

const icon = [
  {
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 114.65 649.96"
      >
        <path
          d="M30.78 532c.37 1 .88.7 1.28.07s.15-2.22-.21-2.28a4 4 0 00-.06-.5c-.21-1.12-.76-1.37-1.07-.49a5.71 5.71 0 00.06 3.2zM52.55 536.31c1.53 1.34 3.35-.94 3.19-6.41-.07-2.27-.44-4.07-1.15-4-.56-1-1.37-1-1.93-.12-1.14 1.85-1.66 9.22-.11 10.53zM16.89 522.8c1.33 4.47 3.14 3.35 4.35-.65a2.8 2.8 0 012.24-.73c2.65.57.55-1.67.2-2.3a24.86 24.86 0 01-1.94-7.12c-.41-2.37-.73-5.59-1.47-7.25-1.22-2.75-3.46-1.2-4.09 2.92-.68 4.38-.38 11.48.71 15.13zM34.39 536.85c.32 0 .56 1.51.72 2a3.63 3.63 0 00.62 1.31c.5.58 1 .37 1.56.15s1.87-.42-.23-2.38c-.29.12-.62.28-.91.06s-.52-1.2-.74-2.08c-.31-1.22-.74-2-1.25-1.47s-1.97 2.62.23 2.41zM7.17 497.43a3.1 3.1 0 00.48.84 20.85 20.85 0 001.29 3.82 10.64 10.64 0 002.63 4c.13.11.24 0 .32-.13.56.21 1.71-.38.16-2.35a13 13 0 01-1.57-2.69c-.06-.18-.12-.38-.18-.58-.41-1.42-.57-3.26-1-4.69-.28-1-.64-1.7-1-1.84a.67.67 0 00-1.14.27 5.58 5.58 0 00.01 3.35zM59.44 499.32c.51-1 1.13-.34 1.71-.56a2.62 2.62 0 001.16-1.43c.35-.78 0-3.18-.34-2.4-.53 1.16-1 1.79-1.66 1.76-.44 0-1-.24-1.22.84-1.84 7.33 0 2.52.35 1.79zM69.38 516c.3 1.15 1 .53 1.05-.86a5.93 5.93 0 00-.28-2.26 11.68 11.68 0 00-.74-1.33c-.16-.33-.38-.07-.47.38a6.52 6.52 0 00.44 4.07zM57.89 516.9a5.6 5.6 0 013.26-.4c1 .12 2.06.52 3.06.1 1.23-.52 2.41-3.7 1.78-7.7s-2.31-3.84-3.21-1c-.56 1.77-.87 4.16-1.7 4.92a9.29 9.29 0 01-2.54 1 2.24 2.24 0 00-1.54 1.45c-.67 1.49-1.49 2.31.89 1.63zM5.36 468c0-1.58-.75-5.17-.82 0v.43c0 1.61 0 3.31.1 4.87.08 1.19.35 2.27.79 2.27.24 0 .45-.34.61-.86a6.28 6.28 0 00.4-2.29 8 8 0 00-.34-2.55c-.16-.5-.74-1.11-.74-1.87z"
          fill="#00a8a3"
        />
        <path
          d="M13 459.17c1.91 5.76-4.44 7.87-1.7 15.44 2 5.63 2.06 7.72 3.63 12.76 2.72 8.7 7.27 17.31 12.28 19.56 3.52 1.58 6.67-.24 8 5.92.53 2.49.76 6.26 1.19 6.16s1.09.27 1.27 3a62.08 62.08 0 00.53 11.39 39 39 0 001.4 6.31c.42 1.27.89 2.35 1.35 3.45a11.43 11.43 0 011.27 4.16c.11 1.41.79 1 .8-.33a10.87 10.87 0 01.53-3.34 12.2 12.2 0 00.3-1.53 19.3 19.3 0 00.05-3.14c.1-1-.05-.68.06-1.61.46 1 1.51-3.58 1.57-4.93a25.82 25.82 0 001.18-3.84c.68-2.93.81-6.79 1.54-9.56 1.05-2 2.09-2.36 6.31-9.61 1.56-2.67 2.44-4.39 4-5.74a4.12 4.12 0 012.79-1.18c2.27.57 4.57-.07 6.75-2a9.37 9.37 0 002.67-3.63c.94-2.22 1.61-5.5 2.86-6.17a.37.37 0 00.16-.2c1.21-.79 1.5-.71 2.1-1.86a17.57 17.57 0 001.51-5 13.85 13.85 0 001.48-3.54 13 13 0 00.47-3.88c-.54-7.36-3.47 2.73-3.07 1.45.06-.19-2.37.43-2.36.23.65-1.18 10.91-8.06-.2-22.94-9.94-13.31-18.3 6.51-15.62 7.59 1.8.73 2.4-17.86-3.49-14.84l-10.36 6.09L32.14 449c.5 1.07-22.14 1.2-19.14 10.17zm31.7 75.07v.1-.06z"
          fill="#00a8a3"
        />
        <path
          d="M53.51 488.24c0-.12.08-.45.08-.31 0 1.75 6.11-15.53 10.1-15.91.29 0 .37 1.42.08 1.54-4 1.68-6.13 14.55-10.13 16.12-.3.1-.34-1.04-.13-1.44zM27.2 462.4a17.75 17.75 0 012.11 4.3c.56 1.65 1 3.55 1.46 5.48.94 4.07 1.73 8.77 3.2 11.18s1 .31.48-.89a1.35 1.35 0 00-.09-.32 34.71 34.71 0 01-2.15-7.15c-.57-2.88-.88-6.09-1.31-9.16-.74-5.27-2.06-9.28-3.88-11.1a2.53 2.53 0 00-.61-.49c-.57-.3-1.49-.61-2 .6-1.03 2.64 2.3 6.81 2.79 7.55zm-1.14 17c2.58 9.58 6.56 16.85 10.63 17.31 4.54.51.32-1.45 0-1.57-3.91-1.36-7.41-7.88-9.87-17.21-.47-1.77-1.47-1.14-.76 1.47zm18.84 18.71c.19-.84.67-.88 1-1.28a3.84 3.84 0 00.53-2.44c-.09-1-.52-1.37-.81-.93a3.27 3.27 0 00-.35 1.14c-.08.48-.12 1.12-.24 1.55a2.53 2.53 0 00-.54 1.18c-.23.82.22 1.6.41.78zm22.25-28.86c.38 0 .75-.43 1-1.28s.47-3.39-.37-1.11c-.19.51-.38.84-.64.82s-.32 1.54.01 1.57z"
          fill="#00a8a3"
        />
        <path
          fill="#203e45"
          d="M86.52 0h-71v74.9h6.84v52.37h57.36V74.9h6.8V0z"
        />
        <path fill="#203e45" d="M21.7 121.92h58.67v25.37H21.7z" />
        <path
          d="M93.12 149.14c-2.84-10.92-20.56-19.34-42-19.34s-39.17 8.42-42 19.35c-.08.2-3.32 8.64 7.79 38.48l29.29 87.75s4.34 13 9.81 0l29.31-87.75c11.26-30.2 7.8-38.49 7.8-38.49z"
          fill="#ffe100"
        />
        <path fill="#9b0056" d="M13.21 79.63h75.45v20.05H13.21z" />
        <path fill="#00a8a3" d="M13.1 103.13h75.45v20.05H13.1z" />
        <path fill="none" d="M51.06 197.16l.02 84.65" />
        <path
          d="M51.08 282.45c-.54 0-1-.29-1-.65v-84.65c0-.36.43-.65 1-.65s1 .29 1 .65v84.65c-.03.36-.47.65-1 .65z"
          fill="#00a8a3"
        />
        <circle cx={50.94} cy={187.59} r={12.45} fill="#00a8a3" />
        <path
          d="M26.11 595.92s23.66-9.52 33.36 15.86v21.11s-13.76 8.34-32.78 2.57z"
          fill="#ffe100"
        />
        <path
          d="M42.58 595l-.5-1v-1.7l-1-.58-1.28-.47-.93-1.17h-2.1l-2.59-4.35-.67 1.44-.7-.12-2.57 3.85-1.28 5.48-1.4 2.33 1.4 24.15 3.15 16.68 6.18 6.3 4.33 1.93s.8.29.68-4.73c0 0 .58-1.52.93-.12 0 0-.11 5.86.82 5.48l4.08-2.68 9.33-14.35 5-20.06v-17.73l-4.32-4.08-.58 2-.82 1-.35 2.57-1 .23-.7 5.37h-1l-.42 1.69s4.87 6.32 5.09 9.39c0 0-.6 13.94-8.57 21.92l-3.56 2.35a19.26 19.26 0 01-11.78.12l-1.75-4.55-.58-2 .35-2.8-1.4-4.78-1.52-18.43s-.25-4.12-.25-4.47.24-1.63.24-1.63l.3-2.27s6.87-1.3 11.74-.21z"
          fill="#4c4c4c"
        />
        <path
          d="M34.13 585.73s-13-.38-20.87 5h-1.15s-8.42 4-11.68 21.44 12.64 33.12 19.34 34.27 4.4-1 11.3 2.3 11.51-1 11.51-1 .33-2.28-2.58-2.28l-1-.7-1.05-1.63h-1.33L36 641.4s-2.92-2.68-4-8.52l-1.41-9.32-.1-1.65c-1.12 0-1.94-14.67-1.48-17.94 0 0-.85-5.39-.15-7.61l.7-2.8.58-2.68 1.28-2 1.35-1.88.7.12zM59.82 588.1a49.4 49.4 0 0116 8.87h.82s13.88 9 2.8 33.48c0 0-8.75 16.33-23.91 18a23.54 23.54 0 01-3.15-.7s-4.67-.7-7.35.7l1.87-2.1.47-2.57 3.38-2.1L51 638l.7-.82.47-.93 2-1.87v-1.63l1-2.8 1.28-.23c.77.1 6.31-14.51 5-19.08l-.23-2.26-.22-4.65-.13-1.73.35-3.43-.7-1.17.58-3.4-1.4-2.57-.58-2z"
          fill="#00a7a2"
        />
        <ellipse cx={44.09} cy={565.8} rx={8.93} ry={8.74} fill="#00a8a3" />
        <path
          d="M114.59 381l-.16-2.75c0-.46-.05-.9-.1-1.38l-.18-1.46-.39-2.9c-.08-.49-.12-.94-.23-1.46l-.33-1.54-.71-3.06a16 16 0 00-.46-1.57l-.54-1.6-.56-1.59a14.56 14.56 0 00-.63-1.59c-.5-1.09-1-2.17-1.55-3.22a28.11 28.11 0 00-1.87-3.16 28.38 28.38 0 00-2.16-3c-.8-1-1.63-1.91-2.47-2.82s-1.8-1.68-2.72-2.49A38.54 38.54 0 0088 338.72a51.18 51.18 0 00-10.57-2.67c-1.67-.29-3.19-.4-4.76-.58s-3-.24-4.44-.3c-2.91-.15-5.56-.19-8.18-.26a84.09 84.09 0 01-13.32-1 18.15 18.15 0 01-4.35-1.33 8.47 8.47 0 01-3-2.44 11.19 11.19 0 01-1.09-2.14 12.47 12.47 0 01-.5-1.33l-.42-1.67c-.3-1.13-.46-2.25-.69-3.4s-.35-2.3-.4-3.45a39.09 39.09 0 010-7 38.27 38.27 0 011.28-7 45.06 45.06 0 016.33-13.49c2.91-4.21 2.6-5.61 6.84-8.84-5 2-5.77 2.38-10 5.93a51.64 51.64 0 00-11 12.9 47.78 47.78 0 00-3.86 7.94 51.69 51.69 0 00-2.47 8.63c-.33 1.48-.49 3-.72 4.47s-.31 3-.34 4.52l-.06 2.27c0 .78.09 1.72.15 2.58a28.61 28.61 0 001 5.45 27.15 27.15 0 005.95 10.52 34.48 34.48 0 009.13 6.88 62.25 62.25 0 009.07 3.93c2.93 1 5.66 1.86 8.34 2.68s5.08 1.48 7.4 2.21c1.2.38 2.25.79 3.35 1.19s2.09.81 3 1.26c5.15 1.55 8.83 5.52 8.83 10.18 0 3.61-2.21 6.8-5.6 8.78v.05l-.28.14-.35.18-14.4 7.32c-.92.51-1.82 1-2.86 1.61L53 394.53l-2 1.21a94.49 94.49 0 00-8.67 6 77 77 0 00-9 8.29c-1.43 1.63-2.9 3.23-4.21 5l-2 2.67c-.62.92-1.22 1.85-1.82 2.79A84.26 84.26 0 0015.24 444a128 128 0 00-3.72 22.19l66.78 1.18c-.75-3.49.92-9.48.65-12.16a36.68 36.68 0 01-.17-6.55A12.25 12.25 0 0181 442.4c1.57-2.54 4.57-5.7 8.61-9.62l3.27-3.2 1.74-1.74 1.83-1.84a81.59 81.59 0 007.53-9.08c.31-.43.61-.84.91-1.29l.88-1.39c.58-.94 1.16-1.83 1.7-2.82a55.22 55.22 0 002.92-6.05 50.92 50.92 0 002.18-6.29c.34-1.06.52-2.1.76-3.15s.45-2.1.61-3.13l.37-3.05c.11-1 .23-2 .24-3l.08-2.91v-1.44z"
          fill="#00a8a3"
        />
        <path d="M44.18 288.87s8-4.36 8-7.9-1.94 0-1.94 0" fill="#00a8a3" />
      </svg>
    ),
  },
];
const list = [
  {
    text: 'Be unique – this is fundamental to your content marketing success',
  },
  {
    text: 'Take creative risks to set your brand apart as one that innovates instead of remaining dependent on traditional methods',
  },
  {
    text: 'Stay true to your brand identity',
  },
  {
    text: 'Listen to your audience to find out what they are interested in outside of your business',
  },
  {
    text: 'Create content that has meaning and benefit to your target market, influencing your entire business and leading to sustainable, long-term business growth',
  },
];

const Content = ({ data }) => {
  const review = data.Review;

  return (
    <Layout alt>
      <SEO
        title="Content | Marketing Agency London | Nutcracker Agency"
        description="Content Marketing agency in London that provides award-winning communications for you. From articles to website copy. Engage, inform & innovate."
      />
      <ServiceHeader page="Content">
        <h1>
          Lost your voice? Don't worry,{' '}
          <strong>
            <span>Nutcracker</span> will find it.
          </strong>
        </h1>
      </ServiceHeader>
      <ServiceBody icon={icon[0].src} alt>
        <p>
          <span>
            Communication and content are at the core of any successful business
            – but before it speaks, your business must have its own unique
            voice.
          </span>{' '}
          Nutcracker’s content team are forever striving to engage, inform and
          innovate. From product straplines and slogans to in-depth thought
          leadership, e-guides and compelling website copy, our team of writers
          and journalists have been producing award-winning copy since 2014.
        </p>
        <p>
          Every business has the same goal – to generate unique content that
          customers can relate to, earning better business outcomes and ROI. But
          with two million blog posts written every day, and 156 million emails
          sent per minute, you can’t afford to blend in to the background.
        </p>
      </ServiceBody>
      <ServiceList
        p="Thinking more strategically about the content you produce and its value to your audience, we always ensure that it stands out from the crowd in every way. We promise to:"
        data={list}
      />
      <ServicesExample
        problem="Stagnant newsletters with decreasing opens and clicks"
        solution="Intelligent content, a strong strategy, clear objectives and a relevant database"
        result="Open rates boosted to over 50% and click-through rates to over 43% – far above the market average of 17.9% opens, and 2.69% clicks"
      />
      <Review reviewData={review} />
    </Layout>
  );
};

Content.propTypes = {
  data: PropTypes.shape({
    Review: PropTypes.any,
  }),
};

export default Content;

export const Query = graphql`
  query ContentQuery {
    Review: sanityReview(location: { eq: "contentpage" }) {
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
  }
`;
