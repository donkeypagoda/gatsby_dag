import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export const Maybes_QUERY = graphql`
    {
      dagGraphQL{
        nodeQuery(filter: {
          conditions: [{
            field: "type"
            value: "maybes"
          }]
        } ){
          entities {
            id: entityId
            __typename
            ... on drupalAPI_NodeMaybes{
              title
              body{
                value
              }
              fieldMaybeimage{
                entity{
                  url
                }

              }
            }
          }
        }
      }
    }
`

export default ({data}) => (
  <Layout>
      {data.dagGraphQL.nodeQuery.entities.map(maybe => (
        <div key={maybe.entityId}>
          <h1>{maybe.title}</h1>
          <div dangerouslySetInnerHTML={{__html:maybe.body.value}} />
          <img src={maybe.fieldMaybeimage.entity.url} alt={maybe.fieldMaybeimage.alt} />
        </div>
      ))}
    <Link to="/">Back to Home Page</Link>
  </Layout>
);
