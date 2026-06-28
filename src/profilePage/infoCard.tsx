import infoIcon from ".././assets/Info.png"

import ".././frutigizerAero.css"
import "./infoCard.css"

export default function InfoCard() {
  return(
    <div className = "win7 infoTopBar" id = "infoPanel">
      <div className= "win7-titlebar" >
        <img className= "win7-icon" src={infoIcon}/>
        <span className= "win7-title" >Info</span>
        <div className= "win7-buttons" >
          <button className= "win7-min" ></button>
          <button className= "win7-max" ></button>
          <button className= "win7-close" ></button>
        </div>
      </div>
    <div className= "win7-content infoContent">

      <div className = "infoContentHeader">
        <div className = "infoContentHeaderSelectedTab">
          <p className = "infoContentHeaderTabText">README.md ×</p>
        </div>
        <div className = "infoContentHeaderTab">
          <p className = "infoContentHeaderTabText">init.lua ×</p>
        </div>
        <div className = "infoContentHeaderTab">
          <p className = "infoContentHeaderTabText">utils.lua ×</p>
        </div>

      </div>

      <div className = "contentWrapper">
        <div className = "editorLines">
          1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>
        </div>
          <p className = "paragraph">
	          Engineering student with diverse experience in 
	          <span className = "highlight"> web development</span>
	          , <span className = "highlight">GIS systems</span>
	          , <span className = "highlight">remote sensing</span>
	          , <span className = "highlight">game development</span>
            , <span className = "highlight">embedded systems</span>
	          , and <span className = "highlight">AI</span>.
            <br/> <br/> 
            When i'm not coding, im probably playing with   satellite data
            <br/><br/>
            (I use vim btw)
	        </p>
        </div>
      </div>
    </div>

  )
}
