import React,{useState, useEffect} from  "react"

import classes from "./SVGContainer.module.css"


const SVGContainer = ({scroll, imageClass, mainClass, onScrollClass}) => {
  const [assignedMainClass, setAssignedMainClass] = useState()

  useEffect(()=>{
    setAssignedMainClass(classes.OnLoad)
    })

  return (
    <div className={assignedMainClass && !scroll ? assignedMainClass : [classes[mainClass], classes[onScrollClass]].join(' ')}>
      <img
        className={assignedMainClass && !scroll ? assignedMainClass : [classes[imageClass], classes[onScrollClass]].join(' ')}
        src={require("../../assets/images/Logo.svg")}
        alt="Tworcy_emigracji-Logo"
      />
    </div>
  )
}

export default SVGContainer