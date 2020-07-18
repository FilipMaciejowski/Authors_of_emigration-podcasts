import React, {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import PodcastParagraph from "../../components/podcastParagraph/podcastParagraph"
import Footer from "../../components/footer/footer"
import SVGContainer from "../../components/SVGContainer/SVGContainer"
import classes from "./podcastTemplate.module.css"

const shortcodes = { PodcastParagraph }

const PodcastTemplate = ({data: {mdx}}) => {
  const [assignedClasses, setAssignedClasses] = useState([classes.Header__layout])
  const scrollHandler = () => {
    const windowHeight = window.scrollY
    if (windowHeight > 1) {
      setAssignedClasses([classes.Header__layout, classes.Scroll])
    } else {
      setAssignedClasses([classes.Header__layout])
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [])

  return (
    <>
      <div className={classes.Template__layout}>
        <header className={assignedClasses.join(" ")}>
          <Link to="/">
            <SVGContainer mainClass="Logo__template" newClass="Image_resize" />
          </Link>
        </header>
        <main className={classes.Template__text}>
          <h1 className={classes.Podcast__paragraph_heading}>
            {mdx.frontmatter.title} Odc. {mdx.frontmatter.episode}
          </h1>

          <MDXProvider components={shortcodes}>
            <MDXRenderer>
              {mdx.body}
            </MDXRenderer>
          </MDXProvider>
        </main>
      </div>
      <Footer
        data=""
        containerSize="Footer__container_narrow"
        narrow={true}
      ></Footer>
    </>
  )
}

export const pageQuery = graphql`
  query PodcastQuery($id: String!){
    mdx(id: {eq: $id}){
      id
      body
      frontmatter {
      title
      episode
      }
    }
  }
`


export default PodcastTemplate
