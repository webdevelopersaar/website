import styled from "styled-components"
import stroke from "../../images/andiasas.svg"
export default styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${stroke}) no-repeat top center;
  filter: ${p => ("degree" in p ? `hue-rotate(${p.degree}deg)` : "")};
  background-size: contain;
  position: relative;
  height: auto;
  min-height: 200px;

  @media (min-width: 1000px) {
    min-height: 600px;
  }
`
