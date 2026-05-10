import BlueProfile from ".././assets/BlueProfile.png"
import BryianProfile from ".././assets/BryianProfile.png"

import ".././frutigizerAero.css"
import "./profileCard.css"

export default function ProfileCard() {
  return(
    <div className="win7 profileTopBar" id = "profilePanel">
      <div className="win7-titlebar">
        <img className="win7-icon" src={BlueProfile}/>
        <span className="win7-title">Profile</span>
        <div className="win7-buttons">
          <button className="win7-min"></button>
          <button className="win7-max"></button>
          <button className="win7-close"></button>
        </div>
      </div>

      <div className="win7-content profileContent">
        <img className = "profileImage" src={BryianProfile}/>
        <div className = "textDiv">
           <h1 className = "name">Brian Azarraga</h1>
           <h2 className = "subtext">Iloilo, Philippines</h2>
        </div>
      </div>
    </div>
  )
}
