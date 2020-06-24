import React from "react"

import PodcastTemplate from "../components/podcastTemplate/podscastTemplate"

const AboutProject = () => {

  const styles=[{fontSize: "calc(1.25rem - 15%)"}, {fontSize: "calc(.85rem - 15%)"}, {fontWeight: "bold"}]

  return (
    <>
      <PodcastTemplate>
        <h1 style={styles[0]}>O projekcie:</h1>
        <p style={styles[1]}>
          Strona została stworzona na potrzeby realizacji trzymiesięcznego
          programu stypendialnego Ministerstwa Kultury i Dziedzictwa Narodowego
          „Kultura w sieci”. Zamieszczane w kolejnych tygodniach podcasty, które
          są zapisem najczęściej internetowych rozmów (w czasie kiedy nie można
          było spotykać się osobiście), będą dotyczyć ważnych postaci polskiej
          kultury emigracyjnej, o których opowiedzą badacze ich twórczości oraz
          najbliżsi. Dowiemy się jaki wpływ miało doświadczenie emigracji m. in
          dla Gustawa Herlinga-Grudzińskiego, Jana Lebensteina, Zbigniewa
          Herberta, Jacka Bierezina, Konstantego Jeleńskiego, Romana Cieślewicza
          i wielu innych szerzej nieznanych polskiemu odbiorcy artystów, np.
          Pawła Jocza, Macieja Niemca, Tadeusza Brudzyńskiego. Celem projektu
          jest popularyzacja wiedzy o polskiej kulturze emigracyjnej.
        </p>
        <h1 style={styles[0]}>O autorze:</h1>
        <p style={styles[1]}>
          <span style={styles[2]}>Dawid Dziedziczak</span> – absolwent edytorstwa na Wydziale
          Polonistyki i historii sztuki na Wydziale Historycznym na
          Uniwersytecie Jagiellońskim w Krakowie. Przez ostatnie 9 lat do
          kwietnia tego roku, dziennikarz, reporter, prowadzący Programu II
          Polskiego Radia w Warszawie. Autor programów w pasmach „Notatnik
          Dwójki”, „Spotkania po zmroku”, „Kwadrans bez muzyki”, „Zapiski ze
          współczesności”, „O wszystkim z kulturą”, wydawca „Poranka Dwójki”
          oraz popołudniowego „Wybieram Dwójkę”.
        </p>
      </PodcastTemplate>
    </>
  )
}


export default AboutProject