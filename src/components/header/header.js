import PropTypes from "prop-types"
import React from "react"


import classes from "./header.module.css"
import ship from "../../assets/images/Ship_noName.png"
import ship2 from "../../assets/images/Ship_Polonia.png"

const Header = () => {
  return (
    <>
      <header className={classes.Header__main}>
        <p className={classes.Header__neon}>
          p<span className={classes.Letter_1}>o</span>lo
          <span className={classes.Letter_2}>n</span>ia
        </p>
        <picture>
          <source media="(min-width: 1005px)" srcset={ship} />
          <source media="(max-width: 1004px)" srcset={ship2} />
          <img src={ship} title="Statek_Polonia" alt="Statek_polonia" />
        </picture>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
