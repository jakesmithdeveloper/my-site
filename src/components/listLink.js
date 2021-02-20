import React from "react"
import { Link } from "gatsby"

import styles from "./styles/listLink.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className={styles.linkStyles} to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default ListLink
