import React from  "react"

import classes from "./SVGContainer.module.css"

const SVGContainer = ({scroll, newClass}) => {
  return (
    <div className={scroll ? classes.Resize : classes.Logo}>
      <img
        className={classes[newClass]}
        src={require("../../assets/images/Logo.svg")}
        alt="Tworcy_emigracji-Logo"
      />
    </div>
  )
}

export default SVGContainer