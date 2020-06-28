import React from "react";

import { Link } from "gatsby";
import classes from "./navigationMobile.module.css"
import Context from "../context.js"
import Contact from "../contact/contact"


const NavigationMobile = () => {
  return (
    <Context.Consumer>
      {context => (
        <nav
          className={
            context.isShown
              ? classes.NavigationMobile__layout
              : classes.NavigationMobile__layout_close
          }
        >
          <ul>
            <li>
              <Link>Podcasty</Link>
            </li>
            <li>
              <Link to="aboutProject">O projekcie</Link>
            </li>
            <li>
              <Link onClick={context.open}>Kontakt</Link>
            </li>
            <div className={classes.Modal__contact}>
              {context.isOpen ? <Contact mobile={true}/> : null}
            </div>
          </ul>
        </nav>
      )}
    </Context.Consumer>
  )
}

export default NavigationMobile