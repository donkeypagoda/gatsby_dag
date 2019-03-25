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
          nodeQuery (
            sort: [{
          		field: "created"
          		direction: DESC
        		}]
          ){
             entities {
              entityType:__typename
              ...on NodeThings {
                id:entityId
                title
                body {
                  value
                }
                fieldThingsImage{
                  alt
                  derivative (style: LARGE){
                    width
                    height
                    url
                  }
                }
              }
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Kicking out the jamz...</p>;
        if (error) return <p>Uh oh, something marshed my hello...</p>;
        if (data) {
          console.log(data)
          return data.nodeQuery.entities.filter( node => {
            if (node.__typename === "NodeStuff") {
              return false;
            }
            else {
              return true;
            }
          }).map( thing  => (
            <div key={thing.id}>
              <div>
                <h1>{thing.title}</h1>
              </div>
                <div dangerouslySetInnerHTML={{__html: thing.body.value}} />
              <div>
                <img alt={thing.fieldThingsImage.alt} src={thing.fieldThingsImage.derivative.url} />
              </div>
            </div>
          ));
        }
      }}
    </Query>
    <Link to="/">Back to Home Page</Link>
  </Layout>

);

export default Things
