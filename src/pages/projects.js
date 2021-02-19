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
        <tbody style={{ border: "none" }}>
          {data.allProjectsJson.edges.map(({ node }, index) => (
            <tr style={{ borderTopStyle: "none" }} key={index}>
              <td style={{ borderTopStyle: "none" }}>{node.name}</td>
              <td style={{ borderTopStyle: "none" }}>{node.status}</td>
              <td style={{ borderTopStyle: "none" }}>{node.link}</td>
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
          description
        }
      }
    }
  }
`

export default Projects
