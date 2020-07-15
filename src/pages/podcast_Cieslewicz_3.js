import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast_Cieslewicz_3 = () => {
  
  return (
    <PodcastTemplate>
      <h1 className={classes.Podcast__paragraph_heading}>
        Roman Cieślewicz, odc. 3
      </h1>
      <p className={classes.Podcast__paragraph_main}>
        W maju 1968 Roman Cieślewicz pełnił funkcję dyrektora artystycznego
        „Elle”, którą to wkrótce miał porzucić na rzecz działań, które
        uniezależniały go jako grafika. Kryzys polityczny odbił się szerokim
        echem w życiu codziennym, a to właśnie z niego Roman Cieślewicz czerpał
        najwięcej inspiracji – interesowały go przecież najbardziej uliczne
        plakaty, ulotki, codzienne magazyny, które szybko trafiały do kosza. W
        1971 roku Roman Cieślewicz otrzymał obywatelstwo francuskie . Na
        początku dekady razem z zaprzyjaźnionymi członkami „Groupe Panique”, do
        której należał również Roland Topor, artysta zaczął opracowywać pismo
        „Kitsch”, którego kontynuacją było w roku 1976 „Kamikaze” – niezależny
        projekt artystyczny. Ostatecznie około roku 1972 Cieślewicz
        usamodzielnia się jako niezależny grafik , niezwiązany oficjalnie z
        żadną redakcją. Więcej na temat działalności i specyficznej pracowni w
        Malakoff, opowiada w ostatnim odcinku Anna Grabowska-Konwent, kustosz
        Galerii Plakatu i Designu Muzeum Narodowego w Poznaniu.
      </p>

      <section className={classes.Podcast__player}>
        <iframe
          src="https://widget.spreaker.com/player?show_id=4477308&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
          width="100%"
          height="200px"
          frameborder="0"
        ></iframe>
      </section>
      <p className={classes.Paragraph__photo}>
        Photo owner: chantalpetitcieslewicz{" "}
      </p>
    </PodcastTemplate>
  )
}

export default Podcast_Cieslewicz_3
