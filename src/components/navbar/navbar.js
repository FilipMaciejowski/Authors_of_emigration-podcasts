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
            <li >
              <Link onClick={context.openPodcastsModal} onKeyDown={context.openPodcastsModal} className={classes.Navigation__list_link}>Podcasty</Link>
              {context.podcastsModalIsOpen ? (
                <PodcastsList
                  mobile={false}
                />)
              : null}
            </li>
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
              
            >
              <Link onClick={event => context.openContactModal(event)} onKeyDown={event => context.openContactModal(event)} className={classes.Navigation__list_link}>Kontakt</Link>
              {context.contactModalIsOpen ? <Contact mobile={false} /> : null}
            </li>
          </ul>
        </>
      )}
    </Context.Consumer>
  )
}

export default Navbar
