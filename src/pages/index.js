import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout/layout"

import PodcastsSection from "../components/podcastsSection/podcastsSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Tworcy Emigracji" />
      <PodcastsSection />
    </Layout>
  )
}

export default IndexPage
