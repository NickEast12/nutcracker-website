import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import Review from '../components/sections/review';
import ServiceHeader from '../components/sections/serviceheader';
import ServiceBody from '../components/sections/servicebody';
import ServicesExample from '../components/sections/example';
import ServiceList from '../components/sections/servicelist';
import NewServiceBodyLeft from '../components/sections/newservicebody';
import ServiceBlogs from '../components/sections/serviceblogs';
import ServiceContact from '../components/servicecontact';

const icon = [
  {
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 574.95 649.06"
      >
        <path
          d="M293.85 595s23.66-9.52 33.36 15.86V632s-13.76 8.34-32.78 2.57z"
          fill="#ffe100"
        />
        <path
          d="M310.33 594.06l-.5-1v-1.66l-1.05-.58-1.28-.47-.93-1.17h-2.1l-2.59-4.35-.67 1.44-.7-.12-2.57 3.85-1.28 5.48-1.4 2.33 1.4 24.15 3.15 16.68 6.18 6.3 4.33 1.93s.8.29.68-4.73c0 0 .58-1.52.93-.12 0 0-.11 5.86.82 5.48l4.08-2.68 9.33-14.35 5-20.06v-17.73l-4.32-4.08-.58 2-.82 1-.35 2.57-1.05.23-.7 5.37h-1.05l-.42 1.69s4.87 6.32 5.09 9.39c0 0-.6 13.94-8.57 21.92l-3.56 2.35a19.26 19.26 0 01-11.78.12l-1.75-4.55-.58-2 .35-2.8-1.4-4.78-1.52-18.43s-.25-4.12-.25-4.47.24-1.63.24-1.63l.3-2.27s7.02-1.31 11.89-.25z"
          fill="#4c4c4c"
        />
        <path
          d="M301.87 584.83s-13-.38-20.87 5h-1.15s-8.42 4-11.68 21.44 12.64 33.12 19.34 34.27 4.4-1 11.3 2.3 11.51-1 11.51-1 .33-2.28-2.58-2.28l-1.05-.7-1.05-1.63h-1.28l-.58-1.75s-2.92-2.68-4-8.52l-1.41-9.32-.1-1.65c-1.12 0-1.94-14.67-1.48-17.94 0 0-.85-5.39-.15-7.61l.7-2.8.66-2.64 1.28-2 1.28-1.87.7.12zM327.56 587.2a49.4 49.4 0 0116 8.87h.82s13.88 9 2.8 33.48c0 0-8.75 16.33-23.91 18a23.54 23.54 0 01-3.15-.7s-4.67-.7-7.35.7l1.87-2.1.47-2.57 3.38-2.1.23-3.62.7-.82.47-.93 2-1.87v-1.63l1-2.8 1.28-.23c.77.1 6.31-14.51 5-19.08l-.17-2.3-.23-4.67-.12-1.71.35-3.43-.7-1.17.58-3.38-1.4-2.57-.58-2z"
          fill="#00a7a2"
        />
        <path
          d="M229.23 378.47c19.08-.86 71.65 12.95 76.29 61.87s-32.47 63.79-66 66.66-76.31-33.09-73.2-71.94c2.6-32.13 41.78-55.63 62.91-56.59z"
          fill="#00a8a3"
        />
        <path
          d="M274.07 514.36c-13.47 5.22-8.76 29.26 8.25 31.17s23.2-16.31 19.59-24.46-15.47-11.51-27.84-6.71zM313.36 552.69c-7.63.47-11.46 9.87-6.79 15s13.69 3.38 16.55-5.92c1.7-5.53-3.39-9.48-9.76-9.08z"
          fill="#203e45"
        />
        <path
          d="M175.1 295c12.37 3.83 36.08 59 33 70.5s-51 36.93-51 36.93l-11.34 53.71-8.29-42.14s-29.38 28.78-53.61 1.92-50-48-21.13-65.23C95.72 331 162.73 291.18 175.1 295zM372 346.81c27.69-14.47 67-21.58 87.11-5.76 26.41 20.79 19.07 75.78-31.44 88.73-73.37 18.81-119.57 61.39-119.57 61.39s20.1-27.82 14.95-70.5c-3.26-26.99 11.34-54.19 48.95-73.86z"
          fill="#ffe100"
        />
        <path
          d="M477.69 396.69l13.92-33.09s-37.63-24.94-17-52.76c15.86-21.4 55.5-23 76.29-11.51 25.26 13.91 32.47 53.72-1.55 64.27-21.35 6.62-42.27 3.84-42.27 3.84z"
          fill="#00a8a3"
        />
        <path
          d="M483.87 143c55.75.93 101 46.52 89.18 90.65s-62.37 58-105.16 57.07c-28.9-.65-72.68 35.49-72.68 35.49s30.41-38.37 3.09-73.38c-27.62-35.42-1.03-111.29 85.57-109.83zM195.72 248s-26.29 15.37-40.72-23-75.26-59.95-126.29-26.86c-39.5 25.62-43.82 101.68 22.68 118S193.15 255.69 195.72 248z"
          fill="#203e45"
        />
        <path
          d="M62.73 93.58c11.34-6.18 82.49.4 95.36 2.88 14.95 2.88 25.77 56.11-1.55 53.72-27.72-2.43-25.26 30.21-25.26 30.21s-14.43-20.62-39.18-21.58-40.21 3.36-41.75-20.62-2.57-36.45 12.38-44.61z"
          fill="#00a8a3"
        />
        <path
          d="M188 128.59s11.86-19.18-9.79-47S182.84 8.21 240.57 1s86.6 34.55 64.43 66.69-80.93 22.06-117 60.9z"
          fill="#203e45"
        />
        <path
          d="M355 1.5c30.42-8.25 150.51 18.26 157.74 61.39 6.19 36.93-19.59 73.86-54.12 71.94S389.55 142 389.55 142s39.18-15.35 10.31-24.46-89.18-18.7-80.42-53.71S330.26 8.21 355 1.5z"
          fill="#00a8a3"
        />
        <path
          d="M274.59 105.09c37.63-5.28 95.88 9.59 100 44.6 7.28 61.76-64.43 81.53-64.43 81.53s13.92-29.74-23.2-26.38-70.91-6.24-71.65-47c-.51-28.29 31.55-48.84 59.28-52.75z"
          fill="#f98e21"
        />
        <path
          d="M274.59 105.09c37.63-5.28 95.88 9.59 100 44.6 7.28 61.76-64.43 81.53-64.43 81.53s13.92-29.74-23.2-26.38-70.91-6.24-71.65-47c-.51-28.29 31.55-48.84 59.28-52.75z"
          fill="#ffe100"
        />
        <path
          d="M207.58 317.56C205 283 236 250.88 304 248.5c54.64-1.92 90.21 17.26 85.57 56.59-4.28 36.24-103.1 83-103.1 83L301.9 366s-90.35 4.72-94.32-48.44z"
          fill="#9b0056"
        />
        <path
          d="M150.88 175.12c7-12 41.75-18.23 52.06-.48s-4.12 38.36-27.84 39.81-34.02-22.55-24.22-39.33zM346.32 224.41c5.31-8.76 21.88-9.33 30.27-1.52 10.64 9.9 3.93 28.53-18.82 25.88-13.09-1.52-18.03-13.54-11.45-24.36z"
          fill="#203e45"
        />
        <path
          d="M255.46 213c-13.3-12.37-39.55-11.46-48 2.41-8 13.16-5.23 27.44 5.87 34.46 1.43 1.89 4.54 8.57-10.7 19.68 0 0 32.09-11.19 45.82-18.25 16.89-7.46 19.55-26.67 7.01-38.3z"
          fill="#00a8a3"
        />
        <path
          d="M185.13 152.4c1.49-2.55 8.88-3.88 11.08-.1s-.88 8.16-5.92 8.47a5.49 5.49 0 01-5.16-8.37zM195.19 141.65c.91-1.56 5.45-2.38 6.79-.06s-.54 5-3.63 5.19a3.37 3.37 0 01-3.16-5.13z"
          fill="#203e45"
        />
        <path
          d="M548.82 110.85c-10.57-9.84-31.44-9.11-38.14 1.92-7.23 11.89-3.41 24.93 8.63 29.34h-.11s17.53 9.09 26.19 11.56c0 0-6.69-5.08-7.11-10.76 17.77-4.01 21.6-21.77 10.54-32.06z"
          fill="#ffe100"
        />
        <path
          d="M393.35 152.06c1.49-2.55 8.88-3.88 11.08-.1s-.88 8.16-5.92 8.47a5.5 5.5 0 01-5.16-8.37zM385.81 166.52c.91-1.56 5.45-2.38 6.79-.06s-.54 5-3.63 5.19a3.37 3.37 0 01-3.16-5.13z"
          fill="#203e45"
        />
        <path
          d="M159.71 57.46c-9.92-9.23-29.5-8.55-35.79 1.8-3.33 5.48-4.16 11.22-2.8 16.13-3.56 5.5-14 5.35-14 5.35 7.21 2.85 22.91 5.91 27 6.69a24.7 24.7 0 003.36.63c26.88 3.12 34.81-18.9 22.23-30.6z"
          fill="#ffe100"
        />
      </svg>
    ),
  },
];
const list = [
  {
    text: 'Inspire and influence your audience',
  },
  {
    text: 'Elevate brand reputations in-line with business objectives through; compelling content creation, trade media relations, press office management, event management, social media, influencer collaborations, thought leadership and crisis management',
  },
  {
    text: 'Tell the stories that need to be told with our results-driven strategic approach – from corporate to B2B and B2C',
  },
  {
    text: 'Utilise our excellent relationships with the press – local, trade and national – to boost the reputation of your brand',
  },
  {
    text: 'Grab the attention of your potential customers and give your business a strong position in the market',
  },
];

