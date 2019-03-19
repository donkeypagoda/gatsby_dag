import React from "react"
import { Link } from "gatsby"
import StuffList from "../components/stuffList"
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


const Stuff = () => (
  <Layout>
    <StuffList stuffs={tempStuff} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Stuff
