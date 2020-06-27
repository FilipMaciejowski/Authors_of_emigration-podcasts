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
      <div className={classes.MainSection__ministry}>
        <img
          src={require("../../assets/images/logo_ministry_of_culture_alt.png")}
          alt="Ministerstwo_kultury_logo"
        />
      </div>
    </section>
  )
}

export default MainSection