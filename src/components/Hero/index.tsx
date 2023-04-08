import React from "react";

import { H1, H2 } from "@/components/common";
import Avatar from "@/components/Avatar";
import BlobMorpher from "@/components/BlobMorpher";
import NavigationMenu from "@/components/Navigation";

import GithubIcon from "@/assets/icons/github-142-svgrepo-com-min.svg";
import TwitterIcon from "@/assets/icons/twitter-3-svgrepo-com-min.svg";
import LinkedInIcon from "@/assets/icons/linkedin-svgrepo-com-min.svg";
import UniversityIcon from "@/assets/icons/courses-svgrepo-com-min.svg";

export interface HeroProps extends BasicProps<HTMLDivElement> {
  headline: string;
  tagline: string;
  profileUrl: string;
  navigation: Record<string, { name: string; href: string }[]>;
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const { headline, tagline, navigation, profileUrl, extraClasses, ...rest } =
    props;
  return (
    <div
      className={`relative flex flex-col items-center h-screen gap-2 px-2 py-4 text-white tall:gap-4 bg-deepaqua-500 ${extraClasses}`}
      {...rest}
    >
      <div className="flex flex-col items-center w-full gap-2 justify-evenly sm:flex-row tall:gap-4">
        <Avatar
          src={profileUrl}
          frameClasses="w-36 xs:w-48 sm:w-64 md:w-72 lg:w-80 xl:w-[30rem] z-10 m-1 flex-shrink-0 border-moonstone-500 border-[6px] sm:border-8 "
          extraClasses="-translate-x-3 scale-[175%] xs:-translate-x-3 xs:scale-[175%] sm:-translate-x-5 sm:scale-150 md:-translate-x-2 md:scale-125 lg:-translate-x-0 lg:scale-100 xl:-translate-x-0 xl:scale-100"
        />
        <div className="relative flex flex-col items-center gap-2 tall:gap-4">
          <H1 extraClasses="z-10 text-center uppercase">{headline}</H1>
          <H2 extraClasses="z-10 text-center uppercase">{tagline}</H2>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-full gap-2 sm:mt-2 md:mt-5 sm:flex-wrap sm:flex-row justify-evenly">
        {Object.entries(navigation).map(([heading, items]) => (
          <NavigationMenu
            key={heading}
            className="z-10 flex flex-col justify-center w-full sm:w-auto"
            items={items}
            heading={heading}
          />
        ))}
      </div>
      <ul className="z-10 flex flex-row-reverse w-full h-8 gap-4 md:h-10 md:gap-5 xl:h-12 xl:gap-6">
        <GithubIcon className="w-auto fill-white" />
        <TwitterIcon className="w-auto fill-white" />
        <LinkedInIcon className="w-auto fill-white" />
        <UniversityIcon className="w-auto fill-white" />
      </ul>
      <div className="absolute bottom-0 right-0 z-0 opacity-30 w-[35rem]">
        <BlobMorpher viewBox="-50 -50 60 70" />
      </div>
    </div>
  );
};

export default Hero;
