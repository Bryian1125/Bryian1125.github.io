import { BrowserRouter } from "react-router";
import Docker from "./docker/docker.tsx"
import ProfilePage from "./profilePage/profilePage.tsx"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className = "pagesDiv">
          <ProfilePage />
        </div>

        <div className="dockerDiv" >
          <Docker />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
