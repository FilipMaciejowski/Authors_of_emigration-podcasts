import React, {useState} from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import classes from "./header.module.css"


const Header = () => {

const [letter_n_hoverClass, setHoverClass] = useState([classes.Letter_2])
const [noenHoverClass, setNoeonHoverClass] = useState([classes.Header__neon])
const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "Ship_noName.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

const addClassHoverHandler = () => {
  setHoverClass([classes.Letter_2, classes.Hover])
  setNoeonHoverClass([classes.Header__neon, classes.Hover])
}

const removeClassHoverHandler = () => {
  setHoverClass([classes.Letter_2])
  setNoeonHoverClass([classes.Header__neon])
}

  return (
    <>
      <header className={classes.Header__main}>
<<<<<<< HEAD
        <div role="button" tabIndex={0} className={classes.Header__neon_container} onMouseEnter={addClassHoverHandler} onMouseLeave={removeClassHoverHandler}> 
=======
        <div className={classes.Header__neon_container} role="button" tabIndex={0} onKeyDown={addClassHoverHandler} onMouseEnter={addClassHoverHandler} onMouseLeave={removeClassHoverHandler}> 
>>>>>>> 2fbc646c147352422518d6a8f2efb11f29d02a26
        <p className={noenHoverClass.join(" ")}>
          p<span  className={classes.Letter_1}>o</span>lo
          <span className={letter_n_hoverClass.join(" ")}>n</span>ia
        </p>
        </div>
        <div className={classes.Image_container}>
          <Img fluid={data.file.childImageSharp.fluid} alt="Statek_polonia" />
        </div>

        {/* <picture>
          <source media="(min-width: 1005px)" srcSet={ship} />
          <source media="(max-width: 1004px)" srcSet={ship2} />
          <img src={ship} title="Statek_Polonia" alt="Statek_polonia" />
        </picture> */}
      </header>
    </>
  )
}


export default Header
