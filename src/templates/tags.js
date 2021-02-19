import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li style={{}} key={slug}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    textShadow: "none",
                    backgroundImage: "none",
                  }}
                  to={slug}
                >
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span style={{ color: "#bbb" }}>
                      {" "}
                      - {node.frontmatter.date}
                    </span>
                  </h3>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
