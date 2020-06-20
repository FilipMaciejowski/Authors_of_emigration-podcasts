import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout/layout"
import DecorationLines from "../components/decorationLines/decorationLines"

import PodcastsSection from "../components/podcastsSection/podcastsSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Tworcy Emigracji" />
      <DecorationLines />
      <PodcastsSection />
    </Layout>
  )
}

export default IndexPage
