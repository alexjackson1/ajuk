import React from "react";
import { P } from "../common";

interface CoverImageProps extends BasicProps<HTMLDivElement> {
  url: string;
}

const CoverImage: React.FC<CoverImageProps> = ({
  children,
  url,
  extraClasses,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={`bg-fixed bg-center bg-no-repeat bg-cover ${extraClasses}`}
    >
      {children}
    </div>
  );
};

type ContentNode = JSX.Element;

interface RichContentProps extends BasicProps<HTMLDivElement> {
  // TODO: Work out content model and best way to select/render
  content: ContentNode[];
  coverImageUrl: string;
}

const RichContent: React.FC<RichContentProps> = (props) => {
  const { content, coverImageUrl, extraClasses, ...rest } = props;
  // HACK: Assume first one is the heading just for the landing page/now.
  const [heading, ...restOfContent] = content;
  return (
    <div className={`text-white bg-moonstone-500 ${extraClasses}`} {...rest}>
      <CoverImage
        url={coverImageUrl}
        extraClasses="h-[30rem] bg-moonstone-500 bg-blend-overlay"
      />
      <div className="sm:flex-[2] text-justify p-2 first">
        <h3 className="mt-5 mb-10 font-extrabold text-7xl">{heading}</h3>
        {/* HACK: Can probably do this with a selector */}
        <P extraClasses="font-semibold relative first-letter:text-5xl first-letter:float-left first-letter:pt-2 first-letter:pr-1">
          {restOfContent[0]}
        </P>
        {restOfContent.slice(1).map((node, i) => (
          <P key={i}>{node}</P>
        ))}
      </div>
    </div>
  );
};

export default RichContent;
