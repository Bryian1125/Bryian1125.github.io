import cmdIcon from ".././assets/cmd.png"

import ".././frutigizerAero.css"
import "./sidePanel.css"

export default function SidePanel() {
  return(
    <div className = "win7 sidePanelTopBar" id = "sidePanel">
        <div className = "win7-titlebar">
          <img className = "win7-icon" src = {cmdIcon}/>
          <span className = "win7-title">About me</span>
          <div className = "win7-buttons">
            <button className = "win7-min"></button>
            <button className = "win7-max"></button>
            <button className = "win7-close"></button>
          </div>
        </div>
        <div className = "win7-content sidePanelContent">
          <pre className = "formattedText">{`
oooo                  oooo  oooo                  .   oooo                                     .o. 
\`888                  \`888  \`888                .o8   \`888                                     888
 888 .oo.    .ooooo.   888   888   .ooooo.    .o888oo  888 .oo.    .ooooo.  oooo d8b  .ooooo.  888 
 888P"Y88b  d88' \`88b  888   888  d88' \`88b     888    888P"Y88b  d88' \`88b \`888""8P d88' \`88b Y8P 
 888   888  888ooo888  888   888  888   888     888    888   888  888ooo888  888     888ooo888 \`8' 
 888   888  888    .o  888   888  888   888     888 .  888   888  888    .o  888     888    .o .o. 
o888o o888o \`Y8bod8P' o888o o888o \`Y8bod8P'     "888" o888o o888o \`Y8bod8P' d888b    \`Y8bod8P' Y8P 
          `}</pre>
          <p className = "line">-------------------------------------------------------------------------------------------------
          </p>
          <p className = "formattedParagraph" >
          <span style = {{fontWeight: "bold"}}>Education:</span> <br/> 
          [2025-<span style = {{color: "rgba(215,215,255,0.25)"}}>2029</span>] 
          Central Philippine University - BS Software Engineering<br/>
          [2019-2025] Capiz National High School - Science, Technology, & Engineering <br/><br/>

          <span style = {{fontWeight: "bold"}}>Work History:</span><br/>
          [2026-Now] Philippine Society of Software Engineers - VP Internal <br/> 
          [2026-Now] SEDS Philippines - Website Management Head<br/>
          [2025-2026] Miracle Studios - UI/UX Developer<br/><br/>

	        <span style = {{fontWeight: "bold"}}>
            <span>Technologies:</span><br/>
            <span style = {{color: "rgba(80,185,255,1)"}}> [TypeScript]</span>, 
            <span style = {{color: "rgba(95,255,95,1)"}}> [Node.js]</span>, 
            <span style = {{color: "rgba(65,185,255,1)"}}> [React]</span>, 
            <span style = {{color: "rgba(200,125,255,1)"}}> [CSS]</span>, 
            <span style = {{color: "rgba(105,90,255,1)"}}> [Lua]</span>, 
            <span style = {{color: "rgba(255,220,30,1)"}}> [Python]</span>, 
            <span style = {{color: "rgba(255,120,90,1)"}}> [Java]</span>, 
            <span style = {{color: "rgba(40,180,255,1)"}}> [Cpp]</span>,
            <span style = {{color: "rgba(70,135,255,1)"}}> [Postgres]</span>,
            <span style = {{color: "rgba(255,200,50,1)"}}> [Cloudflare D1]</span>,
            <span style = {{color: "rgba(75,195,195,1)"}}> [ESA-SNAP]</span>,
            <span style = {{color: "rgba(135,255,135,1)"}}> [QGIS]</span>,
            <span style = {{color: "rgba(95,145,255,1)"}}> [Godot]</span>,
            <span style = {{color: "rgba(255,65,65,1)"}}> [Roblox Studio]</span>
          </span>
          <br/><br/><br/><br/></p>
               
        </div>
      </div>
  )
}


