import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast_Cieslewicz_2 = () => {
  const styles = [
    { fontSize: "calc(1.25rem - 15%)" },
    { fontSize: "calc(.85rem - 15%)" },
  ]
  return (
    <PodcastTemplate>
      <h1 style={styles[0]}>Roman Cieślewicz, odc. 2</h1>
      <p style={styles[1]}>
        Zakres pracy Romana Cieślewicza we francuskim „Elle” był zupełnie inny
        niż w warszawskiej redakcji „Ty i ja”. Artysta z pozycji kierownika
        artystycznego został grafikiem na zlecenie i szybko awansował w
        hierarchii paryskiego środowiska, najpierw jako projektant makiet, w
        wiele lat później dyrektor artystyczny . Jedną z podstawowych cech pisma
        „Elle” jest brak okładek z oryginalną graficzną kreacją artystyczną, w
        przeciwieństwie do „Ty i ja”. We francuskim piśmie pierwszą stronę
        magazynu zazwyczaj stanowi zdjęcie modelki, stała winieta, uregulowany
        schemat obrazowania. O ile redakcja polskiego pisma miała wyraźnie
        ambicje artystyczne, o tyle koncepcja „Elle” ogranicza się najczęściej
        do wykorzystywania popularnej „fotografii mody”. Wpływ na to ma między
        innymi częstotliwość ukazywania się nowego numeru. „Ty i ja” było
        miesięcznikiem, natomiast francuski odpowiednik tygodnikiem. Roman
        Cieślewicz wspominał w wywiadzie: „byłem olśniony przez tę machinę
        dziennikarską: dwieście osób w redakcji dla 250 stron, które następnego
        dnia można było znaleźć… w koszu”. Więcej na temat tego z którymi
        pismami współpracował Roman Cieślewicz, opowiada Anna Grabowska-Konwent,
        kustosz Galerii Plakatu i Designu Muzeum Narodowego w Poznaniu.
      </p>

      <section className={classes.Podcast__player}>
        <iframe
          src="https://widget.spreaker.com/player?episode_id=36864348&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
          width="100%"
          height="200px"
          frameborder="0"
        ></iframe>
      </section>
      <p style={{ fontSize: "calc(.85rem - 25%)" }}>
        Photo owner: chantalpetitcieslewicz{" "}
      </p>
    </PodcastTemplate>
  )
}

export default Podcast_Cieslewicz_2
