import React from "react"
import { Link } from "gatsby"

import Footer from "../footer/footer"
import SVGContainer from "../SVGContainer/SVGContainer"
import classes from "./podcastTemplate.module.css"

const PodcastTemplate = ({children}) => {
  return (
    <div className={classes.Template__layout}>
      <header className={classes.Header__layout}>
        <Link to="/">
          <SVGContainer />
        </Link>
      </header>
      <main className={classes.Template__text}>{children}</main>
      <Footer data="">
      </Footer>
    </div>
  )
}

export default PodcastTemplate
