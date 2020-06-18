import React from  'react'

import classes from "./main.module.css"
import PodcastElement from "../podcastElement/podcastElement"

const description =
  "Kot Jeleński, żołnierz, intelektualista, przyjaciel Gombrowicza, Miłosza i Czapskiego, krnąbrny niekiedy współpracownik paryskiej „Kultury”, człowiek światowy. "


const Main = () => {
  return (
    <>
      <main className={classes.Content__main}>
        <PodcastElement
          status="new"
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

export default Main