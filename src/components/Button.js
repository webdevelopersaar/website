import styled from "styled-components"

const MEETUP_CI_COLOR = "#F7496B"
export const Button = styled.button.attrs(props =>
  props.href ? {} : { type: "button" }
)`
  background-color: white;
  padding: 0.5rem;
  color: #515254;
  border: 1px solid currentColor;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8rem;
`

export const CTAButton = styled(Button)`
  background-color: ${MEETUP_CI_COLOR};
  border-color: ${MEETUP_CI_COLOR};
  color: white;
  transition: all 0.4s;

  /* Make CTA button work in <a> context (cf. global styles) */
  &:visited,
  &:link {
    color: white;
  }

  &:hover,
  &:focus {
    color: ${MEETUP_CI_COLOR};
    background: none;
    border-color: currentColor;
  }
`

export default { Button, CTAButton }
