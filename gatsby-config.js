require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Nutcracker | Award-winning Creative B2B Marketing Agency in London`,
    siteUrl: `https://www.nutcrackeragency.com/`,
    description: `Discover Nutcracker, an award-winning creative B2B marketing agency based in London. Experts in helping businesses achieve growth and tech startups scale to new heights. `,
    twitter: `@comebacktothis`,
    image: `/icon.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdfs`,
        path: `${__dirname}/src/assets/pdfs`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nutcracker | Award-winning Creative B2B Marketing Agency in London`,
        short_name: `Nutcracker Agency`,
        description: `Discover Nutcracker, an award-winning creative B2B marketing agency based in London. Experts in helping businesses achieve growth and tech startups scale to new heights.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#ffffff`,
        theme_color: `#2ba5a2`,
        display: `minimal-ui`,
        icon: `./src/assets/images/nut.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'gkbnlmj8',
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_KEY,
      },
    },
    {
      resolve: `gatsby-transform-portable-text`,
      options: {
        extendTypes: [{ typeName: `SanityPost`, contentFieldName: 'body' }],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#2ba5a2`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-52136219-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-52136219-1',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.nutcrackeragency.com/',
        sitemap: 'https://www.nutcrackeragency.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `/dev-404-page/`,
          `/404/`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback/`,
        ],
        trailingSlashes: false,
      },
    },
  ],
};
