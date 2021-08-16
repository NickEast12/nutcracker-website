import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import Review from '../components/sections/review';
import ServiceHeader from '../components/sections/serviceheader';
import ServiceBody from '../components/sections/servicebody';
import ServiceBlogs from '../components/sections/serviceblogs';
import ServiceContact from '../components/servicecontact';
import NewServiceBodyLeft from '../components/sections/newservicebody';
import LowerIcon from '../svgs/social-media-strategy-nutcracker-agency.svg';

const icon = [
  {
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="prefix__ba576dd2-a612-4a93-82ea-e55f84c8a431"
        data-name="Layer 1"
        viewBox="0 0 735.29 665.26"
      >
        <defs>
          <style>
            {
              '.prefix__ab53c71a-6b78-426e-a788-f4fb14264ee4{fill:#fbe100}.prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3{fill:#2ba5a2}.prefix__bea6d992-497c-4b47-bf72-493be3106029{fill:#bcc9c9}.prefix__ad04946a-9fae-42cf-b6d2-a5375d62e7dc{fill:#8e1b55}.prefix__a280b5c1-dc10-4628-bfc5-ff53b03f0ade{fill:#fff}.prefix__ab5cdc33-34df-4c06-bb94-d449eca011d4{fill:#4e4c4c}'
            }
          </style>
        </defs>
        <path
          className="prefix__ab53c71a-6b78-426e-a788-f4fb14264ee4"
          d="M306.13 611.21s23.65-9.52 33.36 15.87v21.11s-13.77 8.34-32.78 2.57z"
        />
        <path
          d="M322.6 610.26l-.49-1v-1.66l-1.05-.59-1.29-.46-.93-1.17h-2.1l-2.59-4.38-.68 1.43-.7-.11-2.56 3.85-1.28 5.48-1.4 2.33 1.4 24.15 3.14 16.68 6.19 6.3 4.33 1.92s.8.29.68-4.72c0 0 .59-1.52.94-.12 0 0-.12 5.86.81 5.48l4.08-2.67 9.34-14.35 5-20.06v-17.71l-4.31-4.08-.59 2-.81 1.05-.35 2.57-1.05.23-.7 5.37h-1.05l-.43 1.69s4.88 6.32 5.09 9.39c0 0-.6 13.94-8.57 21.91l-3.56 2.35a19.26 19.26 0 01-11.78.12l-1.75-4.55-.58-2 .35-2.8-1.4-4.78-1.52-18.43s-.25-4.12-.25-4.47.24-1.63.24-1.63l.31-2.27s7-1.34 11.87-.29z"
          fill="#4c4c4c"
        />
        <path
          className="prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3"
          d="M314.15 601s-13-.39-20.87 5h-1.15s-8.43 4-11.68 21.44 12.64 33.13 19.34 34.27 4.4-1 11.29 2.3 11.51-1 11.51-1 .33-2.27-2.58-2.27l-1.05-.7-1-1.64h-1.29l-.67-1.7s-2.92-2.68-4-8.51l-1.41-9.32-.1-1.65c-1.12 0-1.94-14.67-1.49-17.93 0 0-.84-5.39-.14-7.61l.69-2.8.59-2.68 1.28-2 1.28-1.86.7.11zM339.84 603.4a49.6 49.6 0 0116 8.86h.81s13.88 9 2.8 33.48c0 0-8.75 16.33-23.91 18a23.54 23.54 0 01-3.15-.7s-4.66-.7-7.35.7l1.87-2.1.47-2.56 3.38-2.1.23-3.62.7-.81.47-.94 2-1.86v-1.64l1.05-2.8 1.28-.23c.77.1 6.31-14.51 5-19.09l-.23-2.26L341 619l-.11-1.71.35-3.42-.7-1.17.58-3.38-1.4-2.57-.58-2z"
        />
        <path
          className="prefix__bea6d992-497c-4b47-bf72-493be3106029"
          d="M101.19 304.11a50.91 50.91 0 1150.91-50.91 51 51 0 01-50.91 50.91zm0-93.19a42.28 42.28 0 1042.28 42.28 42.33 42.33 0 00-42.28-42.28z"
        />
        <path
          className="prefix__ad04946a-9fae-42cf-b6d2-a5375d62e7dc"
          d="M300.8 478.39a29.87 29.87 0 1129.87-29.87 29.9 29.9 0 01-29.87 29.87zm0-54.67a24.81 24.81 0 1024.8 24.8 24.83 24.83 0 00-24.8-24.8z"
        />
        <path
          className="prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3"
          d="M542.59 591a66.08 66.08 0 1166.07-66.08A66.16 66.16 0 01542.59 591zm0-121a54.87 54.87 0 1054.87 54.87A54.93 54.93 0 00542.59 470zM575.93 311.8a50.91 50.91 0 1150.91-50.91 51 51 0 01-50.91 50.91zm0-93.19a42.28 42.28 0 1042.28 42.28 42.33 42.33 0 00-42.28-42.28z"
        />
        <path
          className="prefix__ab53c71a-6b78-426e-a788-f4fb14264ee4"
          d="M363.14 521.83a59 59 0 1159-59 59.07 59.07 0 01-59 59zm0-108a49 49 0 1049 49 49.05 49.05 0 00-49-48.99zM157.48 330.5a38.88 38.88 0 1138.88-38.88 38.92 38.92 0 01-38.88 38.88zm0-71.17a32.29 32.29 0 1032.29 32.29 32.33 32.33 0 00-32.29-32.29zM496 318.47a66.07 66.07 0 1166.07-66.07A66.15 66.15 0 01496 318.47zm0-120.94a54.87 54.87 0 1054.87 54.87A54.93 54.93 0 00496 197.53z"
        />
        <path
          className="prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3"
          d="M328.29 101.82a50.91 50.91 0 1150.91-50.91 51 51 0 01-50.91 50.91zm0-93.19a42.28 42.28 0 1042.28 42.28 42.33 42.33 0 00-42.28-42.28z"
        />
        <path
          className="prefix__bea6d992-497c-4b47-bf72-493be3106029"
          d="M391.14 564.16A38.88 38.88 0 11430 525.28a38.92 38.92 0 01-38.86 38.88zm0-71.17a32.29 32.29 0 1032.29 32.29A32.33 32.33 0 00391.14 493z"
        />
        <path
          className="prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3"
          d="M164.73 520a50.91 50.91 0 1150.91-51 51 51 0 01-50.91 51zm0-93.19A42.28 42.28 0 10207 469a42.33 42.33 0 00-42.27-42.24z"
        />
        <path
          className="prefix__bea6d992-497c-4b47-bf72-493be3106029"
          d="M137.51 549.42a29.87 29.87 0 1129.87-29.87 29.9 29.9 0 01-29.87 29.87zm0-54.68a24.81 24.81 0 1024.81 24.81 24.83 24.83 0 00-24.81-24.81z"
        />
        <path
          className="prefix__ad04946a-9fae-42cf-b6d2-a5375d62e7dc"
          d="M344.79 589a14.15 14.15 0 1114.15-14.14A14.15 14.15 0 01344.79 589zm0-25.89a11.75 11.75 0 1011.75 11.75 11.76 11.76 0 00-11.75-11.77z"
        />
        <path
          className="prefix__a280b5c1-dc10-4628-bfc5-ff53b03f0ade"
          d="M451.2 573.67a17.84 17.84 0 1117.8-17.83 17.85 17.85 0 01-17.8 17.83zm0-32.65a14.82 14.82 0 1014.8 14.82A14.84 14.84 0 00451.2 541zM56.5 509.41a19.82 19.82 0 1119.82-19.81 19.83 19.83 0 01-19.82 19.81zm0-36.27A16.46 16.46 0 1073 489.6a16.48 16.48 0 00-16.5-16.46z"
        />
        <path
          className="prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3"
          d="M14.15 524.19a14.15 14.15 0 1114.14-14.14 14.16 14.16 0 01-14.14 14.14zm0-25.89a11.75 11.75 0 1011.74 11.75 11.76 11.76 0 00-11.74-11.75z"
        />
        <path
          className="prefix__ad04946a-9fae-42cf-b6d2-a5375d62e7dc"
          d="M70.35 230.64a66.08 66.08 0 1166.07-66.08 66.15 66.15 0 01-66.07 66.08zm0-120.95a54.88 54.88 0 1054.87 54.87 54.93 54.93 0 00-54.87-54.87z"
        />
        <path
          className="prefix__a280b5c1-dc10-4628-bfc5-ff53b03f0ade"
          d="M116.72 147.13a19.82 19.82 0 1119.81-19.82 19.84 19.84 0 01-19.81 19.82zm0-36.27a16.46 16.46 0 1016.46 16.45 16.48 16.48 0 00-16.46-16.45z"
        />
        <path
          className="prefix__bea6d992-497c-4b47-bf72-493be3106029"
          d="M593.52 149.66a38.88 38.88 0 1138.88-38.88 38.92 38.92 0 01-38.88 38.88zm0-71.17a32.29 32.29 0 1032.29 32.29 32.33 32.33 0 00-32.29-32.29z"
        />
        <path
          className="prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3"
          d="M669.21 185.07A66.07 66.07 0 11735.29 119a66.15 66.15 0 01-66.08 66.07zm0-120.94A54.87 54.87 0 10724.09 119a54.93 54.93 0 00-54.88-54.87zM536.81 161.41A14.15 14.15 0 11551 147.26a14.17 14.17 0 01-14.19 14.15zm0-25.9a11.75 11.75 0 1011.75 11.75 11.76 11.76 0 00-11.75-11.75z"
        />
        <path
          className="prefix__ad04946a-9fae-42cf-b6d2-a5375d62e7dc"
          d="M414.35 156.54a38.88 38.88 0 1138.88-38.88 38.92 38.92 0 01-38.88 38.88zm0-71.17a32.29 32.29 0 1032.29 32.29 32.33 32.33 0 00-32.29-32.29z"
        />
        <path
          className="prefix__bea6d992-497c-4b47-bf72-493be3106029"
          d="M382.37 100.56a29.87 29.87 0 1129.86-29.86 29.9 29.9 0 01-29.86 29.86zm0-54.67a24.81 24.81 0 1024.8 24.81 24.84 24.84 0 00-24.8-24.81z"
        />
        <path
          className="prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3"
          d="M273.78 124.7a14.15 14.15 0 1114.14-14.15 14.17 14.17 0 01-14.14 14.15zm0-25.9a11.75 11.75 0 1011.75 11.75 11.76 11.76 0 00-11.75-11.75zM630.27 349.56a14.15 14.15 0 1114.15-14.14 14.15 14.15 0 01-14.15 14.14zm0-25.89A11.75 11.75 0 10642 335.42a11.76 11.76 0 00-11.73-11.75z"
        />
        <circle
          className="prefix__f7d80b28-f4c0-4f70-b887-6abf8c9bd5e3"
          cx={319.64}
          cy={289.55}
          r={146.84}
        />
        <path
          className="prefix__ab5cdc33-34df-4c06-bb94-d449eca011d4"
          d="M340.26 352.84v-16.51a16.89 16.89 0 01-11.19-5.59 16.23 16.23 0 01-4.46-11.41 17.31 17.31 0 012.26-8.72 15.76 15.76 0 016.31-6.23 16.86 16.86 0 018.5-2.27 17.42 17.42 0 018.93 2.41 16.36 16.36 0 016.37 6.87 20.89 20.89 0 012.27 9.71 37.07 37.07 0 01-4.25 17.57 31.6 31.6 0 01-5.17 7.23 43.31 43.31 0 01-4 3.68 31 31 0 01-5.57 3.26zm41.95 0v-16.51a19.38 19.38 0 01-11.34-5.88 16 16 0 01-4.18-11.12 17 17 0 012.27-8.57 16.57 16.57 0 016.09-6.31 16.33 16.33 0 018.43-2.34 17.89 17.89 0 019.14 2.34 16.77 16.77 0 016.31 6.66 20.88 20.88 0 012.26 9.85q0 15.23-9.56 25.22a21.38 21.38 0 01-3.83 3.4 41.15 41.15 0 01-5.59 3.26zM293.93 230.58v16.65a19.56 19.56 0 0111.69 5.77 16.37 16.37 0 014.25 11.41 17.18 17.18 0 01-17.36 17.21 16.29 16.29 0 01-12.51-5.55 19.65 19.65 0 01-5-13.6 38 38 0 012.42-13.47 37 37 0 016.95-11.33 40.34 40.34 0 019.56-7.09zm-42.08 0v16.65a20.49 20.49 0 0111.76 5.77 15.8 15.8 0 014.32 11.34 16.46 16.46 0 01-5.1 12.18 17.13 17.13 0 01-12.4 5 16.12 16.12 0 01-12.4-5.52 19.65 19.65 0 01-5-13.6 38 38 0 012.55-13.68 34.19 34.19 0 017.16-11.55 37.13 37.13 0 019.11-6.59z"
        />
      </svg>
    ),
  },
];
const list = [
  {
    text: 'Connect and engage with your audience',
  },
  {
    text: 'Create a social brand loyalty by nurturing relationships, supporting your customers, creating communities and being present',
  },
  {
    text: 'Link your online presence to your physical footprint and strategy',
  },
  {
    text: 'Develop social media strategies and campaigns for each platform via solid goals and objectives',
  },
  {
    text: 'Publish content consistently',
  },
  {
    text: 'Track your social media ROI on a weekly, monthly and quarterly basis and increase website traffic',
  },
];

