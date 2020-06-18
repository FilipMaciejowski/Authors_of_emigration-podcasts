import React from "react"
import under from "../../assets/images/under_construction.png"
import classes from "../underConstruction/underConstruction.module.css"

const UnderConstruction = () => {
  return (
    <div className={classes.Layout}>
      <h1>Strona w budowie!!!</h1>
      {/* <img className={classes.Under_contruction} src={under} alt="" /> */}
      <h2>Kontakt: dawid.dziedziczak@gmail.com</h2>
    </div>
  )
}

export default UnderConstruction