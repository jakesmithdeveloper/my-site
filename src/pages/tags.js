import React from "react";

import kebabCase from "lodash/kebabCase";

import { Link, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Header />
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">Tags</h1>
      <ul className="mt-6">
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <h3>
                {tag.fieldValue} ({tag.totalCount})
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
  </div>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
