import type { ReactNode, FC } from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";

interface FooterProps extends LinkProps {
  children: ReactNode,
  href: string
};

interface FooterIconProps extends LinkProps {
  children: ReactNode,
  href: string
};

const FooterLink: FC<FooterProps> = ( { children, href } ) => {
  return (
    <li>
      <Link href={href}>
        <a>
          {children}
        </a>
      </Link>
    </li>
  );
};

const FooterIconLink: FC<FooterProps> = ({ children, href }) => {
  return (
    <li>
      <Link href={href}>
        <a>
          {children}
        </a>
      </Link>
    </li>
  );
};

export const Footer: FC = () => {
  return (
    <footer
      className= {`
        w-full
        max-w-3xl
      `}
    >
      <div>
        <nav>
          <ul className={`
            flex
            justify-between
            items-center
          `}>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/checklist">CheckList</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
            <FooterLink href="/history">History</FooterLink>
            <FooterLink href="/dashbord">Dashborad</FooterLink>
            <FooterLink href="/social">Social</FooterLink>
            <FooterLink href="/colection">Collection</FooterLink>
          </ul>
        </nav>
      </div>
      <div>
        <ul className={`
          flex
          justify-between
          items-center
        `}>
          <FooterIconLink href="">
            <span>FaceBook</span>
          </FooterIconLink>
          <FooterIconLink href="">
            <span>Twitter</span>
          </FooterIconLink>
          <FooterIconLink href="">
            <span>Github</span>
          </FooterIconLink>
          <FooterIconLink href="">
            <span>Linkedin</span>
          </FooterIconLink>
        </ul>
      </div>
      <div>
      <ul className={`
          flex
          justify-between
          items-center
        `}>
          <li>v1.0.0 ©︎ nemi. All rights reserved. </li>
          <li>LocalSelectボタンを配置する（日本語 or 英語）</li>
        </ul>
      </div>
    </footer>
  );
};