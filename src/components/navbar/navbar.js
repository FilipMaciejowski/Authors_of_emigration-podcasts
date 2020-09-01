import React from "react"
import { Link } from "gatsby"

import Context from "../context"
import PodcastsList from "../podcastsList/podcastsList"
import Contact from "../contact/contact"

import classes from "./navbar.module.css"


const Navbar = () => {

  return (
    <Context.Consumer>
      {context => (
        <>
          <ul className={classes.Navigation__list}>
<<<<<<< HEAD
              <button onKeyDown={context.openPodcastsModal} onClick={context.openPodcastsModal} className={classes.Navigation__list_link}>Podcasty {context.podcastsModalIsOpen ? (
=======
            <li >
              <Link onClick={context.openPodcastsModal} onKeyDown={context.openPodcastsModal} className={classes.Navigation__list_link}>Podcasty</Link>
              {context.podcastsModalIsOpen ? (
>>>>>>> 2fbc646c147352422518d6a8f2efb11f29d02a26
                <PodcastsList
                  mobile={false}
                />)
              : null}</button>
            <li>
              <Link
                className={classes.Navigation__list_link}
                to="/aboutProject"
              >
                <span>O projekcie</span>
              </Link>
            </li>
            <li
              className={classes.Different}
<<<<<<< HEAD
            >
              <button className={classes.Navigation__list_link} 
              onKeyDown={event => context.openContactModal(event)}
              onClick={event => context.openContactModal(event)}>Kontakt</button>
=======
              
            >
              <Link onClick={event => context.openContactModal(event)} onKeyDown={event => context.openContactModal(event)} className={classes.Navigation__list_link}>Kontakt</Link>
>>>>>>> 2fbc646c147352422518d6a8f2efb11f29d02a26
              {context.contactModalIsOpen ? <Contact mobile={false} /> : null}
            </li>
          </ul>
        </>
      )}
    </Context.Consumer>
  )
}

export default Navbar
