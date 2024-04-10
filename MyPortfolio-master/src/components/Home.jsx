import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {Link} from 'react-router-dom'
function Home() {
  return (
    <section id="hero">
      <div
        className="container row d-flex justify-content-center align-items-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="col-6">
          <h1>Udit Saxena</h1>
          <p>
            I'm{" "}
            <span>
              <Typewriter
                words={["Full Stack Web Developer"]}
                loop={true}
                cursor={true}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          

          <div  className="button-62 my-3">
            <Link to="/page/contact" style={{textDecoration:"none",color:"inherit"}}>Let’s Connect</Link>
          </div>

          <div className="social-links">
            <a
              href="https://www.instagram.com/udit.saxena.775/"
              className="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_085ixxa8.json"
                background="transparent"
                style={{ width: "50px", height: "50px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>

            <a
              href="https://www.linkedin.com/in/udit-saxena-932a0b269/"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets4.lottiefiles.com/private_files/lf30_qqx4zbms.json"
                background="transparent"
                style={{ width: "50px", height: "50px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
            <a
              href="https://github.com/ksajdfkposam"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/private_files/lf30_1ldonjtk.json"
                background="transparent"
                style={{ width: "50px", height: "50px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
          </div>
        </div>
        <div className="col-md-6 ">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_tfb3estd.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </section>
  );
}

export default Home;
