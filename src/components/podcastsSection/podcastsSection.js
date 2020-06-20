import React from  'react'

import classes from "./podcastSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"

const description =
  "Kot Jeleński, żołnierz, intelektualista, przyjaciel Gombrowicza, Miłosza i Czapskiego, krnąbrny niekiedy współpracownik paryskiej „Kultury”, człowiek światowy. "


const PodcastsSection = () => {
  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
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
          <PodcastElement
            status={null}
            date="01.07.2020"
            title="Konstantym A. Jeleńskim"
            description={description}
          />
        </div>
      </main>
    </>
  )
}

export default PodcastsSection