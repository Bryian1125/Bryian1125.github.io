import { Routes, Route } from 'react-router-dom';

import placeholder from ".././assets/cmd.png"
import iMac from ".././assets/iMacG3Transparent.png"

import "./projectsPage.css"
import ".././frutigizerAero.css"


{/*Switcher*/}
import Switcher from "./Switcher.tsx"


{/*Project Cards*/}
import PhonixCard from "./Projects/Phonix.tsx"
import CaresyncCard from "./Projects/Caresync.tsx"


export default function ProjectsPage() {
  return(
    <div className = "projectsDiv">

    {/*Projects Display*/}

      <div className = "projectsLeftWrapper">
        <div className = "win7 projectsTabDiv">
          <div className = "win7-titlebar">
            <img className = "win7-icon" src = {placeholder} />
            <span className = "win7-title">Projects</span>
            <div className = "win7-buttons">
              <button className = "win7-min"></button>
              <button className = "win7-max"></button>
              <button className = "win7-close"></button>
            </div>
          </div>
          <Routes>
            <Route path = "/" element = {<CaresyncCard />}/>
          </Routes>
        </div>

        <div>
          <Switcher />
        </div>
      </div>

      {/*iMac Display*/}
      <div className = "projectsSideDiv">
        <img className = "projectsiMacDiv" src = {iMac}/>
      </div>
    </div>
  )
}
