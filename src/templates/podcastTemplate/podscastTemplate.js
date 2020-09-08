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
              title={node.data.authorName}
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
    let linkEpisode;
    if (slug.includes("1")) {
      nextSplitString.splice(-1, 1, "2")
      linkEpisode = (
       data.PodcastContent.unpublished ? null : 
        <Link className={classes.ToggleEpisode__link} to={`/podcasts/${nextSplitString.join("")}`}>
        <p className={classes.ToggleEpisode}>Następny odcinek <svg width="10" height="10" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9353 16.4852L4.03579 29.3843C3.21522 30.2052 1.88481 30.2052 1.06464 29.3843C0.244404 28.564 0.244404 27.2337 1.06464 26.4135L12.4787 14.9998L1.06497 3.58643C0.244736 2.76586 0.244736 1.43566 1.06497 0.615424C1.88521 -0.205141 3.21555 -0.205141 4.03612 0.615424L16.9357 13.5147C17.3458 13.9251 17.5506 14.4623 17.5506 14.9997C17.5506 15.5374 17.3454 16.075 16.9353 16.4852Z" fill="#767676"/>
    </svg></p>
      </Link>
      )
    } else if (slug.includes("2")) {
      nextSplitString.splice(-1, 1, "3")
      prevSplitString.splice(-1, 1, "1")
      linkEpisode = (
        <>
          <Link className={classes.ToggleEpisode__link} to={`/podcasts/${prevSplitString.join("")}`}>
            <p className={classes.PreviousEpisode}><svg width="10" height="10" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.06466 16.4852L13.9642 29.3843C14.7848 30.2052 16.1152 30.2052 16.9354 29.3843C17.7556 28.564 17.7556 27.2337 16.9354 26.4135L5.52125 14.9998L16.935 3.58643C17.7553 2.76586 17.7553 1.43566 16.935 0.615424C16.1148 -0.205141 14.7845 -0.205141 13.9639 0.615424L1.06433 13.5147C0.654214 13.9251 0.449387 14.4623 0.449387 14.9997C0.449387 15.5374 0.654613 16.075 1.06466 16.4852Z" fill="#767676"/>
    </svg> Poprzedni odcinek</p> 
          </Link>
          <Link className={classes.ToggleEpisode__link} to={`/podcasts/${nextSplitString.join("")}`}>
            <p className={classes.NextEpisode}>Następny odcinek <svg width="10" height="10" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9353 16.4852L4.03579 29.3843C3.21522 30.2052 1.88481 30.2052 1.06464 29.3843C0.244404 28.564 0.244404 27.2337 1.06464 26.4135L12.4787 14.9998L1.06497 3.58643C0.244736 2.76586 0.244736 1.43566 1.06497 0.615424C1.88521 -0.205141 3.21555 -0.205141 4.03612 0.615424L16.9357 13.5147C17.3458 13.9251 17.5506 14.4623 17.5506 14.9997C17.5506 15.5374 17.3454 16.075 16.9353 16.4852Z" fill="#767676"/>
    </svg></p>
          </Link>{
          }
        </>

      )
    } else if (slug.includes("3")) {
      prevSplitString.splice(-1, 1, "2")
      linkEpisode = (
        
          <Link className={classes.ToggleEpisode__link} to={`/podcasts/${prevSplitString.join("")}`}>
            <p className={classes.PreviousEpisode}> <svg width="10" height="10" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.06466 16.4852L13.9642 29.3843C14.7848 30.2052 16.1152 30.2052 16.9354 29.3843C17.7556 28.564 17.7556 27.2337 16.9354 26.4135L5.52125 14.9998L16.935 3.58643C17.7553 2.76586 17.7553 1.43566 16.935 0.615424C16.1148 -0.205141 14.7845 -0.205141 13.9639 0.615424L1.06433 13.5147C0.654214 13.9251 0.449387 14.4623 0.449387 14.9997C0.449387 15.5374 0.654613 16.075 1.06466 16.4852Z" fill="#767676"/>
    </svg> Poprzedni odcinek</p>
          </Link>
      )
    }
    return linkEpisode
  }

  return (
    <>
    <Head title={aboutProject ? "O projekcie" : `${data.PodcastContent.authorName} ${data.PodcastContent.episode}`} />
      <div ref={ref} className={classes.Template__observer_helper}></div>
      <div className={classes.Template__layout}>
        <header
          className={
            inView
              ? classes.Header__layout
              : [classes.Header__layout, classes.Scroll].join(" ")
          }
        >
          <div className={classes.Header__container}>
            <Link className={classes.Home_link} to="/mainPage">
              <p className={classes.Home}>Strona główna </p>
            </Link>
            <Link className={classes.Home_link} to="/mainPage">
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
