import React from "react"

const Footer = ({data}) => {
  return <footer>© {new Date().getFullYear()}, Built by {data}</footer>
}

export default Footer