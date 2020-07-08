import React from  'react'

import classes from "./podcastSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"
import AuthorSection from "../authorSection/authorSection"
import {
  TITLE_JELENSKI,
  TITLE_CIESLEWICZ,
  DESCRIPTION_JELENSKI_1,
  DESCRIPTION_JELENSKI_2,
  DESCRIPTION_JELENSKI_3,
  DESCRIPTION_CIESLEWICZ_1
} from "../../assets/constans/constans"


const PodcastsSection = () => {
  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
          <AuthorSection author={TITLE_CIESLEWICZ}>
            <PodcastElement
              episode={1}
              date="07.07.2020"
              author="Cieslewicz"
              title={TITLE_CIESLEWICZ}
              description={DESCRIPTION_CIESLEWICZ_1}
              page="podcast_Cieslewicz_1"
              unpublished={false}
            />
            <PodcastElement
              episode={2}
              date="07.07.2020"
              author="Cieslewicz"
              title={TITLE_CIESLEWICZ}
              description={DESCRIPTION_CIESLEWICZ_1}
              page="podcast_Cieslewicz_1"
              unpublished={true}
              unpublished_episode="Drugi"
            />
            <PodcastElement
              episode={3}
              date="07.07.2020"
              author="Cieslewicz"
              title={TITLE_CIESLEWICZ}
              description={DESCRIPTION_CIESLEWICZ_1}
              page="podcast_Cieslewicz_1"
              unpublished={true}
              unpublished_episode="Trzeci"
            />
          </AuthorSection>

          <AuthorSection author={TITLE_JELENSKI}>
            <PodcastElement
              episode={1}
              date="01.07.2020"
              author="Jelenski"
              title={TITLE_JELENSKI}
              description={DESCRIPTION_JELENSKI_1}
              page="podcast_Jelenski_1"
              unpublished={false}
            />
            <PodcastElement
              episode={2}
              date="03.07.2020"
              author="Jelenski"
              title={TITLE_JELENSKI}
              description={DESCRIPTION_JELENSKI_2}
              page="podcast_Jelenski_2"
              unpublished={false}
            />
            <PodcastElement
              episode={3}
              date="05.07.2020"
              author="Jelenski"
              title={TITLE_JELENSKI}
              description={DESCRIPTION_JELENSKI_3}
              page="podcast_Jelenski_3"
              unpublished={false}
            />
          </AuthorSection>
        </div>
      </main>
    </>
  )
}

export default PodcastsSection