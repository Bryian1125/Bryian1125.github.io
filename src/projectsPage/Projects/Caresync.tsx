import "./Caresync.css"

import GithubIcon from "../.././assets/github.png"
import WebsiteIcon from "../.././assets/Website.png"

export default function phonixPage() {
  return(

    <div className = "caresyncMain">
      
      {/*Header*/}
      <div className = "caresyncHeader">

        {/*Header Text*/}
        <p className = "caresyncHeaderTitleFont"> Caresync </p>
	<p className = "caresyncHeaderSubtextFont"></p>
	
	{/*Buttons*/}
	<div className = "caresyncHeaderButtonWrapper">
	  <a href = "https://github.com/dslvd/phonix-dev"  target = "_blank">
	    <img className = "caresyncHeaderButton" src = {GithubIcon}/>
          </a>

	  <a href = "https://caresync-theta-umber.vercel.app/" target = "_blank">
	    <img className = "caresyncHeaderButton" src = {WebsiteIcon}/>
	  </a>
	</div>
      </div>

      {/*Content*/}
      <div className = "caresyncContent">

	<div className = "caresyncescription">

	 {/*Description Text*/}
	  <p className = "caresyncDescriptionText">
	    <span className = "caresyncDescriptionTitle">
	      What is Caresync?
	    </span>
            <br/>

	    Caresync is a hospital bed patient triage system that we built as a team for our SE-1243 Software Development II class in my freshman year.
	  </p>
	  <p className = "caresyncDescriptionText">
            For this Project I built a lot of the Core systems and system architecture, as well as revamping and cleaning the UI.
	  </p>

	</div>
      </div>

      <div className = "caresyncFooter">
        <p className = "caresyncStackText"> 
          <span style = {{color: "rgba(80,185,255,1)"}}> [TypeScript]</span>
	  <span style = {{color: "rgba(200,125,255,1)"}}> [CSS]</span>
	</p>
      </div>
    </div>

  )
}
