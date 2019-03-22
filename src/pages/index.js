import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (

    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `apollo`, `decoupled`, `drupal`]} />
      <h1>Yet another POC of De-coupled Drupal + Gatsby.</h1>
      <p>It uses the GraphQL module on the Drupal side, then uses the Apollo client plugin in Gatsby on the frontend.</p>
        <div style={{
                maxWidth: `500px`,
                marginBottom: `.5rem`,
                marginLeft: `auto`,
                marginRight: `auto`
              }}>
        <Image />
        </div>
        <div style={{textAlign: `center`, marginBottom: `2rem`}}>
        <p>The WaterMonster is right CatMan, GraphQL is a beast!</p>
        </div>
      <div>
        <ul>
          <li>
            <Link to="/stuffPage/">Go to Stuff Page</Link>
          </li>
          <li>
            <Link to="/thingsPage/">Go to Things Page</Link>
          </li>
        </ul>
      </div>
    </Layout>


)

export default IndexPage
