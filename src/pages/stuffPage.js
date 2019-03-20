import React from "react"
import { Link } from "gatsby"
// import StuffList from "../components/stuffList"
import Layout from "../components/layout"

// const tempStuff = [
//   {
//     id: 1,
//     title: "some stuff"
//   },{
//     id: 2,
//     title: "some more stuff"
//   },{
//     id: 3,
//     title: "some other more stuff"
//   }
// ]

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

//
// client.query({
//   query: gql`
//             {
//           nodeQuery{
//             entities{
//               entityId
//             }
//           }
//         }
//         `
//       }).then(result => console.log(result));


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

//
// const Stuff = () => (
//   <Layout>
//   <div>
//   {tempStuff.map(stuff => (
//     <div key={stuff.id}>
//       <div>{stuff.title}</div>
//     </div>
//   ))}
//   </div>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// );

export default Stuff
