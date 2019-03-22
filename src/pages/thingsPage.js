import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Things = () => (

  <Layout>
    <Query
      query={gql`
        {
          nodeQuery {
             entities {
              ...on NodeThings {
                id:entityId
                title
              }
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Kicking out the jamz...</p>;
        if (error) return <p>Uh oh, something marshed my hello...</p>;

        return data.nodeQuery.entities.map(({ id, title }) => (
          <div key={id}>
            <h1>{title}</h1>
          </div>
        ));
      }}
    </Query>
    <Link to="/">Back to Home Page</Link>
  </Layout>

);

export default Things
