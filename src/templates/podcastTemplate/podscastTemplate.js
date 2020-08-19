import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import ReactLoading from "react-loading"
import { Link, graphql } from "gatsby"
import { INLINES, BLOCKS} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Footer from "../../components/footer/footer"
import SVGContainer from "../../components/SVGContainer/SVGContainer"
import ObserverHelper from "../../components/observerHelper/observerHelper"
import classes from "./podcastTemplate.module.css"

export const myQuery = graphql`
  query($slug: String!) {
    PodcastContent: contentfulPodcastElement(slug: { eq: $slug }) {
      authorName
      episode
      body{
        json
      }
    }
  }
`
const Text = ({ children }) => (
  <p className={classes.Podcast__paragraph_main}>{children}</p>
)

const PodcastTemplate = ({ data, aboutProject, children }) => {

  const [ref, inView] = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.98
  })

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        if(!node.data.uri){
          return (
          <ReactLoading type="cubes" color="#919BA2" width='75px' height='35px' ></ReactLoading>
          )
        }
        if (node.data.uri.includes("https://widget.spreaker.com/") && node.data.uri) {
          return (
            <iframe
            src={node.data.uri}
            width="100%"
            height="200px"
            frameBorder="0"
          ></iframe>
          )
        } else if (
          (typeof node.data.uri === "string")
        ) {
          return <a className={classes.Paragraph_link} href={node.data.uri}>{node.content[0].value}</a>
        }
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text>{children}</Text>
      },
    },
  }

  return (
    <>
    <div ref={ref} className={classes.Template__observer_helper}></div>
      <div className={classes.Template__layout}>
        <header className={inView ? classes.Header__layout : [classes.Header__layout, classes.Scroll].join(" ")}>
          <Link to="/">
            <SVGContainer mainClass="Logo__template" newClass="Image_resize" />
          </Link>
        </header>
        <main className={classes.Template__text}>
          {aboutProject ? (
            children
          ) : (
            <div>
              <h1 className={classes.Podcast__paragraph_heading}>
                {data.PodcastContent.authorName} Odc.{" "}
                {data.PodcastContent.episode}
              </h1>

              {documentToReactComponents(
                data.PodcastContent.body.json,
                options
              )}
            </div>
          )}
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
export default PodcastTemplate
