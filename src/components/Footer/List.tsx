import React from "react";
import { GatsbyLinkProps, Link } from "gatsby";

type FooterListProps = BasicProps<HTMLUListElement> & {
  heading: string;
};

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

export const FooterLink: React.FC<
  Omit<GatsbyLinkProps<{}>, "ref"> & { extraClasses?: string }
> = ({ children, extraClasses, ...props }) => {
  return (
    <Link className={`font-normal text-sm ${extraClasses}`} {...props}>
      {children}
    </Link>
  );
};

export default FooterList;
