import React from "react"

import classes from "./authorSection.module.css"



const AuthorSection = ({author, quote, children}) => {
  return (
    <div className={classes.AuthorSection__layout}>
      <div className={classes.AuthorSection__header_container}>
      <h1>{author.toUpperCase()}</h1>
      <div className={classes.Contentful__wrapper} dangerouslySetInnerHTML={{__html: quote }}></div>

      </div>
      
      <div className={classes.AuthorSection__layout_container}>
       {children}
      </div>
    </div>
  )
}


 

export default AuthorSection