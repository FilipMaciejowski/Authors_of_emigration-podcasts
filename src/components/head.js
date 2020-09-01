import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({title}) => {

const data = useStaticQuery(graphql`
query {
    site {
      siteMetadata{
        title
      }
    }
  }
`)
    return (
        <Helmet><title>{ `${data.site.siteMetadata.title} | ${title}`}</title>
        <link rel="canonical" href="https://…"/>
        </Helmet> 
    )
}

export default Head