import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast_Brudzynski_1 = () => {
  return (
    <PodcastTemplate>
      <h1 className={classes.Podcast__paragraph_heading}>
        Tadeusz Brudzyński, odc. 2
      </h1>
      <p className={classes.Podcast__paragraph_main}>
        Wiosną 1983 roku malarz opuszcza Polskę, wyjeżdża do Paryża. Na miejscu
        nie czekają na niego zamówienia, znajomi i pracownia. Zaryzykował, by w
        mieście sztuki odnaleźć własny los, przyjrzeć się własnej wartości.
        Podobno malował nocami, a w dzień dorabiał – inwentaryzuje bibliotekę
        Pierre’a Seghersa. Przygotowuje także kilka wystaw, w marcu 1987 roku w
        galerii Montparnasse, zostaje gościem mera Paryża, tekst do tamtej
        ekspozycji pisze wspominająca te fakty Madeleine-Pierre Querolle. Jak
        pisze dalej: „Żaden krytyk nie zrozumiał lepiej Brudzyńskiego w tym
        okresie, niż Christophe Graizon, autor przedmowy do katalogu wystawy
        tokijskiej. Pisał: <span className={classes.Italic}>
          Człowiek z brązu, statyczny i ciężki, człowiek z ciała, zmiażdżony w
          postawie Chrystusa bezsilnego lub ograniczony do kilku linii, rzutów
          jaskrawych barw, rozdzierających doskonałą czerń, jak krzyk w pustce
        </span>
        ”. O tym jak wyglądało życie Tadeusza Brudzyńskiego w Paryżu, opowiada
        była żona Małgorzata Brudzyńska.
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
          src="https://widget.spreaker.com/player?episode_id=39525682&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
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

export default Podcast_Brudzynski_1
