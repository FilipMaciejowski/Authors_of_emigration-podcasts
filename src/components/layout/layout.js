import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"
import classes from "./layout.module.css"
import Contact from "../contact/contact"
import Context from "../context"

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

  const [isOpen, setIsOpen] = useState(false)

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
        {isOpen ? <Contact /> : null}
        <Header />
        <div>{children}</div>
        <Footer data={data.site.siteMetadata.developer} />
      </div>
    </Context.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
