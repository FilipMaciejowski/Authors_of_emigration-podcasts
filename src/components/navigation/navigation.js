import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

import SVGContainer from "../SVGContainer/SVGContainer"
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu"
import Navbar from "../navbar/navbar"
import classes from "./navigation.module.css"
import NavigationMobile from "../navigationMobile/navigationMobile"

const Navigation = () => {
  
  const [ref, inView] = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.98
  })
  return (
    <>
    <div ref={ref} className={classes.Nav__observer_helper}></div>
    <div
      className={
        !inView ? [classes.Navigation__main, classes.Scroll].join(" ") : classes.Navigation__main
      }
    >
      <nav
        className={
          !inView ? [classes.Navigation__container, classes.Scroll].join(" ") :  classes.Navigation__container
        }
      >
        <SVGContainer
          mainClass="Logo__container"
          imageClass="Logo"
          onScrollClass="Resize"
          scroll={!inView}
        />
        <NavigationMobile />
        <Navbar />
        <HamburgerMenu />
      </nav>
      <div className={!inView ? [classes.Navigation__line, classes.Scroll].join(" ") : classes.Navigation__line}></div>
    </div>
    </>
  )
}

export default Navigation
