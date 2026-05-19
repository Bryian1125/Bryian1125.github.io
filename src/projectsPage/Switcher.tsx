import leftArrow from ".././assets/ArrowLeft.png"
import rightArrow from ".././assets/ArrowRight.png"

import "./Switcher.css"

export default function Switcher() {
  return(
    <div className = "switcherWrapper">
      <img classname = "switcherarrowbutton" src = {leftArrow}/>
      <img classname = "switcherarrowbutton" src = {rightArrow}/>
    </div>
  )
}
