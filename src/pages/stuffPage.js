import React from "react"
import { Link } from "gatsby"
import StuffList from "../components/stuffList"
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

import Layout from "../components/layout"

const tempStuff = [
  {
    id: 1,
    title: "some stuff"
  },{
    id: 2,
    title: "some more stuff"
  },{
    id: 3,
    title: "some other more stuff"
  }
]

const query = gql`
  {
    nodeQuery{
      entities{
        entityId
      }
    }
  }
`;

const withQuery = graphql(query, {
  props: ({ data: { nodeQuery } }) => ({
    nodes: nodeQuery
  }),
});

const Stuff = () => (
  <Layout>
    <StuffList stuffs={withQuery} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Stuff
