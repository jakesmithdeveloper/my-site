import React from "react";
import { Link } from "gatsby";

import ListLink from "./listLink";
import styles from "./styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <header>
        <Link to="/" className={styles.cancelLinkStyle}>
          <h1 style={{ display: "inline" }}>Jakesmith.info</h1>
        </Link>
        <ul className={styles.linkList}>
          <ListLink className={styles.cancelLinkStyle} to="/blog/">
            Blog
          </ListLink>
          <ListLink className={styles.cancelLinkStyle} to="/projects/">
            Projects
          </ListLink>
        </ul>
      </header>
      {children}
      <footer
        style={{
          position: "absolute",
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
  );
};

export default Layout;
