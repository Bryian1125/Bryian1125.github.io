import infoIcon from ".././assets/Info.png"

import ".././frutigizerAero.css"
import "./infoCard.css"

export default function InfoCard() {
  return(
    <div class = "win7 infoTopBar" id = "infoPanel">
      <div class="win7-titlebar">
        <img class="win7-icon" src="Images/Info.png"/>
        <span class="win7-title">Info</span>
        <div class="win7-buttons">
          <button class="win7-min"></button>
          <button class="win7-max"></button>
          <button class="win7-close"></button>
        </div>
      </div>
    <div class="win7-content infoContent">
      <div class = "contentWrapper">
        <div class = "editorLines">
          1<br/>2<br/>3<br/>4<br/>5<br/>6
        </div>
          <p class = "paragraph">
	    Engineering student with diverse experience in 
	    <span class = "highlight"> web development</span>
	    , <span class = "highlight">GIS systems</span>
	    , <span class = "highlight">remote sensing</span>
	    , <span class = "highlight">game development</span>
	    , and <span class = "highlight">AI</span>.<br/> <br/> 
            When i'm not coding, im probably playing with   satellite data
	        </p>
        </div>
      </div>
    </div>

  )
}
