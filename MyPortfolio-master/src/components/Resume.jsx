import React from 'react'

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Education &amp; Experience</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
           
           

            <h3 className="resume-title">Education </h3>
            <div className="resume-item">
              {/* SRMS COLLEGE OF ENGINEERING, TECHNOLOGY & RESEARCH | 2020 - 2024
Course: Bachelor of Technology - Computer Science Engineering |7.45 */}
              <h4> Bachelor of Technology - Computer Science Engineering</h4>
              <h5>2020 - 2024</h5>
              <p><em>SRMS COLLEGE OF ENGINEERING, TECHNOLOGY & RESEARCH </em></p>
              <h5>Grade: 7.45</h5>
             
            </div>
            {/*Bishop Conrad Senior Secondary School
Course: Intermediate (XII) | 2020 |89% */}
            <div className="resume-item">
              <h4>Intermediate (XII)</h4>
              <h5>2019 - 2020</h5>
              <p><em>Bishop Conrad Senior Secondary School</em></p>
              <h5>Percentage 
                :
                89
              </h5>
              
            </div>


            <div className="resume-item">
              <h4>Intermediate (X)</h4>
              <h5>2017 - 2018</h5>
              <p><em>Bishop Conrad Senior Secondary School</em></p>
              <h5>Percentage 
                :
                89
              </h5>
              
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>FullStack Developer(MERN) Intern</h4>
              <h5>April 2023 - Oct 2023</h5>
              <p><em>Edureka</em></p>
              <ul>
                <li>My role is FullStack Developer and My responsibilities are to maintain and Develop Frontend and 
                  backend both... The complete UI is based on React and Backend on Nodejs, ExpressJs and NoSql.</li>
                
              </ul>
            </div>
           
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume