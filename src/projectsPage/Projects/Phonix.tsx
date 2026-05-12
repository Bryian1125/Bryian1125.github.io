import "./Phonix.css"

import PhonixShowcase from "../.././assets/PhonixShowcase.png"

export default function phonixPage() {
  return(

    <div className = "phonixMain">
      
      {/*Header*/}
      <div className = "phonixHeader">
        <p className = "phonixHeaderTitleFont"> phonix </p>
	<p className = "phonixHeaderSubtextFont">learning beyond language barriers</p>
      </div>

      {/*Content*/}
      <div className = "phonixContent">
        {/*Display Image*/}
        <img className = "phonixDisplay" src = {PhonixShowcase}/>

	<div className = "phonixDescription">


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
    </div>

  )
}
