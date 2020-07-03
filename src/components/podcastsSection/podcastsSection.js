import React from  'react'

import classes from "./podcastSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"
import {
  TITLE_JELENSKI,
  DESCRIPTION_JELENSKI_1,
  DESCRIPTION_JELENSKI_2,
} from "../../assets/constans/constans"



const PodcastsSection = () => {
  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
          <PodcastElement
            episode={1}
            date="01.07.2020"
            title={TITLE_JELENSKI}
            description={DESCRIPTION_JELENSKI_1}
            page="podcast_Jelenski_1"
          />
          <PodcastElement
            episode={2}
            date="03.07.2020"
            title={TITLE_JELENSKI}
            description={DESCRIPTION_JELENSKI_2}
            page="podcast_Jelenski_2"
          />
          {/* <PodcastElement
            episode={3}
            date="01.07.2020"
            title={TITLE_JELENSKI}
            description={DESCRIPTION_JELENSKI}
            page="podcast3"
          />
          <PodcastElement
            episode={4}
            date="01.07.2020"
            title={TITLE_JELENSKI}
            description={DESCRIPTION_JELENSKI}
          /> */}
        </div>
      </main>
    </>
  )
}

export default PodcastsSection