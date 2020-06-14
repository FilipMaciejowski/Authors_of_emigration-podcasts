import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"
import classes from "./layout.module.css"
import Contact from "../contact/contact"

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
    <div className={classes.Center}>
      {isOpen ? <Contact/> : null}
      <Header open={openModalHandler}/>
      <main>{children}</main>
      <Footer data={data.site.siteMetadata.developer} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
