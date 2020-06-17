import React, {useState} from "react"
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


  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Context.Provider value={{isOpen: isOpen, open: openModalHandler}}>
      <div className={classes.Center}>
        {isOpen ? <Contact /> : null}
        <Header />
        <main>{children}</main>
        <Footer data={data.site.siteMetadata.developer} />
      </div>
    </Context.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout