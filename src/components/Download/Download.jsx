import React from 'react'
import "./Download.css"

function Download() {
  return (
    <div className='download-div'>
      <h1>Download Resume</h1>
        <div className="download_resume">
     
        <a className="download_link" href="/docs/MikeNezzer_resume.docx.pdf" download> Resume </a>
       
      </div>
    </div>
  )
}

export default Download
