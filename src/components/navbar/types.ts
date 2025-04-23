
export interface NavbarLink {
  text: string;
  href: string;
  children?: NavbarLink[];
}

export interface User {
  name: string;
  avatar: string;
}

export interface PromoNavbarProps {
  links: NavbarLink[];
  user?: User;
  logo?: {
    src: string;
    alt: string;
  };
}
