import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import styles from "./styles/index.module.css"

export default function Home() {
  return (
    <div>
      <Layout>
        <div className={styles.imageContainer}>
          <Image />
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            This site will have to do for now ... I want to focus on building{" "}
            <Link className={styles.linkStyle} to="/projects/">
              <span>cool things</span>
            </Link>
            .
          </p>
        </div>
      </Layout>
    </div>
  )
}
