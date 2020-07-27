import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import classes from "./authorSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"


const AuthorSection = ({author}) => {

  const data = useStaticQuery(graphql`
   query {
    allContentfulEpisode{
        nodes {
          id
          episode
          author
          dateOfPublication
          heading
          unpublished
          unpublishedEpisode
        }
      }
    }
  `)

  return (
    <div className={classes.AuthorSection__layout}>
      <h1>{author}</h1>
      <div className={classes.AuthorSection__layout_container}>
        {data.allContentfulEpisode.nodes.map( node => (
 <PodcastElement
 key={node.id}
 episode={node.episode}
 date={node.dateOfPublication}
 author={node.author}
 /* title={node.frontmatter.title} */
 description={node.heading}
 /* page={node.fields.slug} */
 unpublished={node.unpublished}
 unpublished_episode={node.frontmatter.unpublished_episode}
 /* small={node.frontmatter.small} */
/>
        ))
     
}
      </div>
    </div>
  )
}


 

export default AuthorSection