import React from "react"

import classes from "./EpisodesList.module.css"

const EpisodesList = ({episodes}) => {
   
    return (
        <div className={classes.EposidesList__main}>
            <ul>

                {episodes.map(({node}) => <li key={node.podcastelement.id}>{node.podcastelement.episode}</li>)}
                
            </ul>
        </div>
    )
}

export default EpisodesList