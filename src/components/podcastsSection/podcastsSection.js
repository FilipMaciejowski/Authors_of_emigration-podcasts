import React from  'react'

import classes from "./podcastSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"


const PodcastsSection = () => {
  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
          <PodcastElement
            episode={1}
            date="01.07.2020"
            title="dziecinstwie i dorastaniu w przedwojennej Polsce"
            
          />
          <PodcastElement
            episode={2}
            date="01.07.2020"
            title="dziecinstwie i dorastaniu w przedwojennej Polsce"
            
          />
          <PodcastElement
            episode={3}
            date="01.07.2020"
            title="dziecinstwie i dorastaniu w przedwojennej Polsce"
            
          />
          <PodcastElement
            episode={4}
            date="01.07.2020"
            title="dziecinstwie i dorastaniu w przedwojennej Polsce"
            
          />
        </div>
      </main>
    </>
  )
}

export default PodcastsSection