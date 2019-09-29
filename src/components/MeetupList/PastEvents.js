import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { format } from "date-fns"

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
            yes_rsvp_count
            link
            time
          }
        }
      }
    }
  `)

  return (
    <section>
      <h1>{title}</h1>
      <ol>
        {events.allMeetupEvent.edges.map(edge => {
          const meetup = edge.node
          const meetupDate = new Date(meetup.time)
          return (
            <li>
              <a href={meetup.link}>{meetup.name}</a>
              <span>{meetup.yes_rsvp_count}</span>
              <time
                datetime={`${format(meetupDate, "yyyy-MM-dd")}T${format(
                  meetupDate,
                  "HH:mm:ss"
                )}`}
              >
                {meetupDate.toLocaleString("de-DE")}
              </time>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

MeetupList.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MeetupList
