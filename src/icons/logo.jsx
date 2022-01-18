import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Logo(props) {
  return (
    <StaticImage
      src="../images/logo.png"
      width={100}
      alt="logo"
      placeholder="tracedSVG"
      fill="none"
    />
  )
}

export default Logo
