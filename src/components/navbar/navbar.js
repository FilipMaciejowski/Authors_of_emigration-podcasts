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
            <li onClick={context.openPodcastsModal}>
              <a className={classes.Navigation__list_link}>Podcasty</a>
              {context.podcastsModalIsOpen ? (
                <PodcastsList
                  openModal={context.openModal}
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
              onClick={event => context.openContactModal(event)}
            >
              <a className={classes.Navigation__list_link}>Kontakt</a>
              {context.contactModalIsOpen ? <Contact mobile={false} /> : null}
            </li>
          </ul>
        </>
      )}
    </Context.Consumer>
  )
}

export default Navbar
