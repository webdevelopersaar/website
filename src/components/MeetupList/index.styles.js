import styled from "styled-components"
export const MeetupListWrapper = styled.section`
  margin-bottom: 5rem;
`
export const MeetupListTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 3rem;
  color: #2a2a2b;
  font-weight: 200;
`

export const MainMeetupTitle = styled.h3`
  margin-bottom: 0;
`

export const List = styled.ol`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 1em;
  }
`
