import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  return (
    <div>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {data.allMarkdownRemark.edges.map(edge => (
        <a href={edge.node.frontmatter.path}>
          {edge.node.frontmatter.title}
        </a>
      ))}
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
