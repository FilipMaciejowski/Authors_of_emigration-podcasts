import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"




import classes from "./header.module.css"
// import ship from "../../assets/images/Ship_noName.png"
// import ship2 from "../../assets/images/Ship_Polonia.png"

const Header = () => {

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

  return (
    <>
      <header className={classes.Header__main}>
        <p className={classes.Header__neon}>
          p<span className={classes.Letter_1}>o</span>lo
          <span className={classes.Letter_2}>n</span>ia
        </p>

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
