import React from "react"

import classes from "./footer.module.css"

const Footer = ({data, children}) => {
  return (
    <div className={classes.Style}>
      <footer>
        <p className={classes.Text}>
          {children} {data}
        </p>
      </footer>
    </div>
  )
}

export default Footer