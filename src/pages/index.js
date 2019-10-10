import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Button } from "../components/Button"
import PageWrapper from "../components/Layout/PageWrapper"
import Header from "../components/Layout/Header"
import NextEvent from "../components/MeetupList/NextEvent"
import PastEvents from "../components/MeetupList/PastEvents"

import "../main.css"
const MEDIA_BREAKPOINTS = {
  header: 1500,
}

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${MEDIA_BREAKPOINTS.header}px) {
    flex-direction: row;
    max-width: 50%;
  }
`

const HeaderContentInfo = styled.div`
  flex: 1;
  min-width: 70%;
`

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
  order: -1;
  display: none;
  position: relative;

  @media (min-width: 700px) {
    display: block;
    z-index: -1;
    max-width: 30vw;
  }

  @media (min-width: ${MEDIA_BREAKPOINTS.header}px) {
    order: 0;
    max-width: none;
    float: right;
  }
`

const HeaderText = styled.p`
  font-size: 1.3rem;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 1rem;
`

const HeaderButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  ${Button} {
    margin-bottom: 1rem;
    text-align: center;
  }

  @media (min-width: 500px) {
    flex-direction: row;

    ${Button} {
      text-align: left;
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <PageWrapper>
      <SEO title="Home" />
      <Header>
        <HeaderContent style={{}}>
          <HeaderContentInfo>
            <h1>WebWorker Saar</h1>
            <HeaderText>
              Die WebWorker Saar sind eine Gruppe von Web-Enthusiasten die sich
              einmal im Monat - jeden ersten Donnerstag - trifft, um über
              aktuelle Themen zu diskutieren.
            </HeaderText>
            <HeaderButtonWrapper>
              <Button as="a" href={data.meetupGroup.link} target="_blank">
                Besuche uns auf Meetup
              </Button>
              <Button
                as="a"
                href="https://webdeveloper-slack.herokuapp.com/"
                target="_blank"
              >
                Oder auf unserem Slack
              </Button>
            </HeaderButtonWrapper>
          </HeaderContentInfo>
          <HeaderImage src={data.file.childImageSharp.fixed.src} />
        </HeaderContent>
      </Header>
      {/* {data.allMarkdownRemark.edges.map(edge => (
        <a href={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</a>
      ))} */}
      <NextEvent title="Nächstes Event" />
      <PastEvents title="Vergangene Events" />
    </PageWrapper>
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
    file(relativePath: { regex: "/logo*/g" }) {
      childImageSharp {
        fixed(width: 1500) {
          src
        }
      }
    }
  }
`

export default IndexPage
