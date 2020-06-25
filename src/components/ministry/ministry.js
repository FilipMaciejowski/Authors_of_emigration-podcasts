import React from "react"

import classes from "./ministry.module.css"

const Ministry = () => {
  return (
    <div className={classes.Ministry__layout}>
      <div></div>
      <img
        src={require("../../assets/images/logo_ministry_of_culture.png")}
        alt="Ministerstwo_kultury_logo"
      />
      <div></div>
    </div>
  )
}

export default Ministry