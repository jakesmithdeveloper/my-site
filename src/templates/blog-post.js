import React from "react";
import { graphql, Link } from "gatsby";

import Header from "../components/header";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <Header />
      <div className="flex justify-center mx-3 md:mx-0">
        <div
          className="w-full max-w-lg markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <div className="w-full flex justify-center">
        <Link
          className="mb-8 mt-2 py-2 no-underline shadow-none bg-none text-2xl "
          to="/blog/"
        >
          Back to posts
        </Link>
      </div>
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
