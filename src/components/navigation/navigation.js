import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import SVGContainer from "../SVGContainer/SVGContainer"
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
    <Context.Consumer>
      {context => (
        <nav className={classes.Navigation__nav_main}>
          <div className={assignedClasses.join(" ")}>
            <SVGContainer class="Image" scroll={resize} />
            <ul className={classes.Navigation__list}>
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
          </div>
        </nav>
      )}
    </Context.Consumer>
  )
}

export default Navigation

