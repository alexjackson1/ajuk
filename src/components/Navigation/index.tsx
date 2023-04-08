import * as React from "react";

import { Link } from "gatsby";

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type ListItemProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

interface NavigationProps extends DivProps {
  heading?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  heading,
  children,
  ...rest
}) => {
  return (
    <nav {...rest}>
      {heading && <h2 className="text-lg font-light uppercase">{heading}</h2>}
      <ul className="flex flex-wrap my-2 gap-x-1 gap-y-1">{children}</ul>
    </nav>
  );
};

interface NavigationItemProps extends ListItemProps {
  href: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <li className="m-0" {...rest}>
      <Link
        className="block px-2 py-2 sm:min-w-[7rem] rounded-xl text-center bg-white/5 hover:bg-white/20"
        to={href}
      >
        {children}
      </Link>
    </li>
  );
};

interface NavigationMenuProps extends NavigationProps {
  items: { href: string; name: string }[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ items, ...rest }) => {
  return (
    <Navigation {...rest}>
      {items.map((item: { href: string; name: string }) => (
        <NavigationItem href={item.href} key={item.name}>
          {item.name}
        </NavigationItem>
      ))}
    </Navigation>
  );
};

export { Navigation, NavigationItem, NavigationMenu };
export default NavigationMenu;
