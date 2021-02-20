import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost
