import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Stuff = () => (

  <Layout>
    <Query
      query={gql`
        {
          nodeQuery {
             entities {
              ...on NodeStuff {
                id:entityId
                title
              }
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
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

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

export default Stuff
