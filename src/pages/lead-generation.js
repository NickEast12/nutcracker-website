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
        data-name="aa6c10f6-e0ce-453f-b024-7c04cb304ec0"
        viewBox="0 0 920.2 695.42"
      >
        <path
          d="M443.18 641.14s23.66-9.56 33.36 15.94v21.2s-13.76 8.37-32.77 2.58z"
          fill="#fbe100"
        />
        <path
          d="M459.66 640.18l-.5-1v-1.64l-1.05-.59-1.28-.46-.93-1.18h-2.1l-2.6-4.37-.67 1.44-.7-.11-2.57 3.87-1.26 5.48-1.4 2.34 1.4 24.25 3.15 16.76 6.18 6.32 4.34 1.93s.79.29.68-4.74c0 0 .58-1.53.93-.12 0 0-.11 5.88.82 5.5l4.08-2.69 9.31-14.4 5-20.15v-17.77l-4.32-4.1-.58 2-.82 1-.35 2.58-1.05.23-.7 5.4h-1.05l-.42 1.69s4.87 6.35 5.09 9.44c0 0-.6 14-8.57 22l-3.56 2.36a19.19 19.19 0 01-11.78.12l-1.75-4.57-.59-2 .35-2.81-1.4-4.8-1.51-18.54s-.25-4.14-.25-4.49.24-1.64.24-1.64l.3-2.28s7.02-1.31 11.89-.26z"
          fill="#1e363b"
        />
        <path
          d="M451.2 630.91s-13-.38-20.87 5h-1.15s-8.42 4-11.68 21.54 12.64 33.27 19.34 34.41 4.41-.95 11.3 2.31 11.51-1 11.51-1 .33-2.28-2.59-2.28l-1.05-.7-1-1.63h-1.28l-.63-1.71s-2.92-2.69-4-8.54l-1.41-9.36-.11-1.65c-1.12 0-1.93-14.74-1.48-18 0 0-.85-5.41-.15-7.64l.7-2.81.58-2.69 1.29-2 1.28-1.87.7.11zM476.89 633.29a49.57 49.57 0 0116 8.9h.82s13.88 9 2.8 33.63c0 0-8.75 16.4-23.91 18.07a22.72 22.72 0 01-3.15-.7s-4.67-.7-7.35.7l1.86-2.11.47-2.57 3.38-2.11.24-3.63.7-.81.46-.95 2-1.87v-1.64l1.05-2.82 1.28-.23c.77.1 6.31-14.57 5-19.16l-.23-2.28-.23-4.68-.12-1.72.35-3.43-.7-1.18.58-3.39-1.4-2.58-.58-2z"
          fill="#2ba5a2"
        />
        <path
          d="M383.67 194.31S387.71 54.99 0 .01h920.2c-387.7 55-383.66 194.57-383.66 194.57z"
          fill="#1e363b"
        />
        <path
          d="M409.42 197.67S412.15 55.91 153.68 0l613.44.07C508.65 55.99 511.34 197.92 511.34 197.92z"
          fill="#fbe101"
        />
        <ellipse cx={460.94} cy={491.98} rx={11.8} ry={11.85} fill="#fbe101" />
        <ellipse cx={460.94} cy={540.72} rx={11.8} ry={11.85} fill="#fbe101" />
        <ellipse cx={460.94} cy={589.46} rx={11.8} ry={11.85} fill="#fbe101" />
        <path
          d="M426.57 196.31S428.36 55.57 256.05.01l409 .29C492.72 55.85 494.51 196.59 494.51 196.59z"
          fill="#8e1b55"
        />
        <path
          d="M438 191.65S439.18 54.35 324.31.15L597 .43c-114.92 54.21-113.72 191.5-113.72 191.5z"
          fill="#1e363b"
        />
        <path
          fill="#2ba5a2"
          d="M342.04 191.56h237.43l-96.07 116.5v148.47l-45.32-59.61v-88.84l-96.04-116.52z"
        />
      </svg>
    ),
  },
];
const list = [
  {
    text: 'Develop and nurture relationships with your potential customers',
  },
  {
    text: 'Target customers at different stages of the buying cycle',
  },
  {
    text: 'Align your social media, marketing, content and sales strategies',
  },
  {
    text: 'Obtain and generate new sales leads',
  },
  {
    text: 'Utilise outbound and inbound marketing, tailoring each to your business',
  },
  {
    text: 'Calculate and report the ROI of your campaigns effectively',
  },
];

const LeadGeneration = ({ data }) => {
  const review = data.Review;

  return (
    <Layout alt>
      <SEO />
      <ServiceHeader page="Lead Generation">
        <h1>
          Struggling to compete?{' '}
          <strong>
            <span>Lead the way with</span>{' '}
            <span className="second">Nutcracker</span>
          </strong>
        </h1>
      </ServiceHeader>
      <ServiceBody icon={icon[0].src}>
        <p>
          <span>
            Smiling while you’re dialling is all well and good, but strategy
            must be at the heart of lead generation.
          </span>{' '}
          With only one in 10 marketers claiming their efforts are effective in
          securing sales, now is the time to enlist Nutcracker’s sales team.
        </p>
        <p>
          Lead generation comes in all different shapes and sizes, through
          various channels including LinkedIn, email campaigns and age-old phone
          calls. Ultimately, it is intelligent business positioning that will
          place your company where your audience is looking, for the best ROI.
        </p>
        <p>
          To succeed in a competitive market, your business needs an efficient
          strategy, a strong follow-up and a team that can turn prospects into
          leads. We will take you through every step of the process, pin down
          your ideal audience and your lead magnet, and propel leads down the
          path to becoming customers.
        </p>
      </ServiceBody>
      <ServiceList
        p="The buying journey is continuously changing. We combine traditional sales pitches with a strong digital presence to understand and qualify perspective leads, tailor information and learn the needs of your customers. We promise to:"
        data={list}
      />
      <ServicesExample
        problem="An old, inconsistent database, poor targeting campaign and few conversions"
        solution="Data targeting with bespoke content, 13,500 individual relevant contacts sourced and motivated sales lead activity"
        result="A transformed email campaign with 99% delivery rates and eight qualified leads from just one newsletter mail-out. Plus £250,000 converted sales"
      />
      <Review reviewData={review} />
    </Layout>
  );
};

LeadGeneration.propTypes = {
  data: PropTypes.shape({
    Review: PropTypes.any,
  }),
};

export default LeadGeneration;

export const Query = graphql`
  query LeadQuery {
    Review: sanityReview(location: { eq: "leadgenerationpage" }) {
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
