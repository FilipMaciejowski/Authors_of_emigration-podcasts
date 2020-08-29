import React from "react"
import { useInView } from "react-intersection-observer"
import ReactLoading from "react-loading"
import { Link, graphql } from "gatsby"
import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SocialMediaButtons from "../../components/socialMediaButtons/socialMediaButtons"

import Footer from "../../components/footer/footer"
import SVGContainer from "../../components/SVGContainer/SVGContainer"
import Head from "../../components/head"

import classes from "./podcastTemplate.module.css"

export const myQuery = graphql`
  query($slug: String!) {
    PodcastContent: contentfulPodcastElement(slug: { eq: $slug }) {
      slug
      authorName
      unpublished
      unpublishedEpisode
      episode
      body {
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
    threshold: 0.98,
  })

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        if (!node.data.uri) {
          return (
            <ReactLoading
              type="cubes"
              color="#919BA2"
              width="75px"
              height="35px"
            ></ReactLoading>
          )
        }
        if (
          node.data.uri.includes("https://widget.spreaker.com/") &&
          node.data.uri
        ) {
          return (
            <iframe
              src={node.data.uri}
              width="100%"
              height="200px"
              frameBorder="0"
            ></iframe>
          )
        } else if (typeof node.data.uri === "string") {
          return (
            <a className={classes.Paragraph_link} href={node.data.uri}>
              {node.content[0].value}
            </a>
          )
        }
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text>{children}</Text>
      },
    },
  }

  const nextEpisodeHandler = () => {
    const slug = data.PodcastContent.slug
    const nextSplitString = slug.split("")
    const prevSplitString = slug.split("")
    let linkEpisode
    if (slug.includes("1")) {
      nextSplitString.splice(-1, 1, "2")
      linkEpisode = (
       data.PodcastContent.unpublished ? null : 
        <Link className={classes.ToggleEpisode__link} to={`/podcasts/${nextSplitString.join("")}`}>
        <p className={classes.ToggleEpisode}>Następny odcinek</p>
      </Link>
      )
    } else if (slug.includes("2")) {
      nextSplitString.splice(-1, 1, "3")
      prevSplitString.splice(-1, 1, "1")
      linkEpisode = (
        <>
          <Link className={classes.ToggleEpisode__link} to={`/podcasts/${prevSplitString.join("")}`}>
            <p className={classes.PreviousEpisode}>Poprzedni odcinek</p>
          </Link>
          <Link className={classes.ToggleEpisode__link} to={`/podcasts/${nextSplitString.join("")}`}>
            <p className={classes.NextEpisode}>Następny odcinek</p>
          </Link>{
          }
        </>

      )
    } else if (slug.includes("3")) {
      prevSplitString.splice(-1, 1, "2")
      linkEpisode = (
        
          <Link className={classes.ToggleEpisode__link} to={`/podcasts/${prevSplitString.join("")}`}>
            <p className={classes.PreviousEpisode}>Poprzedni odcinek</p>
          </Link>
        
      )
    }
    return linkEpisode
  }

  return (
    <>
    <Head title={aboutProject ? "O projekcie" : `${data.PodcastContent.authorNamedata.PodcastContent.episode}`} />
      <div ref={ref} className={classes.Template__observer_helper}></div>
      <div className={classes.Template__layout}>
        <header
          className={
            inView
              ? classes.Header__layout
              : [classes.Header__layout, classes.Scroll].join(" ")
          }
        >
          <div className={classes.Header__conintainer}>
            <Link className={classes.Home_link} to="/mainPage">
              <p className={classes.Home}>Strona główna </p>
            </Link>
            <Link to="/mainPage">
              <SVGContainer
                mainClass="Logo__template"
                newClass="Image_resize"
              />
            </Link>
          </div>
        </header>
        {aboutProject ? null : (
          <SocialMediaButtons
            author={data.PodcastContent.authorName}
            episode={data.PodcastContent.episode}
            slug={data.PodcastContent.slug}
          />
        )}
        <main className={classes.Template__text}>
          {aboutProject ? (
            children
          ) : data.PodcastContent.unpublished ? 
          <p className={classes.Unpublished}>{data.PodcastContent.unpublishedEpisode} odcinek wkrótce!!!</p> : (
            <div>
              <h1 className={classes.Podcast__paragraph_heading}>
                {data.PodcastContent.authorName} Odc.{" "}
                {data.PodcastContent.episode}
              </h1>
              {documentToReactComponents(
                data.PodcastContent.body.json,
                options
              )}
              <div className={classes.Link__episode_container}>
              {nextEpisodeHandler()}
              </div>
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
