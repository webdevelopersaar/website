import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { format } from "date-fns"

import {
  MeetupListWrapper,
  MeetupListTitle,
  MainMeetupTitle,
  List,
} from "./index.styles"

const MeetupList = ({ title }) => {
  const events = useStaticQuery(graphql`
    query MeetupListQuery {
      allMeetupEvent(
        filter: { status: { eq: "past" } }
        limit: 5
        sort: { order: DESC, fields: time }
      ) {
        edges {
          node {
            id
            name
            link
            time
          }
        }
      }
    }
  `)

  return (
    <MeetupListWrapper className="full-width">
      <MeetupListTitle>{title}</MeetupListTitle>
      <List>
        {events.allMeetupEvent.edges.map(edge => {
          const meetup = edge.node
          const meetupDate = new Date(meetup.time)
          return (
            <li>
              <a href={meetup.link}>
                <MainMeetupTitle>{meetup.name}</MainMeetupTitle>
              </a>
              <time
                dateTime={`${format(meetupDate, "yyyy-MM-dd")}T${format(
                  meetupDate,
                  "HH:mm:ss"
                )}`}
              >
                {meetupDate.toLocaleString("de-DE")}
              </time>
            </li>
          )
        })}
      </List>
    </MeetupListWrapper>
  )
}

MeetupList.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MeetupList
