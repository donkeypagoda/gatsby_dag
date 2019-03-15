import React from "react"
import { Link } from "gatsby"
import StuffList from "../components/stuffList"
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import { graphql } from 'gatsby';

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

export const query = graphql`
  query {
    nodeQuery{
      entities{
        entityId
      }
    }
  }

`;

// const apolloSideQuery = gql`
//   {
//     dog(breed: "frise") {
//       breed
//       displayImage
//     }
//   }
// `;

const Stuff = ({data}) => (
  <Layout>
    {data.entites.entityId}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Stuff

// <Query query={ap}>
//   {({ data, loading }) => {
//     if (loading) {
//       return <span>Loading...</span>;
//     }
//     else if (!loading){
//       console.log({data})
//       return (
//
//           <div>stuff</div>
//
//       )
//     }
//     }
//   }
// </Query>
