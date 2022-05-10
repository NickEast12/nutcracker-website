import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import React from 'react';

import styled, { css } from 'styled-components';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';

import ServiceHeader from '../components/sections/serviceheader';
import ServiceBody from '../components/sections/servicebody';
import ServiceContact from '../components/servicecontact';

import DMS from '../svgs/Digital-marketing-strategy.svg';
import SEOIcon from '../svgs/SEO.svg';
import PSIcon from '../svgs/Paid-search.svg';

const DigitalBody = styled.section`
  section {
    width: 90%;
    margin: var(--auto);
    padding: 2rem 0;
    max-width: var(--maxWidth);
    h3 {
      font-size: 1.95rem;
      margin-bottom: 1rem;
      span {
        color: var(--mainColour);
        font-weight: inherit;
      }
    }
    strong {
      font-weight: 700;
      margin: 1rem 0;
      line-height: 1.5;
      display: block;
    }
    p {
      margin-bottom: 1rem;
      a {
        color: var(--mainColour);
        font-weight: 700;
        &:hover,
        &:active {
          text-decoration: underline;
        }
      }
    }
    .right {
      text-align: center;
      svg {
        max-width: 500px;
        margin: 1.5rem auto 0 auto;
      }
    }
    @media only screen and (min-width: 765px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 1.5rem auto;
      grid-gap: 2rem;
      .left,
      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  ${(props) =>
    props.$right &&
    css`
      section {
        grid-template-areas: 'a b';
        .right {
          grid-area: a;
        }
      }
    `}
  ${(props) =>
    props.$last &&
    css`
      @media only screen and (min-width: 765px) {
        margin-top: 3.5rem;
      }
    `}
`;

