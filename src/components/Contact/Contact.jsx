import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className='contact-div'>
      <div className="row">
        <div className="col" size="md-12">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row contact-row">
        <div className="class" size="md-12">
          <p className="about-me-contact">
            Email: mnezz1131@gmail.com &nbsp; | &nbsp; Phone: 512-785-0540
            &nbsp; | &nbsp;
            <a href="https://www.linkedin.com/in/michael-nezzer-11b956196/">
              {" "}
              LinkedIn
            </a>{" "}
            &nbsp;| &nbsp; <a href="https://github.com/mnezz1131"> Git Hub</a>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
