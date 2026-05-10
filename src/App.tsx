import { BrowserRouter } from "react-router";
import { useState } from 'react'
import Docker from "./docker/docker.tsx"
import ProfilePage from "./profilePage/profilePage.tsx"

import "./App.css"

function App() {
  const [count, setCount] = useState(0)

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
