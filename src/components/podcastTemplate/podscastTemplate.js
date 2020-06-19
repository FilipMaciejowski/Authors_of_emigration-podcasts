import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../footer/footer"
import SVGContainer from "../SVGContainer/SVGContainer"
import classes from "./podcastTemplate.module.css"

const PodcastTemplate = () => {
  return (
    <div className={classes.Template__layout}>
      <header className={classes.Header__layout}>
        <Link to="/">
          <SVGContainer />
        </Link>
      </header>
      <main className={classes.Template__text}>
        <p>
          Kot Jeleński, żołnierz, intelektualista, przyjaciel Gombrowicza,
          Miłosza i Czapskiego, krnąbrny niekiedy współpracownik paryskiej
          „Kultury”, człowiek światowy, wyłamuje się ze wszystkich znanych nam
          szablonów polskiej emigracji. Trudno go sobie wyobrazić na pomniku.
          Błyskotliwy, zmienny – ale bezkompromisowy w sprawach zasadniczych –
          ukrywający swoje życie prywatne przed wzrokiem emigracyjnych
          plotkarzy; nawet ci, którzy go długo znali, nie mogą być pewni, że go
          naprawdę poznali. Biografia Anny Arno świetnie uchwyciła tę
          proteuszową postać w stu migawkach, ze stu punktów widzenia.
        </p>
        <p>
          Konstanty Jeleński był jednym z najciekawszych, najbardziej
          błyskotliwych, wielkodusznych i utalentowanych ludzi, jakich spotkałam
          w życiu. I najbardziej tajemniczym. Książka Anny Arno jest najlepszym
          możliwym kluczem do tej tajemnicy. Intelektualista, wielki Polak,
          wielki Europejczyk, rozdawał swoje dary szczodrze i bez ostentacji.
          Warto je pozbierać.
        </p>
        <section>
          <iframe
            src="https://widget.spreaker.com/player?episode_id=30033366&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
            width="100%"
            height="150px"
            frameborder="0"
            title="Podcast_Jelenski"
          ></iframe>
        </section>
      </main>
      <Footer data="filip.maciejowski@gmail.com" />
    </div>
  )
}

export default PodcastTemplate
