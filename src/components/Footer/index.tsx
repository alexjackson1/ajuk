import React from "react";
import FooterList, { FooterLink } from "./List";

interface FooterProps extends NoChildren<BasicProps<HTMLDivElement>> {
  header: string;
  navigation: Record<string, { name: string; href: string }[]>;
  copyright: { year: number; holder: string };
}

const Footer: React.FC<FooterProps> = (props) => {
  const { header, navigation, copyright, extraClasses, ...rest } = props;
  return (
    <div className={`flex flex-col items-center p-2 ${extraClasses}`} {...rest}>
      <h4 className="m-8 text-6xl font-bold">AJ</h4>
      <div className="flex flex-row flex-wrap justify-center flex-1 w-full px-10 gap-x-10 gap-y-5">
        {Object.entries(navigation).map(([heading, items]) => (
          <FooterList heading={heading}>
            {items.map((item) => (
              <FooterLink to={item.href}>{item.name}</FooterLink>
            ))}
          </FooterList>
        ))}
      </div>
      <p className="my-8 text-xs">
        © {copyright.year} {copyright.holder}, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
