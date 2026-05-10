import InfoIcon from ".././assets/InfoIcon.png"
import ProjectsIcon from ".././assets/ProjectsIcon.png"
import GamesIcon from ".././assets/GamesIcon.png"
import GithubIcon from ".././assets/GithubIcon.png"

import "./docker.css"

export default function Docker() {
  return (  
    <div id = "lowerButtonContainer" className = "lowerButtonContainer">

      {/* Profile button */}
      <button className = "bubbleButton">
        <img src={InfoIcon} className = "buttonImage"/>
      </button>
  
      {/* Projects button */}
      <button className = "bubbleButton">
        <img src={ProjectsIcon} className = "buttonImage"/>
      </button>
  
      {/* Games button */}
      <button className = "bubbleButton">
        <img src={GamesIcon} className = "buttonImage"/>
      </button>

      {/* Github button */}
      <button className = "bubbleButton">
        <img src={GithubIcon} className = "buttonImage"/>
      </button>
    </div>
  )
}
