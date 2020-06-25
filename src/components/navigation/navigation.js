import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import SVGContainer from "../SVGContainer/SVGContainer"
import Contact from "../contact/contact"
import classes from "./navigation.module.css"
import Context from "../context"



const Navigation = ({open}) => {

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
    <Context.Consumer>
      {context => (
        <nav className={classes.Navigation__nav_main}>
          <div className={assignedClasses.join(" ")}>
            <SVGContainer mainClass="Logo" scroll={resize} />

            <ul className={classes.Navigation__list}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="9.5"
                  fill="white"
                  stroke="#272727"
                  stroke-width="2"
                />
              </svg>
              <li>
                <Link className={classes.Navigation__list_link}>Podcasty</Link>
              </li>
              <li>
                <Link
                  className={classes.Navigation__list_link}
                  to="aboutProject"
                >
                  O projekcie
                </Link>
              </li>
              <li className={classes.Different}>
                <Link
                  className={classes.Navigation__list_link}
                  onClick={context.open}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            <div className={classes.Modal__contact}>
              {open ? <Contact /> : null}
            </div>
          </div>
        </nav>
      )}
    </Context.Consumer>
  )
}

export default Navigation

