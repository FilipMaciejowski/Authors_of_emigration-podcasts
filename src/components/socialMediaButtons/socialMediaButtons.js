import React from "react"

import { FacebookShareButton, FacebookMessengerShareButton, TwitterShareButton, EmailShareButton,  FacebookIcon, FacebookMessengerIcon, TwitterIcon, EmailIcon} from "react-share"
import classes from "./SocialMediaButtons.module.css"

const SocialMediaButtons = ({author, episode, slug}) => {

    const fill = {fill: "#272727"}
  return (<div className={classes.SocialMedia}><p>Podziel się</p>
  <span className={classes.SocialMedia_line}></span>
      <div className={classes.SocialMediaButtons__container}>
    <FacebookShareButton
      url={`http://tworcyemigracji.pl/podcasts/${slug}`}
      quote={`${author} - Odcinek ${episode}`}
      hashtag="#tworcyemigracji"
      className={classes.socialMediaButton}
    ><FacebookIcon bgStyle={fill} round={true} size={28}/></FacebookShareButton>
    <TwitterShareButton title={`${author} - Odcinek ${episode}`} url={`http://tworcyemigracji.pl/podcasts/${slug}`} hashtags={["#tworcyemigracji", "kultura polska"]} className={classes.socialMediaButton}>
    <TwitterIcon bgStyle={fill} round={true} size={28}/>
    </TwitterShareButton>
    <EmailShareButton url={`http://tworcyemigracji.pl/podcasts/${slug}`} subject={`${author}-Odcinek ${episode}`} className={classes.socialMediaButton}>
    <EmailIcon bgStyle={fill} round={true} size={28}/>
    </EmailShareButton>
    </div>
    </div>
  )
}



export default SocialMediaButtons
