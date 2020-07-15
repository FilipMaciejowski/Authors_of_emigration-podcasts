import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast_Jelenski_2 = () => {
  const styles = [
    { fontSize: "calc(1.25rem - 15%)" },
    { fontSize: "calc(.85rem - 15%)" },
  ]
  return (
    <PodcastTemplate>
      <h1 className={classes.Podcast__paragraph_heading}>
        Konstany Jeleński, odc. 2
      </h1>
      <p className={classes.Podcast__paragraph_main}>
        „Jak przekazać tej przyszłej cywilizacji to, co jest najlepszego w
        naszej? Dla katolika odpowiedź na to pytanie jest jasna. Dla liberała –
        niestety nie. Czasem myślę żartobliwie, że przepisanie Eneidy na
        antyatomowej butelce ważniejsze byłoby od tysiąca książek i artykułów” –
        napisał 28-letni Konstanty Jeleński do Józefa Czapskiego.
      </p>
      <p className={classes.Podcast__paragraph_main}>
        Sprawy przyszłości środowiska, Polski, świata, cywilizacji wielokrotnie
        były tematem obszernej korespondencji nie tylko tych dwóch zasłużonych
        twórców. Chodziło także o przyszłość i kształt polskiej kultury.
        Konstanty Jeleński stał się zapalonym ambasadorem twórczości
        Gombrowicza. Szczegóły w drugim odcinku. Mówi Anna Arno.
      </p>
      <section className={classes.Podcast__player}>
        <iframe
          src="https://widget.spreaker.com/player?episode_id=33893651&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
          width="100%"
          height="200px"
          frameborder="0"
          title="Podcast__Tworcy_Emigracji_Jelenski_1"
        ></iframe>
      </section>
      <p style={{ fontSize: "calc(.85rem - 25%)" }}>
        Fot. Krzysztof Jung, źródło:{" "}
        <a
          style={{
            fontSize: "calc(.85rem - 30%)",
            textDecoration: "none",
            color: "var(--main_black",
          }}
          href="http://www.wojciechkarpinski.com"
          target="_blank"
          rel="noreferrer"
        >
          www.wojciechkarpinski.com
        </a>
      </p>
    </PodcastTemplate>
  )
}

export default Podcast_Jelenski_2
