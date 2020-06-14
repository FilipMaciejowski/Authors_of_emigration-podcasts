import React from "react"
import under from "../../assets/images/under_construction.png"
import classes from "../underConstruction/underConstruction.module.css"

const UnderConstruction = () => {
  return (
    <div className={classes.Layout}>
      <h1>Twórcy emigracji: Strona w budowie!!!</h1>
      <img className={classes.Under_contruction} src={under} alt="" />
      <p>
        Ruszamy od: <b>01.01.2020</b>
      </p>
      <br />
      <p>Kontakt: dawid.dziedziczak@gmail.com</p>
    </div>
  )
}

export default UnderConstruction