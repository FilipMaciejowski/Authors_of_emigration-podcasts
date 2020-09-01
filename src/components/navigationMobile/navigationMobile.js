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
<<<<<<< HEAD
            <li>
            <button onClick={context.openPodcastsModal} className={classes.Button__PodcastsModal_mobile}>Podcasty{context.podcastsModalIsOpen ? <PodcastsList mobile={true} /> : null}</button>
=======
            <li  >
              <button onClick={context.openPodcastsModal} onKeyDown={context.openPodcastsModal} className={classes.Button__PodcastsModal_mobile}>Podcasty</button>
              {context.podcastsModalIsOpen ? <PodcastsList mobile={true}/> : null}
>>>>>>> 2fbc646c147352422518d6a8f2efb11f29d02a26
            </li>
            <li>
            <Link to="/aboutProject">O projekcie</Link>
            </li>
            <li>
<<<<<<< HEAD
            <button className={classes.Button__PodcastsModal_mobile} onClick={context.openContactModal} onKeyDown={context.openContactModal}>Kontakt{context.contactModalIsOpen ? <Contact mobile={true} /> : null}</button>
=======
              <button className={classes.Button__PodcastsModal_mobile} onClick={context.openContactModal} onKeyDown={context.openContactModal}>Kontakt</button>
>>>>>>> 2fbc646c147352422518d6a8f2efb11f29d02a26
            </li>
          </ul>
        </nav>
      )}
    </Context.Consumer>
  )
}

export default NavigationMobile