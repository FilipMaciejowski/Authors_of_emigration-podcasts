import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast_Brudzynski_3 = () => {
  return (
    <PodcastTemplate>
      <h1 className={classes.Podcast__paragraph_heading}>
        Tadeusz Brudzyński, odc. 3
      </h1>
      <p className={classes.Podcast__paragraph_main}>
        „Wszystko zostało odwrócone. Ta wystawa powinna być tylko etapem, a nie
        zakończeniem pracy. Tadeusz zanurzył się w życie z takim impetem.
        Artystom jest trudniej, niż ludziom zwyczajnym; czują i widzą znacznie
        więcej, lepiej. Stan, w którym muszą się znaleźć aby pracować, jest inny
        od normalnego. Ale trzeba codziennie wracać do życia. […] Jego malarstwo
        całkowicie przylega do Niego. Jest duże jak On, ma siłę, delikatność,
        decyzję. Jest otwarte i wolne. Bardzo różnorodne. Ma blask i ciepło
        uczucia” – pisał prof. Jacek Sienicki w tekście do katalogu wystawy w
        Zachęcie, która została otwarta w 1997 roku już jako podsumowanie tej
        niespełnionej twórczości, po śmierci artysty. W ostatnim odcinku była
        żona Małgorzata Brudzyńska mówi o osobistym odbiorze twórczości jej
        męża, jego inspiracjach, zróżnicowanej tematyce prac, a także sukcesach.{" "}
      </p>
      <p className={classes.Podcast__paragraph_minor}>
        Cytaty i informacje pochodzą z książki wydanej staraniem rodziny
        malarza, m. in. ojca – Andrzeja Brudzyńskiego (więcej na jego temat{" "}
        <a
          className={classes.Paragraph_link}
          href="https://www.1944.pl/archiwum-historii-mowionej/andrzej-brudzynski,3357.html"
        >
          tutaj
        </a>
        ).
      </p>
      <section className={classes.Podcast__player}>
        <iframe
          src="https://widget.spreaker.com/player?episode_id=39767057&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
          width="100%"
          height="200px"
          frameborder="0"
        ></iframe>
      </section>
      <p className={classes.Paragraph__photo}>
        Zdjęcie artysty z archiwum rodzinnego.{" "}
      </p>
    </PodcastTemplate>
  )
}

export default Podcast_Brudzynski_3
