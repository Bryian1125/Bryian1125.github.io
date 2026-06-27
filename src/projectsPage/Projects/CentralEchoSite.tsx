import "./CentralEchoSite.css"
import "../../frutigizerAero.css"

import GithubIcon from "../.././assets/github.png"
import WebsiteIcon from "../.././assets/Website.png"
import placeholder from "../.././assets/cmd.png"

export default function CentralEchoSiteCard() {
  return(
    
    <div className = "win7">
      <div className = "win7-titlebar">
        <img className = "win7-icon" src = {placeholder} />
        <span className = "win7-title">Central Echo Site</span>
        <div className = "win7-buttons">
          <button className = "win7-min"></button>
          <button className = "win7-max"></button>
          <button className = "win7-close"></button>
        </div>
      </div>
      <div>
      {/*Win 7 Content area*/}
      </div>

    </div>
  )
}
