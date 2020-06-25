import React from "react"

import Header from "../header/header"
import PodcastsSection from "../podcastsSection/podcastsSection"
import DecorationLines from "../decorationLines/decorationLines"
import Ministry from "../ministry/ministry"
import classes from "./mainSection.module.css"

const MainSection = () => {
  return (
    <section className={classes.MainSection__layout}>
      <Header />
      <DecorationLines />
      <PodcastsSection />
      {/* <Ministry /> */}
    </section>
  )
}

export default MainSection