import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Docker from "./docker/docker.tsx"
import ProfilePage from "./profilePage/profilePage.tsx"
import ProjectsPage from "./projectsPage/projectsPage.tsx"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div>

        {/*Main page switcher*/}
        <div className = "pagesDiv">
          <Routes>
            <Route path = "/" element = {<ProfilePage />}/>
            <Route path = "/projects" element = {<ProjectsPage />}/>
          </Routes>
        </div>

        {/*Docker*/}
        <div className="dockerDiv" >
          <Docker />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
