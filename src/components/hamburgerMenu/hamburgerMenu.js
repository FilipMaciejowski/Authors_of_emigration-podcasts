import React, {useState} from "react"


import Context from "../context.js"
import classes from "./hamburgerMenu.module.css"





const HamburgerMenu = () => {
  return (
    <Context.Consumer>
      {context => (
        <div className={classes.Navigation__hamburger_container}>
          <div
            onClick={context.toggleNav}
            className={
              context.isShown
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
