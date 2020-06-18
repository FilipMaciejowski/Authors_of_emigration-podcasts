import React from "react"
import { Link } from "gatsby"

import SVGContainer from "../../SVGContainer/SVGContainer"
import classes from "../navigation/navigation.module.css"
import Context from "../../context"

const Navigation = () => {
  return (
    <nav className={classes.Navigation__layout}>
      <SVGContainer />
      <ul className={classes.Navigation__list}>
        <li>
          <Link>podcasty</Link>
        </li>
        <li>
          <Link>o projekcie</Link>
        </li>
        <Context.Consumer>
          {context => (
            <li className={classes.Different}>
              <Link onClick={context.open}>kontakt</Link>
            </li>
          )}
        </Context.Consumer>
      </ul>
    </nav>
  )
}

export default Navigation