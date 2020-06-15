import PropTypes from "prop-types"
import React from "react"


import Navigation from "../header/navigation/navigation"
import classes from "./header.module.css"
import ship from "../../assets/images/Ship_Polonia.png"

const Header = () => (
  <header className={classes.Header__layout}>
    <Navigation />
    <img src={ship} title="Statek_Polonia" alt="Statek_polonia"/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
