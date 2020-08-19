import React from "react"

import classes from "./ObserverHelper.module.css"

const ObserverHelper = ({ref}) => (
    <div ref={ref} className={classes.Nav__observer_helper}></div>
)

export default ObserverHelper