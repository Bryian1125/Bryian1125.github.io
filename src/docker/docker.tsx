import { useNavigate } from 'react-router-dom';

import InfoIcon from ".././assets/InfoIcon.png"
import ProjectsIcon from ".././assets/ProjectsIcon.png"
import GamesIcon from ".././assets/GamesIcon.png"
import GithubIcon from ".././assets/GithubIcon.png"

import "./docker.css"

export default function Docker() {
  const navigate = useNavigate();

  return (  
    <div id = "lowerButtonContainer" className = "lowerButtonContainer">

      {/* Profile button */}
      <button className = "bubbleButton" onClick={() => navigate('/')}>
        <img src={InfoIcon} className = "buttonImage"/>
      </button>
  
      {/* Projects button */}
      <button className = "bubbleButton">
        <img src={ProjectsIcon} className = "buttonImage" onClick={() => navigate('/projects')}/>
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
