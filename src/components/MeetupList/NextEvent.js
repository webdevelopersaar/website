import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { format } from "date-fns"

const MeetupList = ({ title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <StaticQuery
        query={graphql`
          query NextEventQuery {
            meetupEvent(status: { eq: "past" }) {
              id
              link
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
          console.table(event)
          return event ? (
            <section>
              <h2>{event.name}</h2>
              <span>{new Date(event.time).toLocaleString("de-DE")}</span>
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
              <a href={event.link}>Jetzt anmelden!</a>
            </section>
          ) : <p>Bisher wurde kein zukünftiges Event bekannt gegeben.</p>
        }}
      </StaticQuery>
    </section>
  )
}

MeetupList.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MeetupList
