import React, { useState, useEffect } from "react"

import SVGContainer from "../SVGContainer/SVGContainer"
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu"
import Navbar from "../navbar/navbar"
import classes from "./navigation.module.css"
import Context from "../context"

const Navigation = () => {
  const [assignedClasses, setAssignedClasses] = useState([
    classes.Navigation__main,
  ])
  const [addedClasses, setAddedClasses] = useState([
    classes.Navigation__container,
  ])

const [lineClasses, setLineClasses] = useState([
  classes.Navigation__line,
]

)
  const [resize, setResize] = useState(false)

  const scrollHandler = () => {
    const windowHeight = window.scrollY
    console.log(windowHeight)
    if (windowHeight > 1) {
      setAssignedClasses([classes.Navigation__main, classes.Scroll])
      setAddedClasses([classes.Navigation__container, classes.Scroll])
      setLineClasses([classes.Navigation__line, classes.Scroll])
      setResize(true)
    } else {
      setAssignedClasses([classes.Navigation__main])
      setAddedClasses([classes.Navigation__container])
      setLineClasses([classes.Navigation__line])
      setResize(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
  }, [])

  return (
    
      <div
        className={
          resize ? assignedClasses.join(" ") : classes.Navigation__main
        }
      >
        <nav
          className={
            resize ? addedClasses.join(" ") : classes.Navigation__container
          }
        >
          <SVGContainer mainClass="Logo" scroll={resize} />
          <Navbar />
          <HamburgerMenu />
        </nav>
        <div className={lineClasses.join(" ")}></div>
      </div>
    
  )
}

export default Navigation
