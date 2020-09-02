import React from "react"


import Context from "../context.js"
import classes from "./hamburgerMenu.module.css"





const HamburgerMenu = () => {
  return (
    <Context.Consumer>
      {context => (
        <div className={classes.Navigation__hamburger_container}>
          <div role="button"
          tabIndex={0}
            onClick={context.toggleMobileNav} 
            onKeyDown={context.toggleMobileNav}
            className={
              context.mobileNavIsOpen
                ? [classes.Navigation__hamburger, classes.closeBurger].join(" ")
                : classes.Navigation__hamburger
            }
          >
            <span className={classes.BurgerLine}></span>
          </div>
        </div>
      )}
    </Context.Consumer>
  )
}

export default HamburgerMenu