const icon = [
  {
    src: (
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 767 915.3"
      >
        <style>
          {'.st0{fill:#273d44}.st1{fill:#2ba5a2}.st2{fill:#8e1b55}'}
        </style>
        <path
          className="st0"
          d="M272.1 85.4h-76.2c-2.9 0-5.6 1.5-7 4L151 153.1c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4z"
        />
        <path
          className="st1"
          d="M122.2 169.5H46c-2.9 0-5.6 1.5-7 4L1.1 237.2c-1.5 2.6-1.5 5.8 0 8.4L39 309.3c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4zM272.1 254.5h-76.2c-2.9 0-5.6 1.5-7 4L151 322.2c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4z"
        />
        <path
          className="st0"
          d="M571.5 85.4h-76.2c-2.9 0-5.6 1.5-7 4l-37.9 63.7c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4zM272.1 593.8h-76.2c-2.9 0-5.6 1.5-7 4L151 661.5c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4zM571.5 593.8h-76.2c-2.9 0-5.6 1.5-7 4l-37.9 63.7c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4z"
        />
        <path
          className="st2"
          d="M421.5 169.5h-76.2c-2.9 0-5.6 1.5-7 4l-37.9 63.7c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4z"
        />
        <path
          d="M421.5 0h-76.2c-2.9 0-5.6 1.5-7 4l-37.9 63.7c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4L428.5 4c-1.4-2.5-4.1-4-7-4z"
          style={{
            fill: '#fbe101',
          }}
        />
        <path
          className="st1"
          d="M571.5 254.5h-76.2c-2.9 0-5.6 1.5-7 4l-37.9 63.7c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4z"
        />
        <path
          className="st2"
          d="M272.1 424h-76.2c-2.9 0-5.6 1.5-7 4L151 491.6c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4L317 500c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.4-4.1-3.9-7-3.9zM571.5 424h-76.2c-2.9 0-5.6 1.5-7 4l-37.9 63.6c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.4-4.1-3.9-7-3.9z"
        />
        <path
          className="st0"
          d="M421.4 341.2h-76.2c-2.9 0-5.6 1.5-7 4l-37.9 63.7c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.5-2.5-4.1-4-7-4z"
        />
        <path
          className="st1"
          d="M720.9 169.5h-76.2c-2.9 0-5.6 1.5-7 4l-37.9 63.7c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4zM122.2 507.4H46c-2.9 0-5.6 1.5-7 4L1.1 575.1c-1.5 2.6-1.5 5.8 0 8.4L39 647.2c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4zM720.1 507.4h-76.2c-2.9 0-5.6 1.5-7 4L599 575.1c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.4-2.5-4.1-4-7-4zM421.4 510.3h-76.2c-2.9 0-5.6 1.5-7 4L300.3 578c-1.5 2.6-1.5 5.8 0 8.4l37.9 63.7c1.5 2.5 4.2 4 7 4h76.2c2.9 0 5.6-1.5 7-4l37.9-63.7c1.5-2.6 1.5-5.8 0-8.4l-37.9-63.7c-1.5-2.5-4.1-4-7-4z"
        />
        <path
          style={{
            fill: 'none',
            stroke: '#fbe101',
            strokeWidth: 10,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
          d="M382 837.2V666.9h-47.7l-50.6-85.4 50.4-85.2 100.2.2 50.1-84.9-51.5-85.8-100.1.6-49.5-84.8 62.8-108.3"
        />
        <path
          d="M352.4 828.8s37.8-15.2 53.3 25.3v33.7s-22 13.3-52.4 4.1l-.9-63.1z"
          style={{
            fill: '#fbe100',
          }}
        />
        <path
          d="m378.7 827.2-.8-1.6V823l-1.7-.9-2-.7-1.5-1.9h-3.4l-4.1-7-1.1 2.3-1.1-.2-4.1 6.1-2 8.8-2.2 3.7 2.2 38.6 5 26.6 9.9 10.1 6.9 3.1s1.3.5 1.1-7.6c0 0 .9-2.4 1.5-.2 0 0-.2 9.4 1.3 8.8l6.5-4.3 14.9-22.9 8-32.1V825l-6.9-6.5-.9 3.2-1.3 1.7-.6 4.1-1.7.4-1.1 8.6h-1.7l-.7 2.7s7.8 10.1 8.1 15c0 0-1 22.3-13.7 35l-5.7 3.7s-8.4 3.4-18.8.2l-2.8-7.3-.9-3.2.6-4.5-2.2-7.6-2.4-29.4s-.4-6.6-.4-7.1.4-2.6.4-2.6l.5-3.6c-.1-.1 11.1-2.2 18.9-.6z"
          style={{
            fill: '#4c4c4c',
          }}
        />
        <path
          className="st1"
          d="M365.2 812.5s-20.8-.6-33.3 8h-1.8s-13.5 6.4-18.7 34.3c-5.2 27.8 20.2 52.9 30.9 54.8 10.7 1.8 7-1.5 18 3.7s18.4-1.5 18.4-1.5.5-3.6-4.1-3.6l-1.7-1.1-1.7-2.6h-2l-.9-2.8s-4.7-4.3-6.3-13.6l-2.3-14.9-.2-2.6c-1.8 0-3.1-23.4-2.4-28.7 0 0-1.4-8.6-.2-12.2l1.1-4.5.9-4.3 2-3.2 2-3 1.1.2 1.2-2.4zM406.2 816.3s14.5 4.5 25.5 14.2h1.3s22.2 14.3 4.5 53.5c0 0-14 26.1-38.2 28.7 0 0-3.5-.6-5-1.1 0 0-7.5-1.1-11.7 1.1l3-3.4.7-4.1 5.4-3.4.4-5.8 1.1-1.3.7-1.5 3.2-3v-2.6l1.7-4.5 2-.4c1.2.2 10.1-23.2 8-30.5l-.4-3.6-.4-7.5-.2-2.7.6-5.5-1.1-1.9.9-5.4-2.2-4.1-.9-3.2 1.1-2z"
        />
      </svg>
    ),
  },
];

const Content = ({ data }) => {
  const review = data.Review;
  const blogs = data.Category.nodes;
  return (
    <Layout>
      <SEO
        title="B2B Digital Marketing Agency | Nutcracker"
        description="Nutcracker helps B2B businesses and brands with ambition reach their audience online via innovative, scalable and results driven digital marketing services. Find out how we do it."
      />
      <ServiceHeader page="Digital Marketing">
        <h1>
          We help <span>B2B</span> brands grow with results driven{' '}
          <span className="third">digital marketing</span>
        </h1>
      </ServiceHeader>
      <ServiceBody icon={icon[0].src} $digital>
        <p>
          <span>
            From SEO to PPC to paid social, digital marketing makes sure your
            brand appears in front of your customers at every step on their path
            to purchase – from social media to search results – bringing inbound
            leads to you.
          </span>
        </p>
        <p>
          Whether you need to put a rocket under your existing marketing
          campaigns, or kick-start your outreach to clients, Nutcracker
          Digital’s mix of technical and creative strategy is a direct,
          cost-effective and measurable way to get your business in front of
          relevant decision-makers.
        </p>
        <p>
          Want to take the next step? Book your digital marketing consultation
          by <Link to="/contact">contacting Nutcracker today.</Link>
        </p>
      </ServiceBody>
      <DigitalBody $right>
        <section>
          <div className="left">
            <h3>Digital Marketing Strategy </h3>
            <p>
              Nutcracker Digital starts with your commercial goals and works
              backwards, finding out where you need to be and the best way to
              get you there. Our approach to digital underpins everything, to
              maximise your results at every step on your customer’s journey.
            </p>
            <p>
              Your first step? Start with an SEO audit, competitor evaluation
              and audience analysis to begin planning your digital marketing
              outreach.
            </p>
          </div>
          <div className="right">
            <DMS />
          </div>
        </section>
      </DigitalBody>
      <DigitalBody $left>
        <section>
          <div className="left">
            <h3>SEO</h3>
            <p>
              How can you make sure that your potential customers can always
              find your content when they need it? Through SEO – but there’s
              more to it than keywords and content. To fully optimise your
              brand’s visibility online, you need a mix of creative content,
              technical efficiency and external outreach.
            </p>
            <p>
              Book your SEO consultation to find out how we do it through
              on-page, technical and off-page SEO activity.{' '}
              <Link to="/contact">Contact us today to get started.</Link>
            </p>
          </div>
          <div className="right">
            <SEOIcon />
          </div>
        </section>
      </DigitalBody>
      <DigitalBody $right $last>
        <section>
          <div className="left">
            <h3>Paid Media</h3>
            <p>
              Reach a relevant audience with the right paid placements to drive
              traffic to your content – and leads to your business. Nutcracker
              takes a highly targeted approach to PPC, paid social media and
              paid shopping, serving your ads, posts and sponsored searches to
              the people you most want to reach.
            </p>
            <p>
              We’ll help you decide on the best spend for your objectives, to
              get the ROI you need on your investment.
            </p>
          </div>
          <div className="right">
            <PSIcon />
          </div>
        </section>
      </DigitalBody>

      {/* <ServiceBlogs data={blogs} title="Our content and copywriting tips" /> */}
      <ServiceContact>
        <h5>
          We know exactly what role digital should play in your marketing – and
          the results it should bring in for your business.
        </h5>
        <p>
          Start getting your brand in front of your audience now. Drop us a
          message to get a consultation that will change the way you see digital
          marketing.
        </p>
      </ServiceContact>
      {/* <Review reviewData={review} /> */}
    </Layout>
  );
};

Content.propTypes = {
  data: PropTypes.shape({
    Review: PropTypes.any,
  }),
};

export default Content;

export const DigitalQuery = graphql`
  query DigitalQuery {
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
    Category: allSanityPost(
      filter: {
        categories: {
          elemMatch: { slug: { current: { eq: "content-marketing-and-seo" } } }
        }
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
