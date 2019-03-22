/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main style={{marginBottom:`auto`}}>{children}</main>
          <div style={{
                        display: `flex`,
                        marginTop: `auto`
                      }}>
          <footer style={{
                          marginTop: `auto`,
                          textAlign: `center`,
                          flexGrow: `1`
                        }}>
            {new Date().getFullYear()} by donkeypagoda, built using the
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby CLI tool.</a>
          </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
