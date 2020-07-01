import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import Footer from "../footer/footer"
import SVGContainer from "../SVGContainer/SVGContainer"
import classes from "./podcastTemplate.module.css"

const PodcastTemplate = ({ children}) => {

  const [assignedClasses, setAssignedClasses] = useState([classes.Header__layout])


  const scrollHandler = () => {
    const windowHeight = window.scrollY
    if (windowHeight > 1) {
      setAssignedClasses([classes.Header__layout, classes.Scroll])
    } else {
      setAssignedClasses([classes.Header__layout])
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [])



  return (
    <>
      <div className={classes.Template__layout}>
        <header className={assignedClasses.join(" ")}>
          <Link to="/">
            <SVGContainer mainClass="Logo__template" newClass="Image_resize" />
          </Link>
        </header>
        <main className={classes.Template__text}>{children}</main>
      </div>
      <Footer data="" containerSize="Footer__container_narrow"></Footer>
    </>
  )
}

export default PodcastTemplate
