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
  const [isOpen, setIsOpen] = useState(false);
  
  const openModalHandler = () => {
    setIsOpen(!isOpen)
  }

  const closeModalHandler = () => {
    setIsOpen(false)
  }

  return (
    <Context.Provider
      value={{
        isOpen,
        open: openModalHandler,
        close: closeModalHandler,
      }}
    >
      <div className={classes.Layout__main}>
        <div>{children}</div>
        <Navigation open={isOpen} />
        <MainSection />
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
