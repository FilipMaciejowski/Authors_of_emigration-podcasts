import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

import SVGContainer from "../SVGContainer/SVGContainer"
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu"
import Navbar from "../navbar/navbar"
import classes from "./navigation.module.css"

const Navigation = () => {
   /* const [assignedClasses, setAssignedClasses] = useState([
    classes.Navigation__main,
  ])
  const [addedClasses, setAddedClasses] = useState([
    classes.Navigation__container,
  ])

  const [lineClasses, setLineClasses] = useState([classes.Navigation__line])
  const [resize, setResize] = useState(true) */

  const [ref, inView] = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.98
  })

  /* const scrollHandler = ()  => {
      setAssignedClasses([classes.Navigation__main, classes.Scroll])
      setAddedClasses([classes.Navigation__container, classes.Scroll])
      setLineClasses([classes.Navigation__line, classes.Scroll])
      setResize(true)
  } */

  /* useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
  }, []) */

  return (
    <>
    <div ref={ref} className={classes.Nav__observer_helper}></div>
    <div
      className={
        !inView ? [classes.Navigation__main, classes.Scroll].join(" ") : classes.Navigation__main
      }
    >
      {console.log(inView)}
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
        <Navbar />
        <HamburgerMenu />
      </nav>
      <div className={!inView ? [classes.Navigation__line, classes.Scroll].join(" ") : classes.Navigation__line}></div>
    </div>
    </>
  )
}

export default Navigation
