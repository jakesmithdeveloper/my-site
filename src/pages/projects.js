import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Projects = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <h1>My Projects</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Status</th>
          <th>Link</th>
        </thead>
        <tbody>
          {data.allProjectsJson.edges.map(({ node }, index) => (
            <tr style={{ borderTop: "none", borderBottom: "none" }} key={index}>
              <td>{node.name}</td>
              <td>{node.status}</td>
              <td>{node.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          name
          link
          status
        }
      }
    }
  }
`

export default Projects
