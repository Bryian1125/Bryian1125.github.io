import "./Phonix.css"
import "../../frutigizerAero.css"

import phonixBackground from "../../assets/PhonixBackground.png"
import placeholder from "../.././assets/cmd.png"

export default function PhonixCard() {
  return(
    
    <div className = "win7">
      <div className = "win7-titlebar">
        <img className = "win7-icon" src = {placeholder} />
        <span className = "win7-title">Phonix</span>
        <div className = "win7-buttons">
          <button className = "win7-min"></button>
          <button className = "win7-max"></button>
          <button className = "win7-close"></button>
        </div>
      </div>
      <div>
        {/*Win 7 Content area*/}
        <div className = "caresyncMain">
           <img className = "caresyncBackground" src = {phonixBackground} />
        </div>
      </div>

    </div>
  )
}
