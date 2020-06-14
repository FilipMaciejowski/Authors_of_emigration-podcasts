import React from "react"
import { Link } from "gatsby"

import SVGContainer from "../../SVGContainer/SVGContainer"

import classes from "../navigation/navigation.module.css"

const Navigation = () => {
  return (
    <nav className={classes.Navigation__layout}>
      <SVGContainer />
      <ul className={classes.Navigation__list}>
        <li>
          <Link>podcasty</Link>
        </li>
        <li>
          <Link>o mnie</Link>
        </li>
        <li>
          <Link>kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation