import iMac from ".././assets/iMacG3Transparent.png"
import kittyGif from ".././assets/sillykitty.gif"

import "./projectsPage.css"
import ".././frutigizerAero.css"

{/*Project Cards*/}
import PhonixCard from "./Projects/Phonix.tsx"
import CaresyncCard from "./Projects/Caresync.tsx"
import CentralEchoSiteCard from "./Projects/CentralEchoSite.tsx"


export default function ProjectsPage() {
  return(
    <div className = "projectsDiv">

    {/*Projects Display*/}
      <div className = "projectsGrid">
        <CaresyncCard />
        <PhonixCard />
        <CentralEchoSiteCard />
        <CaresyncCard />
        <PhonixCard />
        <CentralEchoSiteCard />
      </div>

      {/*iMac Display*/}
      <div className = "projectsSideDiv">
        <img className = "projectsiMacDiv" src = {iMac}/>
        <img className = "projectsiMacScreen" src = {kittyGif}/>
      </div>
    </div>
  )
}
