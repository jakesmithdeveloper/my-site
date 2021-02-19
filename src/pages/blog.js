import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
//import ListLink from "../components/listLink"

const Blog = ({ data }) => {
  return (
    <Layout>
      <div>
        <ul style={{ listStyle: "none" }}>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <h3>Tags:</h3>
          </li>
          {data.allMarkdownRemark.group.map(({ fieldValue }) => (
            <li style={{ display: "inline-block", marginRight: "1rem" }}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/tags/${fieldValue}`}
              >
                {fieldValue}
              </Link>
            </li>
          ))}
        </ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>
                {node.frontmatter.title}{" "}
                <span style={{ color: "#bbb" }}>
                  {" "}
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.exerp}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`

export default Blog
