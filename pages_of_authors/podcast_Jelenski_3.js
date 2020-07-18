import React from "react"

import PodcastTemplate from "../src/components/podcastTemplate/podscastTemplate"
import classes from "../components/podcastTemplate/podcastTemplate.module.css"

const Podcast1 = () => {
  
  return (
    <PodcastTemplate>
      <h1 className={classes.Podcast__paragraph_heading}>
        Konstany Jeleński, odc. 3
      </h1>
      <p className={classes.Podcast__paragraph_main}>
        „Uświadomiłem sobie, jak wiele miejsca zajął w moim życiu i jak bardzo
        na moją wdzięczność zasłużył. Przez całe lata miałem jednego tylko
        czytelnika, jego […]” – pisał Czesław Miłosz o Konstantym Jeleńskim.
        Zbigniew Herbert zadedykował mu swój słynny esej „Siena”, który
        zamieszczony został w zbiorze „Barbarzyńca w ogrodzie”, pisząc
        „Konstantemu Jeleńskiemu – Aleksandryjczykowi”. Witold Gombrowicza
        dodawał w swoim „Dzienniku” – „[…] od dawna, może nigdy, nie zdarzyła mi
        się afirmacja tak zdecydowana i zarazem bezinteresowna tego, czym
        jestem, tego, co piszę”. Jeleński zafascynował się dziełem autora
        „Ferdydurke” jako nastolatek, rozpoznając w nim siebie, swoje otoczenie
        i podobny ogląd świata. Po wojnie próbował odnaleźć się w tworzącym się
        środowisku polskiej emigracji, najsilniej wiążąc się z twórcami
        paryskiej „Kultury”. Był znakomitym eseistą, znał kilka języków, miał
        liczne kontakty w kręgach europejskiej arystokracji i środowisku
        artystycznym. Jego związek z malarką Leonor Fini to historia uczucia,
        które przetrwało do ostatnich dni. Podobnie jak Józef Czapski był
        znakomitym „ambasadorem” polskich spraw, a jednocześnie „barwnym
        ptakiem” jak dodaje Anna Arno. Więcej w trzecim, ostatnim odcinku tej
        odsłony na temat Konstantego Jeleńskiego.
      </p>
      <section className={classes.Podcast__player}>
        <iframe
          src="https://widget.spreaker.com/player?episode_id=33900836&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"
          width="100%"
          height="200px"
          frameborder="0"
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

export default Podcast1
