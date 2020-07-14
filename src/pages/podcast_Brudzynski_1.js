import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast_Brudzynski_1 = () => {
  const styles = [
    { fontSize: "calc(1.25rem - 15%)" },
    { fontSize: "calc(.85rem - 15%)" },
  ]
  return (
    <PodcastTemplate>
      <h1 style={styles[0]}>Tadeusz Brudzyński, odc. 1</h1>
      <p style={styles[1]}>
        Urodził się w Warszawie w 1956 roku. W latach 1970-1973 przebywał z
        rodzicami w Kinszasie. Na studia malarskie wyjechał do Tuluzy, ale
        szybko przeniósł się do Warszawy, do pracowni prof. Jacka Sienickiego. W
        1983 roku wyjechał do Paryża, gdzie pozostał do śmierci w 1996 roku.
        Życie artysty wypełnione było bogatymi doświadczeniami podróży,
        znakomitą historią rodzinną, wyjątkową wrażliwością, ale zapewne też
        nadzieją na swobodny rozwój twórczości poza granicami Polski.
      </p>
      <p style={styles[1]}>
        „Tadek był dzieckiem bardzo wrażliwym. Być może dlatego, że urodził się
        w okresie przeżyć, między Wypadkami Poznańskimi a Powstaniem w
        Budapeszcie. Imiona wybraliśmy mu Tadeusz – Adam. Pierwsze po dziadku,
        wówczas już 79-letnim, przez komunę wydziedziczonym właścicielu majątku
        Pniewo w powiecie kutnowskim. Drugie dla uczczenia Adama Borysa, dowódcy
        batalionu AK „Parasol”, w którym niemałe zasługi w okresie konspiracji i
        Powstania położyła matka Tadzia, Hania Karczewska, sanitariuszka „Zula”
        […]. Mówią niektórzy, że malarstwo Tadka jest smutne, że jakby
        przewijała się w nim myśl o śmierci. Jeśli jest w tym trochę prawdy, to
        przyczyny mogły być różne, ale wrażenia z dzieciństwa na pewno nie są
        bez znaczenia” – tak pisał ojciec malarza.
      </p>
      <p style={styles[1]}>
        W tekście poświęconym synowi dodaje, że obecność śmierci towarzyszyła
        dziecku od najmłodszych lat – przy wspominaniu w domu przez rodziców i
        ich przyjaciół dawnych kompanów walki, przez to, że naprzeciwko
        przedszkola, gdzie uczęszczał mały Tadzio mieściła się kostnica szpitala
        dziecięcego, co powodowało w umyśle dziecka wiele pytań, w końcu przez
        to, że w dzieciństwie stracił przyjaciela. O Tadeuszu Brudzyńskim i jego
        rodzinie opowiada Małgorzata Brudzyńska, była żona artysty.
      </p>
      <p style={styles[1]}>
        Cytaty i informacje pochodzą z książki wydanej staraniem rodziny
        malarza, m. in. ojca – Andrzeja Brudzyńskiego (więcej na jego temat <a style={{textDecoration:"none", color: "var(--main_black", fontWeight: "600"}}href="https://www.1944.pl/archiwum-historii-mowionej/andrzej-brudzynski,3357.html">
          tutaj
        </a>
        ).
      </p>
      <section className={classes.Podcast__player}>
        <iframe
          src="https://widget.spreaker.com/player?episode_id=39525613&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
          width="100%"
          height="200px"
          frameborder="0"
        ></iframe>
      </section>
      <p style={{ fontSize: "calc(.85rem - 25%)" }}>
        Zdjęcie artysty z archiwum rodzinnego.{" "}
      </p>
    </PodcastTemplate>
  )
}

export default Podcast_Brudzynski_1
