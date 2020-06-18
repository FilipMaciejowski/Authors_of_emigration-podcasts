import React from "react"

import podcastImage from "../../assets/images/MS_ChrobryTrans 3.png"
import classes from "./podcastElement.module.css"


const PodcastElement = ({date, title, description, status}) => {
  return (
    <div className={classes.PodcastElement__container}>
      <img src={podcastImage} className={classes.PodcastElement__image} />
      <div className={classes.PodcastElement__content}>
        <div className={classes.PodcastElement__content_top}>
          <p>{date}</p>
          <div className={status ? classes.New : null}>
           {status && status.toUpperCase()}
          </div>
        </div>
        <h1>Podcast o {title}</h1>
        <p className={classes.PodcastElement__content_description}>
          {description}
        </p>
      </div>
      <div className={classes.PodcastElement__content_listen}>
        <span>Posłuchaj</span>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <defs />
          <path fill="none" d="M0 0h24v24H0z" opacity=".1" />
          <path d="M12 1a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 00-9-9z" />
        </svg>
        <div></div>
      </div>
    </div>
  )
}

export default PodcastElement