import React, {useState, useEffect} from "react"

import SVGContainer from "../SVGContainer/SVGContainer"
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu"
import Navbar from "../navbar/navbar"
import classes from "./navigation.module.css"
import Context from "../context"




const Navigation = () => {

const [assignedClasses, setAssignedClasses] = useState(
[
  classes.Navigation__container, 
])

const [resize, setResize] = useState(false)

const scrollHandler = () => {
  const windowHeight = window.scrollY;
  console.log(windowHeight)
  if (windowHeight > 1) {
    setAssignedClasses([classes.Navigation__container, classes.Scroll])
    setResize(true)
    
  } else {
    setAssignedClasses([classes.Navigation__container])
    setResize(false)
  }
}

useEffect(() => {
  window.addEventListener("scroll", scrollHandler)
}, [])


  return (
    <>
      <Context.Consumer>
        {context => (
          <div className={classes.Navigation__main}>
            <nav
              className={
                context.isShown
                  ? classes.Navigation__container
                  : assignedClasses.join(" ")
              }
            >
              <SVGContainer mainClass="Logo" scroll={resize} />
              <Navbar />
              <HamburgerMenu />
            </nav>
          </div>
        )}
      </Context.Consumer>
    </>
  )
}
  

export default Navigation

