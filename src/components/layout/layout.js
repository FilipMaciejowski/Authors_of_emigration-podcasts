import React, { useState, useEffect } from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../footer/footer"
import classes from "./layout.module.css"
import Context from "../context"
import MainSection from "../mainSection/mainSection"
import Navigation from "../navigation/navigation"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          developer
        }
      }
    }
  `)

 
  

  const [contactModalIsOpen, setContactModalIsOpen] = useState(false)
  const [podcastsModalIsOpen, setPodcastsModalIsOpen] = useState(false)
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  const openContactModalHandler = () => {
    setContactModalIsOpen(!contactModalIsOpen)
    setPodcastsModalIsOpen(false)
  }

  const closeContactModalHandler = () => {
    setContactModalIsOpen(false)
  }

  const openPodcastsModalHandler = () => {
    setPodcastsModalIsOpen(true)
    setContactModalIsOpen(false)
  }

  const closePodcastsModalHandler = () => {
    setPodcastsModalIsOpen(false)
  }

  const toggleMobileNavHandler = () => {
    setMobileNavIsOpen(!mobileNavIsOpen)
  }

  const closeMobileNavHandler = () => {
    setMobileNavIsOpen(false)
  }

  const value = {
    contactModalIsOpen,
    podcastsModalIsOpen,
    mobileNavIsOpen,
    openContactModal: openContactModalHandler,
    closeContactModal: closeContactModalHandler,
    openPodcastsModal: openPodcastsModalHandler,
    closePodcastsModal: closePodcastsModalHandler,
    toggleMobileNav: toggleMobileNavHandler,
    closeMobileNav: closeMobileNavHandler,
    openModal: setPodcastsModalIsOpen,
  }

  return (
    <Context.Provider value={value}>
      <div
        className={classes.Layout__main}
        onClickCapture={closePodcastsModalHandler}
      >
        <div>{children}</div>
        <Navigation />
        <MainSection />
        <div className={classes.MainSection__ministry}>
          <img
            src={require("../../assets/images/logo_ministry_of_culture_alt.png")}
            alt="Ministerstwo_kultury_logo"
          />
        </div>
      </div>
      <Footer containerSize="Footer__container_normal">
        © {new Date().getFullYear()}, Designed and developed by{" "}
        <a
          href="mailto: filip.maciejowski@gmail.com"
          className={classes.Developer}
        >
          {data.site.siteMetadata.developer}
        </a>
      </Footer>
    </Context.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