const SocialMedia = ({ data }) => {
  const review = data.Review;
  const blogs = data.Category.nodes;

  return (
    <Layout>
      <SEO
        title="Social Media | Marketing Agency London | Nutcracker Agency"
        description="Social Media marketing agency in London with expertise in bringing content platforms to life, using channels to tell stories and create brand loyalty."
      />
      <ServiceHeader page="Social media marketing">
        <h1>
          <span>Social content</span>, <span className="second">strategy</span>{' '}
          and <span className="third">social media </span> management
        </h1>
      </ServiceHeader>
      <ServiceBody icon={icon[0].src}>
        <p>
          <span>
            We engage target audiences with winning social content that strikes
            the right chord.
          </span>
        </p>
        <p>
          Is it hard to reach the right audience on social media? No. But
          reaching them takes insight. Nutcracker has the know-how to connect
          your brand with their target market on the social platforms they use
          and love.
        </p>
        <p>
          Social content needs to be compelling, engagement-worthy and
          strategy-informed and consist of highly targeted messaging and
          campaigns that resonate in the hearts and minds of your audience if
          you want them to turn into customers. And that’s exactly what we do
          for our clients.
        </p>
      </ServiceBody>
      <NewServiceBodyLeft
        alt
        title="Social content and campaigns"
        strong="Social content is there to tell a story. Our social media copywriters and designers are gurus in producing engaging, fresh and relevant content and campaigns that entices your social media audience. And they make content that people want to share."
        fp="Your audience is on social media. Our expertise lies in helping you deliver and generate exactly the right content and messaging that they’ll connect with and respond to."
      >
        <StaticImage
          src="../assets/images/social-content-and-campaigns-nutcracker-agency.png"
          alt="Social content and campaigns | Nutcracker"
        />
      </NewServiceBodyLeft>
      <NewServiceBodyLeft
        title="Social media management"
        strong="If you want to leave the experts to grow and optimise your social channels, build a community or get your hands on a steady flow of conversion-driving social media content, Nutcracker can do all that and more"
        fp="When you leave your business's social media management to us we create monthly social media content calendars filled with strategic social content, take care of the posting, and get your platforms growing. "
        sp="To us, effective social media management comes hand in hand with consistent community management across your social platforms. You wouldn’t send a text or Watsapp message and ignore the replies, so why would you do the same on social? Nutcracker knows what it takes to create a dynamic and highly-engaged social media account. We get involved in relevant conversations, respond to comments and direct messages, and keep brand engagement flowing."
        tp="And it doesn’t stop there, we can kick-start employee advocacy programmes, undertake personal branding and profile raising for your C suite, and partner with influencers to raise the profile and interest in your brand all through social media. Whatever your ambition, we make it happen. "
      >
        <StaticImage
          src="../assets/images/social-media-management-nutcracker-agency.png"
          alt="Social media management | Nutcracker"
        />
      </NewServiceBodyLeft>
      <NewServiceBodyLeft
        alt
        title="Social strategy"
        strong="Nutcracker design and execute effective social marketing campaigns that are built on effective strategy, that we make unique to the objectives of our clients."
        fp="Whether you want to increase your social presence, build an affinity with a particular or niche demographic or attract and convert visitors into leads, we make sure that the right people are finding and engaging with your business, by delivering the right content at the right time to the right people."
        sp="Not sure where to find your audience or what platforms and content formats will work best for your brand? We can create a strategy for what your business could – and should – be doing across social."
      >
        <LowerIcon />
      </NewServiceBodyLeft>
      <ServiceBlogs
        data={data.Category.nodes}
        title="Our social media tips and tricks"
      />
      <ServiceContact>
        <h5>
          When it comes to <span>social media marketing</span>, we got you. Let
          us help you get your social media accounts moving in the right
          direction, you won’t regret it.
        </h5>
        <p>
          Tell us more about your brand and what you want to achieve with social
          media.
        </p>
      </ServiceContact>
      <Review reviewData={review} />
    </Layout>
  );
};

SocialMedia.propTypes = {
  data: PropTypes.shape({
    Review: PropTypes.any,
  }),
};

export default SocialMedia;

export const Query = graphql`
  query MediaQuery {
    Review: sanityReview(location: { eq: "socialmediapage" }) {
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
        categories: { elemMatch: { slug: { current: { eq: "social-media" } } } }
      }

      limit: 2
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
