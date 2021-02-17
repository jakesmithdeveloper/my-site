import React from "react"
import { Link } from "gatsby"

import ListLink from "./listLink"

const Layout = ({ children }) => {
  return (
    <div style={{ margin: "3rem auto", maxWidth: 700 }}>
      <header>
        <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
          <h1 style={{ display: "inline" }}>Jakesmith.info</h1>
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
