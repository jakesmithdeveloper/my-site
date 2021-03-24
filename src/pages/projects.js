import React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";

const Projects = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mx-4">
        <div className="max-w-xl w-full">
          <table>
            <thead>
              <th>Name</th>
              <th>Status</th>
              <th>Link</th>
            </thead>
            <tbody>
              {data.allProjectsJson.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.name}</td>
                  <td>{node.status}</td>
                  <td>
                    <div className="flex flex-col">
                      {node.links.map((link) => (
                        <a
                          className="my-1 bg-none text-blue-500"
                          href={link.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          name
          links {
            name
            link
          }
          status
          description
        }
      }
    }
  }
`;

export default Projects;
