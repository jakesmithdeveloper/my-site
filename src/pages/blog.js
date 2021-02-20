import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import styles from "./styles/blog.module.css"

const Blog = ({ data }) => {
  return data.allMarkdownRemark.edges.length < 0 ? (
    <div></div>
  ) : (
    <Layout>
      <div>
        <ul className={styles.tagList}>
          <li>
            <h3>Tags:</h3>
          </li>
          {data.allMarkdownRemark.group.map(({ fieldValue }) => (
            <li>
              <Link className={styles.linkStyle} to={`/tags/${fieldValue}`}>
                {fieldValue}s
              </Link>
            </li>
          ))}
          <li>
            <Link to="/tags/" className={styles.linkStyle}>
              <strong>All tags</strong>
            </Link>
          </li>
        </ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} className={styles.linkStyle}>
              <h3>
                {node.frontmatter.title} <span> - {node.frontmatter.date}</span>
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
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
