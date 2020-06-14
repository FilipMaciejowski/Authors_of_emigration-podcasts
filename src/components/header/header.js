import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SVGContainer from "../SVGContainer"
import Navigation from "../header/navigation/navigation"

const Header = () => (
  <header>
    <nav>
      <SVGContainer />
      <Navigation />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
