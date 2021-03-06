import React from "react"

import classes from "./contact.module.css"
import Context from "../context"

const Contact = ({ mobile }) => {

  
  return (
    <Context.Consumer>
      {context =>
        mobile ? (
          <div className={classes.Contact__text_container}>
            <p className={classes.Contact__text}>
              <a href="mailto: dawid.dziedziczak@gmail.com">
                dawid.dziedziczak@gmail.com
              </a>
              <span role="button" onClick={context.close}>
              </span>
            </p>
          </div>
        ) : (
          <div className={classes.Contact__layout}>
            <div>
              <div role="button" onClick={context.close} className={classes.Close}></div>
            </div>
            <div className={classes.Contact__text_container}>
              <p className={classes.Contact__text}>
                <a href="mailto: dawid.dziedziczak@gmail.com">
                  dawid.dziedziczak@gmail.com
                </a>
              </p>
            </div>
          </div>
        )
      }
    </Context.Consumer>
  )
}

export default Contact
