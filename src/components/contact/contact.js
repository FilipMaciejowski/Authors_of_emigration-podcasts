import React from "react"

import classes from "./contact.module.css"
import Context from "../context"


 

const Contact = () => {
  return (
    <div className={classes.Contact__layout}>
      <div>
        <Context.Consumer>
          {context => (
            <div onClick={context.close} className={classes.Close}></div>
          )}
        </Context.Consumer>
      </div>
      <div>
        <p className={classes.Contact__text}>
          <a href="mailto: dawid.dziedziczak@gmail.com">
            dawid.dziedziczak@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact