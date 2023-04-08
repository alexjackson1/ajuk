import React from "react";
import { GatsbyLinkProps, Link } from "gatsby";

interface FooterListProps extends BasicProps<HTMLUListElement> {
  heading: string;
}

export const FooterList: React.FC<FooterListProps> = (props) => {
  const { heading, children, ...rest } = props;
  return (
    <div className="flex flex-col items-center min-w-[10rem]">
      <h5 className="text-sm uppercase ">{heading}</h5>
      <ul
        className="flex items-center flex-1 gap-2 text-sm sm:gap-3 md:gap-4 xl:gap-5"
        {...rest}
      >
        {React.Children.map(children, (child) => (
          <li className="">{child}</li>
        ))}
      </ul>
    </div>
  );
};

type LinkProps = ExtraClasses<GatsbyLinkProps<{}>>;
export const FooterLink: React.FC<Omit<LinkProps, "ref">> = (props) => {
  const { children, extraClasses, ...rest } = props;
  return (
    <Link className={`font-normal text-sm ${extraClasses}`} {...rest}>
      {children}
    </Link>
  );
};

export default FooterList;
