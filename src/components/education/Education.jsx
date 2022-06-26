import React from 'react'
import "./education.scss"
export default function Education() {
  return (
    <div className="education" id="education">
      <div className="left">
        <div className="text">
          <h1>
            Education History
          </h1>
        </div>
        
        <div className="edu1">
        <div className="dal">
        
        <img src="assets/dallogo.jpg" alt="" />
            
        </div>
        
          <h3 >Master of Applied Computer Science</h3>
          <h4>Dalhousie University, Halifax, Canada</h4>
          <h3>September 2021 - December 2022</h3>
          
        </div>
        
        <div className="edu2">
        <div className="gtu">
        
        <img src="assets/gtu-removebg-preview.png" alt="" />
            
        </div>
          
        <h3>Bachelor of Engineering (Information Technology)</h3>
          <h4>Gujarat Technological University, Gujarat, India</h4>
          <h3>August 2017 - July 2021 (8.8/10 CGPA)</h3>
        </div>
        
      </div>
      <div className="right">
        <div className="text2">
          <h1>
            Skills
          </h1>
        </div>
        <div className="head">
        <h3>Programming Languages:</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Python, JavaScript, JAVA, C++, C, Kotlin, HTML, CSS</li>
        </ul>
        <h3>Frameworks:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">React, Flask, BootStrap, Django, Angular, .NET</li>
        </ul>
        <h3>Database:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">MongoDB, Firebase, MySQL</li>
        </ul>
        <h3>Cloud Technologies:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Amazon S3, Amazon IAM, AWS Lambda, AWS SNS, AWS Console, Cognito, Google Compute Engine, Docker</li>
        </ul>
        <h3>Version Control:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Git, GitHub, GitLab</li>
        </ul>

      </div>

    </div>
  )
}
