

import type { FC } from "react";
import Link from "next/link";
import type { LinkProps  } from "next/link";

interface HeaderProps extends LinkProps {
  child: string,
  href: string
}

const HeaderLink: FC<HeaderProps> = ({ child, href }) => {
  return (
    <li>
      <Link href={href}>
        <a>{child}</a>
      </Link>
    </li>
  );
};

export const Header: FC = () => {
  return (
    <header
     className={`
      flex
      justify-between
      items-center
      w-full
      max-w-3xl
    `}
    >
      <div className="flex">
        {/* <Link href="/"> */}
          <span>🦄</span>
          <span
            className={`
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
            `}
          >
            nemi
          </span>
        {/* </Link> */}
      </div>
      <div className="">
        <nav>
          <ul className="flex">
            <HeaderLink child="About" href="/about"></HeaderLink>
            <HeaderLink child="Blog" href="/blog"></HeaderLink>
            <HeaderLink child="Dashboard" href="/dashboard"></HeaderLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
