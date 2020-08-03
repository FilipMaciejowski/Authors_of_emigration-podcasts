import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
/* import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx" */

import Footer from "../../components/footer/footer"
import SVGContainer from "../../components/SVGContainer/SVGContainer"
import classes from "./podcastTemplate.module.css"

export const myQuery = graphql`
  query($slug: String!) {
    PodcastContent: contentfulPodcastElement(slug: { eq: $slug }) {
      title
      episode
      body {
        json
      }
    }
  }
`

const PodcastTemplate = ({ data, aboutProject, children }) => {
  const [assignedClasses, setAssignedClasses] = useState([
    classes.Header__layout,
  ])
  const scrollHandler = () => {
    const windowHeight = window.scrollY
    if (windowHeight > 1) {
      setAssignedClasses([classes.Header__layout, classes.Scroll])
    } else {
      setAssignedClasses([classes.Header__layout])
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
  }, [])

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        if (node.data.uri.includes("https://widget.spreaker.com/")) {
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
    },
  }

  return (
    <>
      <div className={classes.Template__layout}>
        <header className={assignedClasses.join(" ")}>
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
                {data.PodcastContent.title} Odc. {data.PodcastContent.episode}
              </h1>
              <p className={classes.Podcast__paragraph_main}>
                {documentToReactComponents(
                  data.PodcastContent.body.json,
                  options
                )}
              </p>

              {/* <MDXProvider
                components={{
                  p: props => (
                    <p
                      {...props}
                      style={{
                        fontSize: "calc(.85rem - 15%)",
                        marginBottom: "1rem",
                      }}
                    />
                  ),
                  a: props => (
                    <a {...props} style={{fontSize: "calc(.85rem - 15%)", textDecoration: "none", fontWeight: "600", color: "var(--main_black"}} />
                  ),
                }}
              >
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>  */}
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

//  export const myQuery = graphql`
//    query PodcastQuery($id: String!) {
//      mdx(id: { eq: $id }) {
//        id
//        body
//        frontmatter {
//          title
//          episode
//        }
//      }
//    }
//  `

export default PodcastTemplate
