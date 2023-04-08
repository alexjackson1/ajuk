import React from "react";
import { GatsbyLinkProps, Link } from "gatsby";

export type ParagraphProps = BasicProps<HTMLParagraphElement>;
export type HeadingProps = BasicProps<HTMLHeadingElement>;
export type LinkProps = ExtraClasses<NoClassName<GatsbyLinkProps<{}>>>;

export const P: React.FC<ParagraphProps> = (props) => {
  const { children, extraClasses, ...rest } = props;
  return (
    <p
      className={`my-4 text-lg tracking-tighter font-normal sm:text-xl ${extraClasses}`}
      {...rest}
    >
      {children}
    </p>
  );
};

export const H1: React.FC<HeadingProps> = (props) => {
  const { children, extraClasses, ...rest } = props;
  return (
    <h1
      className={`my-2 text-5xl font-bold sm:text-5xl md:text-7xl ${extraClasses}`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<HeadingProps> = (props) => {
  const { children, extraClasses, ...rest } = props;
  return (
    <h2
      className={`my-1 text-2xl font-normal sm:text-3xl ${extraClasses}`}
      {...rest}
    >
      {children}
    </h2>
  );
};

export const TextLink: React.FC<LinkProps> = (props) => {
  const { children, extraClasses, ref, ...rest } = props;
  return (
    <Link
      className={`font-normal underline sm:text-xl ${extraClasses}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
