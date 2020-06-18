import React from  'react'

import classes from "./mainSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"

const description =
  "Kot Jeleński, żołnierz, intelektualista, przyjaciel Gombrowicza, Miłosza i Czapskiego, krnąbrny niekiedy współpracownik paryskiej „Kultury”, człowiek światowy. "


const MainSection = () => {
  return (
    <>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <main className={classes.Content__main}>
        <PodcastElement
          status="nowy"
          date="01.07.2020"
          title="Konstantym A. Jeleńskim"
          description={description}
        />
        <PodcastElement
          status={null}
          date="01.07.2020"
          title="Konstantym A. Jeleńskim"
          description={description}
        />
        <PodcastElement
          status={null}
          date="01.07.2020"
          title="Konstantym A. Jeleńskim"
          description={description}
        />
      </main>
    </>
  )
}

export default MainSection