import React from "react";
import { Link } from "gatsby";

import ListLink from "./listLink";

const Header = () => {
  return (
    <header className="flex flex-col items-center md:flex-row md:max-w-xl mx-auto my-4">
      <Link className="no-underline shadow-none bg-none" to="/">
        <h1 className="text-4xl">Jakesmith.info</h1>
      </Link>
      <div className="md:w-full"></div>
      <ul className="w-full flex mt-2 justify-center md:justify-evenly md:mt-1">
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
      </ul>
    </header>
  );
};

export default Header;
