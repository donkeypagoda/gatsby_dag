import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hayo.  This is a POC of De-coupled Drupal and Gatsby.</h1>
    <p>It uses the GraphQL module on the Drupal side, then uses the Apollo client plugin in Gatsby on the frontend.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
    </div>
    <Link to="/stuffPage/">Go to Stuff Page</Link>
  </Layout>
)

export default IndexPage
