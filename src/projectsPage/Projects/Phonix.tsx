import "./Phonix.css"

import GithubIcon from "../.././assets/github.png"
import WebsiteIcon from "../.././assets/Website.png"
import PhonixShowcase from "../.././assets/PhonixShowcase.png"

export default function phonixPage() {
  return(

    <div className = "phonixMain">
      
      {/*Header*/}
      <div className = "phonixHeader">

        {/*Header Text*/}
        <p className = "phonixHeaderTitleFont"> phonix </p>
	<p className = "phonixHeaderSubtextFont">learning beyond language barriers</p>
	
	{/*Buttons*/}
	<div className = "phonixHeaderButtonWrapper">
	  <a href = "https://github.com/dslvd/phonix-dev"  target = "_blank">
	    <img className = "phonixHeaderButton" src = {GithubIcon}/>
          </a>

	  <a href = "https://phonix.page/" target = "_blank">
	    <img className = "phonixHeaderButton" src = {WebsiteIcon}/>
	  </a>
	</div>
      </div>

      {/*Content*/}
      <div className = "phonixContent">
        {/*Display Image*/}
        <img className = "phonixDisplay" src = {PhonixShowcase}/>

	<div className = "phonixDescription">

	 {/*Description Text*/}
	  <p className = "phonixDescriptionText">
	    <span className = "phonixDescriptionTitle">
	      What is Phonix?
	    </span>
            <br/>

	    Phonix is an AI-Based Translation & Language Learning WebApp that we built as a team for our SE-1243 class in my freshman year.
	  </p>
	  <p className = "phonixDescriptionText">
            I primarily worked on frontend code, UI design, art design, branding, and refactoring and cleaning up old AI generated code.
	  </p>

	</div>
      </div>

      <div className = "phonixFooter">
        <p className = "phonixStackText"> 
          <span style = {{color: "rgba(80,185,255,1)"}}> [TypeScript]</span>
	  <span style = {{color: "rgba(65,185,255,1)"}}> [React]</span>
	  <span style = {{color: "rgba(200,125,255,1)"}}> [CSS]</span>
	  <span style = {{color: "rgba(255,200,50,1)"}}> [Cloudflare D1]</span>
	  <span style = {{color: "rgba(0,150,255,1"}}> [Gemini API]</span>
	</p>
      </div>
    </div>

  )
}
