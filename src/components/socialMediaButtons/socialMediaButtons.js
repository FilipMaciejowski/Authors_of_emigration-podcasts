import React from "react"

import { FacebookShareButton, TwitterShareButton, EmailShareButton,  FacebookIcon, TwitterIcon, EmailIcon} from "react-share"
import classes from "./SocialMediaButtons.module.css"

const SocialMediaButtons = ({author, episode, slug}) => {

    const fill = {fill: "#272727"}
  return (<div className={classes.SocialMedia}><p>Podziel się</p>
  <span className={classes.SocialMedia_line}></span>
      <div className={classes.SocialMediaButtons__container}>
    <FacebookShareButton
      url={`http://tworcyemigracji.pl/podcasts/${slug}`}
      quote={`${author}-Odcinek ${episode}`}
      hashtag="#tworcyemigracji"
      className={classes.socialMediaButton}
    ><FacebookIcon bgStyle={fill} round={true} size={28}/></FacebookShareButton>
    <TwitterShareButton className={classes.socialMediaButton}>
    <TwitterIcon bgStyle={fill} round={true} size={28}/>
    </TwitterShareButton>
    <EmailShareButton  className={classes.socialMediaButton}>
    <EmailIcon bgStyle={fill} round={true} size={28}/>
    </EmailShareButton>
    </div>
    </div>
  )
}



export default SocialMediaButtons
