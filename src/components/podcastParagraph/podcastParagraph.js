import React from "react"

import classes from "./podcastParagraph.module.css"

const  PodcastParagraph = ({children}) => {
  return <div className={classes.Podcast__paragraph_main}>{children}</div>
}

export default PodcastParagraph
