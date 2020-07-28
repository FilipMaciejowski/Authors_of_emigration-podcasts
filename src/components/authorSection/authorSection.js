import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import classes from "./authorSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"


const AuthorSection = ({author, children}) => {

  

  return (
    <div className={classes.AuthorSection__layout}>
      <h1>{author}</h1>
      <div className={classes.AuthorSection__layout_container}>
       
      </div>
    </div>
  )
}


 

export default AuthorSection