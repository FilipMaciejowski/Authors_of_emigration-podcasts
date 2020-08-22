import React, {useState, useEffect} from "react"
import SEO from "../components/seo"

import Layout from "../components/layout/layout"
import Loader from "../components/loader/loader"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => setIsLoading(false), 3000
    )})

  return (
    <>
    {isLoading ? <Loader/> : <Layout>
      <SEO title="Tworcy Emigracji" />
    </Layout>}
    </>
  )
}

export default IndexPage
