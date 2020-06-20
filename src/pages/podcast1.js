import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"

const Podcast1 = () => {
  return (
    <PodcastTemplate>
      <h1>Konstany Jeleński</h1>
      <p>
        Kot Jeleński, żołnierz, intelektualista, przyjaciel Gombrowicza, Miłosza
        i Czapskiego, krnąbrny niekiedy współpracownik paryskiej „Kultury”,
        człowiek światowy, wyłamuje się ze wszystkich znanych nam szablonów
        polskiej emigracji. Trudno go sobie wyobrazić na pomniku. Błyskotliwy,
        zmienny – ale bezkompromisowy w sprawach zasadniczych – ukrywający swoje
        życie prywatne przed wzrokiem emigracyjnych plotkarzy; nawet ci, którzy
        go długo znali, nie mogą być pewni, że go naprawdę poznali. Biografia
        Anny Arno świetnie uchwyciła tę proteuszową postać w stu migawkach, ze
        stu punktów widzenia.
      </p>
      <p>
        Konstanty Jeleński był jednym z najciekawszych, najbardziej
        błyskotliwych, wielkodusznych i utalentowanych ludzi, jakich spotkałam w
        życiu. I najbardziej tajemniczym. Książka Anny Arno jest najlepszym
        możliwym kluczem do tej tajemnicy. Intelektualista, wielki Polak, wielki
        Europejczyk, rozdawał swoje dary szczodrze i bez ostentacji. Warto je
        pozbierać.
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
    </PodcastTemplate>
  )
}

export default Podcast1 