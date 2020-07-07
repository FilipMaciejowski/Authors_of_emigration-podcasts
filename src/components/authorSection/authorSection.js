import React from "react"

import classes from "./authorSection.module.css"

const AuthorSection = ({author, children}) => {
  return (
    <div className={classes.AuthorSection__layout}>
      <h1>{author}</h1>
      <div className={classes.AuthorSection__layout_container}>{children}</div>
    </div>
  )
}

export default AuthorSection