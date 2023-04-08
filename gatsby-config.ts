import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Alex Jackson | AI Researcher",
    description: "Personal website of Alex Jackson.",
    // TODO: Change this when the site is live
    siteUrl: `localhost:8000`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: "gatsby-plugin-image",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Jackson | AI Researcher`,
        short_name: `Alex Jackson`,
        start_url: `/`,
        background_color: "#F5F2F5",
        theme_color: `#3B8167`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
  ],
};

export default config;
