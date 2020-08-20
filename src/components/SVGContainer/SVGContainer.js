import React,{useState, useEffect} from  "react"

import classes from "./SVGContainer.module.css"


const SVGContainer = ({scroll, imageClass, mainClass, onScrollClass}) => {
  const [assignedmainClass, setAssignedMainClass] = useState()
  useEffect(()=>{
    setAssignedMainClass(classes.OnLoad)
    })

  return (
    <div className={assignedmainClass && !scroll ? assignedmainClass : [classes[mainClass], classes[onScrollClass]].join(' ')}>
      <img
        className={assignedmainClass && !scroll ? assignedmainClass : [classes[imageClass], classes[onScrollClass]].join(' ')}
        src={require("../../assets/images/Logo.svg")}
        alt="Tworcy_emigracji-Logo"
      />
    </div>
  )
}

export default SVGContainer