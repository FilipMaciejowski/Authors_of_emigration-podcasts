import React from "react"
import { Link } from "gatsby"

import SVGContainer from "../../SVGContainer/SVGContainer"
import classes from "../navigation/navigation.module.css"
import Context from "../../context"
import AboutProject from "../../../pages/aboutProject"

const Navigation = () => {
  return (
    <div className={classes.Navigation__main}>
      <div className={classes.Navigation__container}>
        <SVGContainer />
        <nav className={classes.Navigation__nav_main}>
          <ul className={classes.Navigation__list}>
            <li>
              <Link>podcasty</Link>
            </li>
            <li>
              <Link to="aboutProject">o projekcie</Link>
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
      </div>
    </div>
  )
}

export default Navigation

