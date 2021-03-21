import React from "react";

import { Link, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <h1>{tagHeader}</h1>
        <ul className="mt-10">
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            return (
              <li style={{}} key={slug}>
                <Link to={slug}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span> - {node.frontmatter.date}</span>
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link className="bg-none mt-4 text-xl text-blue-500" to="/tags">
          all tags
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Tags;

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
`;
