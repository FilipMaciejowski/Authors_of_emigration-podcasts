import React, {useState, useEffect} from "react"
import SEO from "../components/seo"

import Layout from "../components/layout/layout"
import Loader from "../components/loader/loader"
import Head from "../components/head"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => setIsLoading(false), 2500
    )})

  return (
    <>
    
    {isLoading ? <Loader/> : <Layout>
      <Head title="Strona Główna"/>
      <SEO title="Twórcy emigracji" />
    </Layout>}
    </>
  )
}

export default IndexPage
