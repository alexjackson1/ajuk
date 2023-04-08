import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

import { TextLink } from "@/components/common";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import RichContent from "@/components/RichContent";

// TODO: Retrieve these from CMS
import PROFILE_URL from "@/images/profile.jpg";
import ALT_PROFILE_URL from "@/images/alt-profile.jpg";

function selectIndexProps(data: Queries.IndexPageQuery) {
  const BASIC_NAVIGATION_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "CV", href: "/cv" },
    { name: "Contact", href: "/contact" },
  ];

  const MAIN_DISPLAY_CATEGORIES = [
    { name: "Research", href: "/categories/research" },
    { name: "Writing", href: "/categories/writing" },
    { name: "Projects", href: "/categories/projects" },
    { name: "Reviews", href: "/categories/reviews" },
  ];

  const MAIN_DISPLAY_THEMES = [
    { name: "Artificial Intelligence", href: "/themes/ai" },
    { name: "Regulation", href: "/themes/regulation" },
    { name: "Banking & Payments", href: "/themes/tv" },
  ];

  const HERO_NAVIGATION = {
    [data?.navMainHeading?.value ?? "Main Navigation"]: BASIC_NAVIGATION_LINKS,
    [data?.navCategoryHeading?.value ?? "Categories"]: MAIN_DISPLAY_CATEGORIES,
    [data?.navThemeHeading?.value ?? "Themes"]: MAIN_DISPLAY_THEMES,
  };

  const CONTENT = [
    <>Hi, I'm Alex ―</>,
    <>
      Welcome to my personal website! Here, you can explore my academic
      research, read my argumentative and critical writing, and find out about
      my professional background and work history.
    </>,
    <>
      As an AI researcher, I specialise in{" "}
      <TextLink to="#">formal logic and argumentation</TextLink> (or, at least,
      that's what <TextLink to="#">my PhD</TextLink> is on). That being said, I
      am particularly interested in the intersection of{" "}
      <TextLink to="#">deep learning</TextLink>,{" "}
      <TextLink to="#">logical reasoning</TextLink>, and{" "}
      <TextLink to="#">human/machine dialogue</TextLink> (and its applications
      to <TextLink to="#">AI safety</TextLink>).
    </>,
    <>
      Outside of research, in the past, I have been a reviewer of{" "}
      <TextLink to="#">live theatre</TextLink>; however, recently I have been
      focusing on my <i>not–so–guilty</i> pleasure of{" "}
      <TextLink to="#">television criticism</TextLink> ― if only to keep track
      of the best things I've watched!
    </>,
    <>
      This website also features my <TextLink to="#">CV</TextLink>, where you
      can learn more about my experience in{" "}
      <TextLink to="#">payments and financial services</TextLink>, as well as my
      work as a <TextLink to="#">freelance software developer</TextLink>.
      Professionally, I am most interested in the application of{" "}
      <TextLink to="#">AI ethics</TextLink> and the crafting of{" "}
      <TextLink to="#">effective regulation</TextLink> for AI that supports
      safe, competitive, commerical AI propositions.
    </>,
    <>
      I hope you enjoy exploring my website and learning more about my interests
      and experiences. Please feel free to{" "}
      <TextLink to="#">get in touch</TextLink> if you have any questions or
      comments; and thank you for visiting!
    </>,
  ];

  const LATEST_POSTS = [
    {
      title: "The Future of AI Regulation",
      date: "2021-09-01",
      description:
        "A look at the future of AI regulation, and how it will impact the future of AI.",
      href: "/posts/future-of-ai-regulation",
      slug: "future-of-ai-regulation",
      author: "Alex Jackson",
    },
    {
      title: "The Future of AI Regulation",
      date: "2021-09-01",
      description:
        "A look at the future of AI regulation, and how it will impact the future of AI.",
      href: "/posts/future-of-ai-regulation",
      slug: "future-of-ai-regulation-2",
      author: "Alex Jackson",
    },
  ];

  const FOOTER_NAVIGATION = {
    Navigation: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    External: [
      { name: "GitHub", href: "https://github.com/alexjackson1" },
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
    Standards: [
      { name: "RSS", href: "#" },
      { name: "Sitemap", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  return {
    hero: {
      headline: data?.headline?.value ?? "Alex Jackson",
      tagline: data?.tagline?.value ?? "AI Researcher",
      // TODO: Select following from CMS
      profileUrl: PROFILE_URL,
      navigation: HERO_NAVIGATION,
    },
    footer: {
      initials: data?.initials?.value ?? "AJ",
      fullName: data?.fullName?.value ?? "Alex Jackson",
      navigation: FOOTER_NAVIGATION,
    },
    main: {
      content: CONTENT,
      coverImageUrl: data?.contents?.heroImage?.url ?? undefined,
    },
    aside: {
      latestPosts: LATEST_POSTS,
    },
  };
}

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const { hero, main, footer, aside } = selectIndexProps(data);
  const { headline, tagline, profileUrl, navigation: heroNavigation } = hero;
  const { content, coverImageUrl } = main;
  const { latestPosts } = aside;
  const { navigation: footerNavigation, initials, fullName } = footer;

  return (
    <div>
      <header className="">
        <Hero
          headline={headline}
          tagline={tagline}
          profileUrl={profileUrl}
          navigation={heroNavigation}
        />
      </header>
      <div className="flex flex-col sm:flex-row">
        <main>
          <RichContent content={content} coverImageUrl={coverImageUrl} />
        </main>
        <aside className="sm:flex-[1] text-justify p-2 bg-white">
          <LatestPosts posts={latestPosts} />
        </aside>
      </div>
      <footer className="">
        <Footer
          extraClasses="text-white bg-charleston-500 stroke-white"
          header={initials}
          navigation={footerNavigation}
          copyright={{ holder: fullName, year: new Date().getFullYear() }}
        />
      </footer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC<Queries.IndexPageQuery> = ({ data }) => {
  const title = data?.site?.siteMetadata?.title ?? "Alex Jackson";
  return <title>{title}</title>;
};

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    headline: contentfulMicrocopy(key: { eq: "HEADLINE" }) {
      value
    }
    tagline: contentfulMicrocopy(key: { eq: "TAGLINE" }) {
      value
    }
    navMainHeading: contentfulMicrocopy(key: { eq: "NAV_MAIN_HEADING" }) {
      value
    }
    navCategoryHeading: contentfulMicrocopy(
      key: { eq: "NAV_CATEGORY_HEADING" }
    ) {
      value
    }
    navThemeHeading: contentfulMicrocopy(key: { eq: "NAV_THEME_HEADING" }) {
      value
    }
    profilePhoto: contentfulConfiguration(
      key: { eq: "PROFILE_PHOTO_ENTRY_ID" }
    ) {
      entryId: value {
        value
      }
    }
    initials: contentfulMicrocopy(key: { eq: "INITIALS" }) {
      value
    }
    fullName: contentfulMicrocopy(key: { eq: "FULL_NAME" }) {
      value
    }
    contents: contentfulLandingPage(slug: { eq: "index" }) {
      name
      body {
        raw
        references {
          ... on ContentfulSinglePage {
            id
            name
          }
          ... on ContentfulTag {
            id
            name
          }
          ... on ContentfulTimelinePage {
            id
            name
          }
        }
      }
      slug
      featuredPosts
      featuredReviews
      featuredArticles
      heroImage {
        title
        url
        width
        height
        mimeType
        filename
      }
    }
  }
`;
