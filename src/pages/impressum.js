import React from "react"
import SEO from "../components/seo"
import PageWrapper from "../components/Layout/PageWrapper"
const DataSecurityPage = () => {
  return (
    <PageWrapper>
      <SEO title="Datenschutz" />
      <h1>Impressum</h1>
      <p>
        Andreas Sander
        <br />
        Im Stockwald 12
        <br />
        66265 Heusweiler
      </p>
      <a href="mailto:mail@andi1984.de" target="_blank">
        Mail
      </a>
    </PageWrapper>
  )
}

export default DataSecurityPage
