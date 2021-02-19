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
      <footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul>
          <li style={{ listStyle: "none" }}>© 2021 jakesmith.info</li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
