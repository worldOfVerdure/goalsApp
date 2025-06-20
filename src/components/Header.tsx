import { type FC, type ReactNode } from "react";

type HeaderProps = {
  src: string;
  alt: string;
  children: ReactNode;
};

const Header: FC<HeaderProps> = ({src, alt, children}) => {
  return (
    <header>
      <img src={src} alt={alt} />
      <h1>{children}</h1>
    </header>
  );
}

export default Header;
