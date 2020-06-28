import React from "react"

import Header from "../header/header"
import PodcastsSection from "../podcastsSection/podcastsSection"
import DecorationLines from "../decorationLines/decorationLines"
import classes from "./mainSection.module.css"

const MainSection = () => {
  return (
    <section className={classes.MainSection__layout}>
      <Header />
      <DecorationLines />
      <PodcastsSection />
    </section>
  )
}

export default MainSection