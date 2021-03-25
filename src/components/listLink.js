import React from "react";
import { Link } from "gatsby";

const ListLink = (props) => (
  <li className="">
    <Link
      className="no-underline shadow-none bg-none mx-2 md:mx-0 text-xl text-blue-500"
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
);

export default ListLink;
