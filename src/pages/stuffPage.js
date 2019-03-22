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
          nodeQuery (
            sort: [{
          		field: "changed"
          		direction: DESC
        		}]){
             entities {
              ...on NodeStuff {
                id:entityId
                title
                body {
                  value
                }
                fieldStuffImage{
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
        if (loading) return <p>Firing up the overthrusters...</p>;
        if (error) return <p>I no worky! Stuff borked!</p>;
        if (data) {
          console.log(data)
          return data.nodeQuery.entities.filter( node => {
            if (node.__typename === "NodeThings") {
              return false;
            }
            else {
              return true;
            }
          }).map( stuff  => (
            <div key={stuff.id}>
              <div>
                <h1>{stuff.title}</h1>
              </div>
                <div dangerouslySetInnerHTML={{__html: stuff.body.value}} />
              <div>
                <img alt={stuff.fieldStuffImage.alt} src={stuff.fieldStuffImage.derivative.url} />
              </div>
            </div>
          ));
        }
      }}
    </Query>
    <Link to="/">Back to Home Page</Link>
  </Layout>

);

export default Stuff
