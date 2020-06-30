import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Footer from "../footer/footer"
import classes from "./layout.module.css"
import Context from "../context"
import MainSection from "../mainSection/mainSection"
import Navigation from "../navigation/navigation"
import NavigationMobile from "../navigationMobile/navigationMobile"



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
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [openList, setOpenList] = useState(false);
  

  const openModalHandler = (event) => {
    event.stopPropagation()
    setIsOpen(true)
    setOpenList(false)
  }

  const closeModalHandler = () => {
    setIsOpen(false)
  }

  const toggleNavHandler = () => {
    setIsShown(!isShown)
    setIsOpen(false)
  }

  const openListHandler = () => {
    setOpenList(true)
    setIsOpen(false)
  }

  const closeListHandler = () => {
    setOpenList(false)
  }


  return (
    <Context.Provider
      value={{
        isOpen,
        isShown,
        openList,
        open: openModalHandler,
        close: closeModalHandler,
        toggleNav: toggleNavHandler,
        openPodcastsList: openListHandler,
        closePodcastsList: closeListHandler
      }}
    >
      {/* <HamburgerMenu /> */}
      <NavigationMobile />
      <div className={classes.Layout__main} onClickCapture={closeListHandler}>
        <div>{children}</div>
        <Navigation />
        <MainSection />
      </div>
      <div className={classes.MainSection__ministry}>
        <img
          src={require("../../assets/images/logo_ministry_of_culture_alt.png")}
          alt="Ministerstwo_kultury_logo"
        />
      </div>
      <Footer
        data={data.site.siteMetadata.developer}
        containerSize="Footer__container_normal"
      >
        © {new Date().getFullYear()}, Designed and built by
      </Footer>
    </Context.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
