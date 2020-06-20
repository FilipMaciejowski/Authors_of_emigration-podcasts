import React from "react"

import classes from "./decorationLines.module.css"

const DecorationLines = () => {
  return (
   
      <section className={classes.Lines}>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
      </section>

  )
}

export default DecorationLines