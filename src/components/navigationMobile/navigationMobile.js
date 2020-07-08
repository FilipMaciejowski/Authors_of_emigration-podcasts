import React from "react";

import { Link } from "gatsby";
import classes from "./navigationMobile.module.css"
import Context from "../context.js"
import Contact from "../contact/contact"
import PodcastsList from "../podcastsList/podcastsList"


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
              <Link onClick={context.openPodcastsList}>Podcasty</Link>
            </li>
            {context.openList ? <PodcastsList mobile={true}/> : null}
            <li>
              <Link to="aboutProject">O projekcie</Link>
            </li>
            <li>
              <Link onClick={context.open}>Kontakt</Link>
            </li>
            
              {context.isOpen ? <Contact mobile={true} /> : null}
            
          </ul>
        </nav>
      )}
    </Context.Consumer>
  )
}

export default NavigationMobile