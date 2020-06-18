import React from "react"

import classes from "./footer.module.css"

const Footer = ({data}) => {
  return (
    <div className={classes.Style}>
      <footer>
        <p className={classes.Text}>
          © {new Date().getFullYear()}, Designed and built by {data}
        </p>
      </footer>
    </div>
  )
}

export default Footer