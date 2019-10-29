import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { format } from "date-fns"

import {
  MeetupListWrapper, MeetupListTitle,
  MainMeetupTitle,
} from "./index.styles"
import { CTAButton } from "../Button"

const MeetupList = ({ title }) => {
  return (
    <MeetupListWrapper>
      <MeetupListTitle>{title}</MeetupListTitle>
      <StaticQuery
        query={graphql`
          query NextEventQuery {
            meetupEvent(status: { eq: "upcoming" }) {
              id
              link
              name
              venue {
                city
                address_1
                name
              }
              time
              description
            }
          }
        `}
      >
        {data => {
          const event = data.meetupEvent
          console.log(event)
          return event ? (
            <section>
              <MainMeetupTitle>{event.name}</MainMeetupTitle>
              <span>{new Date(event.time).toLocaleString("de-DE")}</span>
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
              <CTAButton as="a" href={event.link}>
                Jetzt anmelden!
              </CTAButton>
            </section>
          ) : (
            <p>Bisher wurde kein zukünftiges Event bekannt gegeben.</p>
          )
        }}
      </StaticQuery>
    </MeetupListWrapper>
  )
}

MeetupList.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MeetupList
