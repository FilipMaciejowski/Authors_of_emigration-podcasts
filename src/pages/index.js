import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout/layout"

import MainSection from "../components/mainSection/mainSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Tworcy Emigracji" />
      <MainSection />
    </Layout>
  )
}

export default IndexPage