const PR = ({ data }) => {
  const review = data.Review;

  return (
    <Layout>
      <SEO
        title="PR, Outreach &amp; Digital PR | Nutcracker"
        description="utcracker takes a different approach to PR defined by your brand's goals and objectives. We promise digital and traditional PR that delivers tangible business impact. Find out more."
      />
      <ServiceHeader page="PR">
        <h1>
          Tell <span>your</span> brand’s <span className="second">story</span>{' '}
          with a different kind of <span className="third">PR</span>
        </h1>
      </ServiceHeader>
      <ServiceBody icon={icon[0].src}>
        <p>
          <span>
            We tell the stories that need to be told with a results-driven
            strategic approach to PR.
          </span>
        </p>
        <p>
          Your reputation and visibility within your chosen sectors and beyond
          is of utmost importance in a world where brands are continually
          competing for attention. Effective PR needs to get you on the radar of
          your target audience, achieve coverage in the right places, and drive
          brand awareness in the long term.
        </p>
      </ServiceBody>
      <NewServiceBodyLeft
        alt
        title="PR"
        strong="Our team of former journalists and editors have strong editorial, copywriting and media skills that produce great content, stories and ideas, and we stay on top of news and trends so we know when and what to pitch. And our network of journalists, industry professionals and bloggers is wide reaching."
        fp="We always make sure to keep our nose to the ground, ready to respond with comments to requests from journalists and expand our network with the key influencers in your industry to get you connected with the right people. We don’t over promise, but we do make our mark. We do what’s right for you, making sure you gain exposure across the right audiences and media, whether that be consumer, local, trade or national. "
      >
        <StaticImage
          src="../assets/images/pr-nutcracker-agency.png"
          alt="PR | Nutcracker Agency"
        />
      </NewServiceBodyLeft>
      <NewServiceBodyLeft
        title="Digital PR"
        fp="As with all content, we make sure that your PR stories are optimised for digital channels and secure high-quality backlinks from websites and online publications. We strive to get your brand featured on the websites your potential customers read, the podcasts they listen to and the social media accounts they engage with. "
      >
        <StaticImage
          src="../assets/images/digital-pr-nutcracker-agency.png"
          alt="Digtial PR | Nutcracker Agency"
        />
      </NewServiceBodyLeft>
      <ServiceBlogs data={data.Category.nodes} title="Our PR advice" />
      <ServiceContact>
        <h5>
          Whether your <span>PR</span> objectives are to build brand awareness,
          increase your visibility in a crowded market or generate sales,
          exposure, leads or website traffic, Nutcracker builds the strategy
          that’s right for you and gets you coverage where you want and need it.
        </h5>
        <p>
          Want to explore a different approach to PR? Drop us a message today.
        </p>
      </ServiceContact>
      <Review reviewData={review} />
    </Layout>
  );
};

PR.propTypes = {
  data: PropTypes.shape({
    Review: PropTypes.any,
  }),
};

export default PR;

export const Query = graphql`
  query PRQuery {
    Review: sanityReview(location: { eq: "prpage" }) {
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
      filter: { categories: { elemMatch: { slug: { current: { eq: "pr" } } } } }
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
