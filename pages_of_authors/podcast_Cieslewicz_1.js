import React from "react"

import PodcastTemplate from "../src/components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast_Cieslewicz_1 = () => {
  
  return (
    <PodcastTemplate>
      <h1 className={classes.Podcast__paragraph_heading}>
        Roman Cieślewicz, odc. 1
      </h1>
      <p className={classes.Podcast__paragraph_main}>
        Roman Cieślewicz przyjeżdża do Paryża w 1963 roku, mając 33 lata. To
        rok, w którym otworzono m. in. nowoczesną siedzibę francuskiego Radia,
        uruchomiono drugi kanał telewizyjny (cztery lata później pojawiła się
        telewizja kolorowa), Roland Barthes wydał swoją książkę „Sur Racine”,
        publikowali również strukturaliści: Claude Lévi-Strauss, Michel
        Foucault, poza tym Jacques Lacan oraz Jean Paul Sartre. W stołecznym
        muzeum Arts Décoratifs zrealizowano retrospektywną wystawę Victora
        Vasarely’ego. Dla światowego kina to czas najlepszych dokonań
        „francuskiej nowej fali”. Na ekrany kin trafił zrealizowany trzy lata
        wcześniej film „Żołnierzyk” Jeana Luca Godarda. Dla porównania w Polsce
        w 1963 roku Wojciech Has przygotowywał „Rękopis znaleziony w
        Saragossie”, który nie bez przyczyny można umieścić w tym kontekście.
        Zainteresowanie surrealizmem i fantastyką było bowiem popularne wśród
        ówczesnych polskich twórców, m.in. Lidii i Jerzego Skarżyńskich (autorów
        scenografii i kostiumów do wymienionego filmu), którzy w tak
        „bezpiecznych” politycznie tematach realizowali fantastyczne wizje
        surrealnego świata, bliskie artystycznym zainteresowaniom Romana
        Cieślewicza. Stylistyka polskich ilustracji książkowych, opraw
        plastycznych czasopism, plakatów nieustannie czerpała z absurdu,
        groteski, nadrealizmu. Pierwszą wystawę polskiego artysty w Paryżu
        zorganizowano w księgarni Mandragore. Pokazano tam ilustracje do prozy
        Brunona Schulza, które nigdy nie ukazały się razem z tekstem. Więcej na
        temat pierwszych lat Romana Cieślewicza w Paryżu mówi w pierwszym
        odcinku Anna Grabowska-Konwent, kustosz Galerii Plakatu i Designu Muzeum
        Narodowego w Poznaniu.
      </p>

      <section className={classes.Podcast__player}>
        <iframe
          src="https://widget.spreaker.com/player?episode_id=36862794&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
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

export default Podcast_Cieslewicz_1
