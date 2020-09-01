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
            context.mobileNavIsOpen
              ? classes.NavigationMobile__layout
              : classes.NavigationMobile__layout_close
          }
        >
          <ul>
            <li>
            <button onClick={context.openPodcastsModal} className={classes.Button__PodcastsModal_mobile}>Podcasty{context.podcastsModalIsOpen ? <PodcastsList mobile={true} /> : null}</button>
            </li>
            <li>
            <Link to="/aboutProject">O projekcie</Link>
            </li>
            <li>
            <button className={classes.Button__PodcastsModal_mobile} onClick={context.openContactModal} onKeyDown={context.openContactModal}>Kontakt{context.contactModalIsOpen ? <Contact mobile={true} /> : null}</button>
            </li>
          </ul>
        </nav>
      )}
    </Context.Consumer>
  )
}

export default NavigationMobile