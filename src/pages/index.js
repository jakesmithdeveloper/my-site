import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"

export default function Home() {
  return (
    <div>
      <Layout>
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <Image />
        </div>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              textAlign: "center",
            }}
          >
            This site will have to do for now ... I want to focus on building{" "}
            <Link
              style={{ textShadow: "none", backgroundImage: "none" }}
              to="/projects/"
            >
              <span style={{ color: "purple" }}>cool things</span>
            </Link>
            .
          </p>
        </div>
      </Layout>
    </div>
  )
}
