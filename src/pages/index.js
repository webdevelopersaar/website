import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import NextEvent from "../components/MeetupList/NextEvent"
import PastEvents from "../components/MeetupList/PastEvents"

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <Img fluid={data.allImageSharp.edges[0].node.fluid} />
      <header>
        <h1>WebWorker Saar</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit dolore eu fug
        </p>
        <div>
          <a href={data.meetupGroup.link} target="_blank">Besuche uns auf Meetup</a>
          <a href="https://webdeveloper-slack.herokuapp.com/" target="_blank">
            Oder auf unserem Slack
          </a>
        </div>
      </header>
      {/* {data.allMarkdownRemark.edges.map(edge => (
        <a href={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</a>
      ))} */}
      <NextEvent title="Nächstes Event" />
      <PastEvents title="Vergangene Events" />
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    #  allMarkdownRemark {
    #    edges {
    #      node {
    #        frontmatter {
    #          title
    #          path
    #        }
    #      }
    #    }
    #  }
    meetupGroup {
      link
    }
    allImageSharp(
      filter: { fluid: { src: { regex: "/logo*/g" }, srcSet: {} } }
    ) {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
