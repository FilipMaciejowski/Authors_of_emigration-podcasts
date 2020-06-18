import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout/layout"

import Main from "../components/main/main"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Tworcy Emigracji" />
      <Main />
    </Layout>
  )
}

export default IndexPage
