import React from  "react"

import classes from "./SVGContainer.module.css"

const SVGContainer = ({scroll, imageClass, mainClass, onScrollClass}) => {
  return (
    <div className={scroll ? [classes[mainClass], classes[onScrollClass]].join(' ') : classes[mainClass]}>
      <img
        className={scroll ? [classes[imageClass], classes[onScrollClass]].join(' ') : classes[imageClass]}
        src={require("../../assets/images/Logo.svg")}
        alt="Tworcy_emigracji-Logo"
      />
    </div>
  )
}

export default SVGContainer