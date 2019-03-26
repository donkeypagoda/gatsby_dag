import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (

    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `apollo`, `decoupled`, `drupal`]} />
      <h1>Yet another POC of De-coupled Drupal + Gatsby.</h1>
      <p>It uses the GraphQL module on the Drupal side, then uses the gatsby-source-graphQL plugin and the Apollo client plugin in Gatsby on the frontend.  Which allows us to understand the fact that:</p>
        <div style={{
                maxWidth: `500px`,
                marginBottom: `.5rem`,
                marginLeft: `auto`,
                marginRight: `auto`
              }}>
          <Image />
        </div>
        <div style={{textAlign: `center`, marginBottom: `5rem`}}>
          <p>The WaterMonster is right CatMan, GraphQL is a beast!</p>
        </div>
        <div>
          <h2>Some other pages to look at:</h2>
            <ul>
              <li>
                <Link to="/maybesPage/">Go to Maybes Page</Link>
              </li>
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
