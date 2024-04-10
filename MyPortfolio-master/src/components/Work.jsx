import React from "react";
import projec1 from "../img/project1.png";
import projec3 from "../img/project3.png";
import projec4 from "../img/project4.png";
import projec5 from "../img/project5.png";
import projec10 from "../img/project10.png";
import projec11 from "../img/project11.png";
import projec12 from "../img/project12.png"

function Work() {
  const project = [
   
    {
      url: "https://boisterous-figolla-5b1361.netlify.app/",
      github: "https://github.com/ksajdfkposam/Cryptography_.git",
      img: projec4,
    },

    {
      github: "https://github.com/ksajdfkposam/Zwiggy.git",
      img: projec10,
    },
    {
      github: "https://github.com/ksajdfkposam/Netflix-Clone.git",
      img: projec11,
    },
    {
      github: "https://github.com/ksajdfkposam/library-management-system.git",
      img: projec12,
    },

    //JAVASCRIPT---------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
      url: "https://ksajdfkposam.github.io/Weather-app/",
      github: "https://github.com/ksajdfkposam/Weather-app.git",
      img: projec5,
    },
    {
      url: "https://ksajdfkposam.github.io/Search_Img/",
      github: "https://github.com/ksajdfkposam/Search_Img",
      img: projec1,
    },

    {
      url: "https://ksajdfkposam.github.io/Random_quote/",
      github: "https://github.com/ksajdfkposam/Random_quote.git",
      img: projec3,
    },

    

  
  ];

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Work</h2>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {project.map((item) => (
            <Card
              key={item.url}
              img={item.img}
              url={item.url}
              github={item.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Card = ({ img, url, github }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img src={img} className="img-fluid" alt="" height="100%" />
        <div className="portfolio-info">
          <div
            className="portfolio-links  d-flex justify-content-between my-3"
            style={{ width: "28%" }}
          >
            <a href={url} className="linkedin" target="_blank" rel="noreferrer">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_gp7ouyyz.json"
                background="transparent"
                style={{ width: "30px", height: "30px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
            <a
              href={github}
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_6HFXXE.json"
                background="transparent"
                style={{ width: "30px", height: "30px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
