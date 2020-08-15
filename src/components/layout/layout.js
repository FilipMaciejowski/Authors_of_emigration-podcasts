import React, { useState, useEffect} from "react"
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

  

  const [contactModalIsOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [openList, setOpenList] = useState();
  const [EpisodesListOpen, setOpenEpisodesList] = useState(false);
  
  
  
    


  const openModalHandler = () => {
    setIsOpen(!contactModalIsOpen)
  }

  const closeModalHandler = () => {
    setIsOpen(false)
    setOpenEpisodesList(false)
  }

  const toggleNavHandler = () => {
    setIsShown(!isShown)
    setIsOpen(false)
  }

  const closeNavHandler = () => {
    setIsShown(false)
  }

  const openListHandler = () => {
    setOpenList(true)
    setIsOpen(false)
  }

  const closeListHandler = () => {
    setOpenList(false)
    setOpenEpisodesList(false)
  }

  const value = {
    contactModalIsOpen,
    isShown,
    openList,
    EpisodesListOpen,
    open: openModalHandler,
    close: closeModalHandler,
    toggleNav: toggleNavHandler,
    closeNav: closeNavHandler,
    openPodcastsList: openListHandler,
    closePodcastsList: closeListHandler,
    episodesListHandler: setOpenEpisodesList,
    podcastListsHandler: setOpenList,

  }


  return (
    <Context.Provider value={value}>
      <div className={classes.Layout__main} onClickCapture={closeListHandler}>
        <div>{children}</div>
        <NavigationMobile />
        <Navigation />
        <MainSection />
        <div className={classes.MainSection__ministry}>
          <img
            src={require("../../assets/images/logo_ministry_of_culture_alt.png")}
            alt="Ministerstwo_kultury_logo"
          />
        </div>
      </div>
      <Footer
        data={data.site.siteMetadata.developer}
        containerSize="Footer__container_normal"
      >
        © {new Date().getFullYear()}, Designed and developed by
      </Footer>
    </Context.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
