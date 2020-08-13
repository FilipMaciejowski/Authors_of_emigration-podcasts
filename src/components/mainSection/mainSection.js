import React from "react"

import Header from "../header/header"
import PodcastsSection from "../podcastsSection/podcastsSection"
import DecorationLines from "../decorationLines/decorationLines"
import Context from "../context"
import classes from "./mainSection.module.css"


const MainSection = () => {
  return (
    <Context.Consumer>
      {context => ( 
    <section className={classes.MainSection__layout}>
      <Header />
      <DecorationLines />
      <PodcastsSection closeNavMobile={context.closeNav}/>
    </section>
    )}
    </Context.Consumer>
  )
}

export default MainSection