import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import SVGContainer from "../SVGContainer/SVGContainer"
import classes from "./navigation.module.css"
import Context from "../context"


const Navigation = () => {

const [assignedClasses, setAssignedClasses] = useState([
  classes.Navigation__container
])



useEffect(() => {
  window.addEventListener('scroll', scrollHandler
)
}, [])

const scrollHandler = () => {
  const windowHeight = window.pageYOffset
 if (windowHeight > 0) {
   setAssignedClasses([classes.Navigation__container, classes.Scroll])
 } else {
   setAssignedClasses([classes.Navigation__container])
 }
}




  return (
    <Context.Consumer>
      {context => (
        <nav className={classes.Navigation__nav_main}>
          <div className={assignedClasses.join(' ')}>
            <SVGContainer />
            <ul className={classes.Navigation__list}>
              <li>
                <Link>Podcasty</Link>
              </li>
              <li>
                <Link to="aboutProject">O projekcie</Link>
              </li>
              <li className={classes.Different}>
                <Link onClick={context.open}>Kontakt</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </Context.Consumer>
  )
}

export default Navigation
