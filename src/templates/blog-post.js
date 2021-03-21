import React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <Header />
      <div className="text-center">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
