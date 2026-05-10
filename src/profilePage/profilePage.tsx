import ".././frutigizerAero.css"  
import "./profilePage.css"

import ProfileCard from "./profileCard.tsx"
import InfoCard from "./infoCard.tsx"
import SidePanel from "./sidePanel.tsx"


export default function profilePage() {
  return(
    <div className = "mainWrapper" id = "ProfilePage" >
      <div className = "leftWrapper">

        {/* Profile panel */}
        <div>
	        <ProfileCard />
        </div>

        {/* Info panel */}
        <div>
          <InfoCard />
        </div>

      </div>
        <SidePanel />
      {/* Side panel */}
      <div>

      </div>
    </div>


  )
}

