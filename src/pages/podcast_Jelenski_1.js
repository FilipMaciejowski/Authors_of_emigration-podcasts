import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast_Jelenski_1 = () => {
  const styles = [
    { fontSize: "calc(1.25rem - 15%)" },
    { fontSize: "calc(.85rem - 15%)" }
  ]
  return (
    <PodcastTemplate>
      <h1 className={classes.Podcast__paragraph_heading}>
        Konstany Jeleński, odc. 1
      </h1>
      <p
        style={{
          marginBottom: ".25rem",
          fontStyle: "italic",
          fontSize: "calc(.85rem - 15%)",
        }}
      >
        To, co robiłem i myślałem, nie miało właściwie nigdy głębokiego,
        realnego związku. Byłem może (w przypadkowym porządku): liberałem,
        synem, humanistą, czytelnikiem, sumiennym urzędnikiem, Polakiem,
        przyjacielem, kochankiem, pederastą itd. „Kot Jeleński” – postać nieco
        proteuszowska, zależnie od tego, przez kogo odzwierciedlana.
      </p>
      <p style={{ marginTop: "0", fontSize: "calc(.85rem - 15%)" }}>
        "Konstanty A. Jeleński. Listy z Korsyki" Fundacja Zeszytów Literackich,
        Warszawa 2003.
      </p>
      <br />
      <p className={classes.Podcast__paragraph_main}>
        Pisał z Rzymu w sierpniu 1952 roku do Józefa Czapskiego, Konstanty
        Jeleński. Znakomity eseista, krytyk, żołnierz I Dywizji Pancernej,
        współtwórca środowiska paryskiej „Kultury” podobno odznaczał się dużym
        wdziękiem, trudno nie wierzyć w te słowa, kiedy patrzy się na jego
        zdjęcia. Urodził się w 1922 roku w Warszawie. Od dzieciństwa podróżował
        po Europie razem z rodzicami – ojcem dyplomatą (Konstantym Jeleńskim) i
        matką Teresą „Reną” Jeleńską (tłumaczką). Polskę opuścił na stałe w
        grudniu 1939 roku i nigdy do niej nie powrócił, choć jego życiorys nie
        musiał tego zakładać. Bez przeszkód przemieszczał się między Paryżem a
        Rzymem, spędzając wakacje na Korsyce z malarką Leonor Fini. Konstanty
        Jeleński był kimś, kogo można by nazwać światowcem, inteligentem, ale i
        ambasadorem polskich spraw oraz polskiej kultury za granicą. Jak podają
        źródła, wiele wskazuje na to, że jego biologicznym ojcem był Carlo
        Sforza, minister spraw zagranicznych Włoch, następnie ambasador w
        Paryżu.
      </p>
      <p className={classes.Podcast__paragraph_main}>
        „Fotografie nie oddają urody, którą zapamiętali przyjaciele. To musiało
        być coś więcej niż regularne rysy: dystynkcja, godność, szlachetność
        zapisane w ruchach, w spojrzeniu, rytmie mowy, przechyleniu głowy” –
        pisze o jednym ze zdjęć Jeleńskiego Anna Arno, ostatnio autorka niedawno
        wydanej książki „Kot. Opowieść o Konstantym A. Jeleńskim”. Posłuchajmy
        pierwszego odcinka opowieści.
      </p>
      <section className={classes.Podcast__player}>
        <iframe
          src="https://widget.spreaker.com/player?episode_id=33893438&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
          width="100%"
          height="200px"
          frameborder="0"
          title="Podcast__Tworcy_Emigracji_Jelenski_1"
        ></iframe>
      </section>
      <p className={classes.Paragraph__photo}>
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

export default Podcast_Jelenski_1 