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

useEffect(() => {
  window.addEventListener('scroll', scrollHandler
)
}, [])

const scrollHandler = () => {
  const windowHeight = window.pageYOffset;
 if (windowHeight > 1) {
   setAssignedClasses([classes.Navigation__container, classes.Scroll])
   setResize(!resize)
 } else {
   setAssignedClasses([classes.Navigation__container])
   setResize(resize)
 }
}

  return (
    <>
      <Context.Consumer>
        {context => (
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
        )}
      </Context.Consumer>
    </>
  )
}
  

export default Navigation

