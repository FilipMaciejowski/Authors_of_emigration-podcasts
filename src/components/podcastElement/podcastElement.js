import React from "react"
import { Link } from "gatsby"

import classes from "./podcastElement.module.css"




const PodcastElement = ({
  date,
  title,
  author,
  description,
  episode,
  page,
  unpublished,
}) => {
  return (
    <>
      {unpublished ? (
        <div className={classes.PodcastElement__main_unpublished}>
          <p className={classes.Paragraph__main}>
         <img src={require('../../assets/images/Logo_grey.svg')}></img></p>
          <p className={classes.Animated__paragraph}>
            {" "}
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
            <span className={classes.Animated__paragraph_text}>
              Nowy odcinek wkrótce!
            </span>
          </p>
        </div>
      ) : (
        <div className={classes.PodcastElement__main}>
          <span>Comming soon!</span>
          <div className={classes.PodcastElement__container}>
            <div
              className={
                unpublished
                  ? [
                      classes.PodcastElement__image_container,
                      classes[`${author}`],
                      classes.Unpublished,
                    ].join(" ")
                  : [
                      classes.PodcastElement__image_container,
                      classes[`${author}`],
                    ].join(" ")
              }
            ></div>
            <div
              className={
                unpublished
                  ? [classes.PodcastElement__content, classes.Unpublished].join(
                      " "
                    )
                  : classes.PodcastElement__content
              }
            >
              <div className={classes.PodcastElement__content_top}>
                <p>{date}</p>
              </div>

              <div className={classes.Podcast__content_title}>
                <Link to={`/${page}`}>
                  <h5>{title}</h5>
                </Link>
                <div>
                  <h5>odc. {episode}</h5>
                </div>
              </div>

              <p className={classes.PodcastElement__content_description}>
                {description}
              </p>

              <div className={classes.PodcastElement__content_listen}>
                <div>
                  <p>Posłuchaj</p>
                  <div className={classes.Arrow__container}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="8"
                      fill="none"
                    >
                      <defs />
                      <path
                        fill="#000"
                        d="M38.354 4.354a.5.5 0 000-.708L35.172.464a.5.5 0 10-.707.708L37.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h38v-1H0v1z"
                      />
                    </svg>
                  </div>
                </div>
                <Link to={`/${page}`}>
                  <div className={classes.Headphones__container}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 0 20 20">
                      <defs />
                      <path fill="none" d="M0 0h24v24H0z" opacity="none" />
                      <path d="M12 1a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PodcastElement