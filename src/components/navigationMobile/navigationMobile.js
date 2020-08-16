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
              <a onClick={context.openPodcastsModal}>Podcasty</a>
            </li>
            {context.podcastsModalIsOpen ? <PodcastsList mobile={true}/> : null}
            <li>
              <Link to="/aboutProject">O projekcie</Link>
            </li>
            <li>
              <a onClick={context.openContactModal}>Kontakt</a>
            </li>
            
              {context.contactModalIsOpen ? <Contact mobile={true} /> : null}
          </ul>
        </nav>
      )}
    </Context.Consumer>
  )
}

export default NavigationMobile