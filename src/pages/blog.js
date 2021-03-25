import React from "react";
import { Link, graphql } from "gatsby";

import Header from "../components/header";

const Blog = ({ data }) => {
  return data.allMarkdownRemark.edges.length < 0 ? (
    <div></div>
  ) : (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <ul className="list-none ">
          <li className="inline-block mr-1">
            <h3>Tags:</h3>
          </li>
          {data.allMarkdownRemark.group.map(({ fieldValue }) => (
            <li className="inline-block ">
              <Link
                className="no-underline shadow-none bg-none"
                to={`/tags/${fieldValue}`}
              >
                {fieldValue}s
              </Link>
            </li>
          ))}
          <p className="inline-block">
            <strong className="mx-2">|</strong>
          </p>
          <li className="inline-block">
            <Link to="/tags/" className="no-underline shadow-none bg-none">
              <strong>All tags</strong>
            </Link>
          </li>
        </ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className="no-underline shadow-none bg-none"
            >
              <h3 className="text-xl md:text-2xl">
                {node.frontmatter.title} <span> - {node.frontmatter.date}</span>
              </h3>
              <p>{node.exerp}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            tags
            date(formatString: "DD MMMM, YYYY")
            title
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
`;

export default Blog;
