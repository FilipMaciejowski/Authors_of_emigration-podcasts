import React from "react"
import { Link } from "gatsby"


import classes from "./podcastElement.module.css"

const PodcastElement = ({
  date,
  title,
  image,
  description,
  episode,
  page,
  unpublished,
  unpublished_episode,
}) => {

  
  let unpublishedContent
  if (unpublished) {
    unpublishedContent = (
      <div className={classes.PodcastElement_unpublished}>
        <p className={classes.Paragraph__main_unpublished}>
          {unpublished_episode} odcinek wkrótce!
        </p>
        {new Array(20)
          .fill(`${unpublished_episode} odcinek wkrótce!`)
          .map((textEl, idx) => (
            <span key={idx} className={classes.Animated__paragraph_text}>
              {textEl}
            </span>
          ))}
      </div>
    )
  } else {
    unpublishedContent = (
      <div>
        <p className={classes.PodcastElement__content_description}
        >
          <div dangerouslySetInnerHTML={{__html: description}}></div>
        </p>
        <div className={classes.PodcastElement__content_listen}>
          <div className={classes.Listen__button}>
            <Link to={`/podcasts/${page}`}>
              <p>Posłuchaj</p>
              <span className={classes.Dash}> - </span>
              <svg
                className={classes.Wire}
                width="46"
                height="21"
                viewBox="0 0 40 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.2524C7.30597 12.2524 6.34227 11.8653 8.5 5.99999C10.6577 0.134723 13.8553 0.0648427 18 9.49999C22.1447 18.9351 24.3867 -0.44566 29.6053 3.07266C34.8238 6.59098 26.0527 20.4123 45 18.8823"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 .5 20 20"
                className={classes.Headphones}
              >
                <defs />
                <path fill="none" d="M0 0h24v24H0z" opacity="none" />
                <path d="M12 1a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 00-9-9z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={classes.PodcastElement__main}>
        <div className={classes.PodcastElement__container}>
          <div className={classes.PodcastElement__image_container}>
            <div className={classes.Image_wrapper}>
              <img src={image}></img>
            </div>
          </div>
          <div className={classes.PodcastElement__content}>
            <div className={classes.PodcastElement__content_top}>
              <p>{date}</p>
            </div>
            <div
              className={[classes.Podcast__content_title, classes.Small].join(
                " "
              )}
            >
              {unpublished ? (
                <h5>{title}</h5>
              ) : (
                <h5>
                  <Link to={`/podcasts/${page}`}>{title}</Link>
                </h5>
              )}
              <div>
                <h5>odc. {episode}</h5>
              </div>
            </div>
            {unpublishedContent}
          </div>
        </div>
      </div>
    </>
  )
}

export default PodcastElement
