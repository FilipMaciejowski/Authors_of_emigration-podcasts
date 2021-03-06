import React from "react"
import { StaticQuery, graphql} from "gatsby"

import PodcastTemplate from "../templates/podcastTemplate/podscastTemplate"
import Ministry from "../components/ministry/ministry"

const AboutProject = (data) => {

  const styles=[{fontSize: "calc(1.25rem - 20%)"}, {fontSize: "calc(.85rem - 15%)"}, {fontWeight: "bold"}]
  const styles2 = [
    { fontSize: "calc(1.25rem - 7.5%)" },
    { fontSize: "calc(.85rem - 7.5%)" },
    { fontWeight: "bold" },
  ]

  return (
    <StaticQuery 
    query={graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
    `
}

    render={ data => (<PodcastTemplate aboutProject={true}>
        <h1 style={styles[0]}>O projekcie:</h1>
        <p style={styles2[1]}>
          Strona została stworzona na potrzeby realizacji trzymiesięcznego
          programu stypendialnego Ministerstwa Kultury i Dziedzictwa Narodowego
          „Kultura w sieci”. Zamieszczane w kolejnych tygodniach podcasty będą
          dotyczyć ważnych postaci polskiej kultury emigracyjnej, o których
          opowiedzą badacze ich twórczości oraz najbliżsi. Dowiemy się jaki
          wpływ miało doświadczenie emigracji m. in. dla Gustawa
          Herlinga-Grudzińskiego, Jana Lebensteina, Zbigniewa Herberta, Józefa
          Czapskiego, Jacka Bierezina, Konstantego Jeleńskiego, Romana
          Cieślewicza oraz wielu innych szerzej nieznanych polskiemu odbiorcy
          artystów, np. Pawła Jocza, Macieja Niemca, Tadeusza Brudzyńskiego.
        </p>
        <p style={styles2[1]}>
          Rozmowy są rejestrowane najczęściej przy użyciu internetowych
          komunikatorów, niekiedy z gośćmi, którzy wciąż przebywają poza
          granicami Polski. W kontekście panującej pandemii ten bardzo ostatnio
          popularny sposób porozumiewania się zyskuje wymiar poniekąd
          symboliczny – emigracja oddalała bowiem od siebie przyjaciół,
          rodziny, zmuszała do kontaktu jednymi możliwymi kanałami. Celem
          przedsięwzięcia jest przede wszystkim popularyzacja wiedzy na temat
          polskiej kultury emigracyjnej i dokumentacja wspomnień na temat
          wymienionych osób.
        </p>
        <Ministry />
        <h1 style={styles[0]}>O autorze:</h1>
        <p style={styles[1]}>
          <span style={styles[2]}>{data.site.siteMetadata.author}</span> – absolwent
          edytorstwa na Wydziale Polonistyki oraz historii sztuki na Wydziale
          Historycznym Uniwersytetu Jagiellońskiego w Krakowie. Przez ostatnie
          9 lat dziennikarz, reporter, wydawca
          Programu II Polskiego Radia w Warszawie. Autor audycji w pasmach
          „Notatnik Dwójki”, „Spotkania po zmroku”, „Kwadrans bez muzyki”,
          „Zapiski ze współczesności”, „O wszystkim z kulturą”, wydawca „Poranka
          Dwójki” oraz popołudniowego „Wybieram Dwójkę”.
        </p>
      </PodcastTemplate>)}
      />
  )
}


export default AboutProject