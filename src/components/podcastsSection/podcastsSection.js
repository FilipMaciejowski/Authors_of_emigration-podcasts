import React from  'react'

import classes from "./podcastSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"
import { TITLE_JELENSKI, DESCRIPTION_JELENSKI } from "../../assets/constans/constans"



const PodcastsSection = () => {
  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
          <PodcastElement
            episode={1}
            date="01.07.2020"
            title={TITLE_JELENSKI}
            description={DESCRIPTION_JELENSKI}
          />
          <PodcastElement
            episode={2}
            date="01.07.2020"
            title={TITLE_JELENSKI}
            description={DESCRIPTION_JELENSKI}
          />
          <PodcastElement
            episode={3}
            date="01.07.2020"
            title={TITLE_JELENSKI}
            description={DESCRIPTION_JELENSKI}
          />
          <PodcastElement
            episode={4}
            date="01.07.2020"
            title={TITLE_JELENSKI}
            description={DESCRIPTION_JELENSKI}
          />
        </div>
      </main>
    </>
  )
}

export default PodcastsSection