import React from 'react'
import Download from '../Download/Download'
import "./Contact.css"
import Layout from '../Layout/Layout'

function Contact() {
  return (
    <Layout>
    <div className='contact-div'>
      <div className="row">
        <div className="col" size="md-12">
            <h1 className='contact-title'>Contact</h1>
            <p className = 'contact-p'>Please contact me for additional information, to schedule job interviews or for freelance web design consultations.</p>
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
      <Download />
      </div>
      </Layout>
  )
}

export default Contact
