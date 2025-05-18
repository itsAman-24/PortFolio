import "./About.css";
import theme_Pattern from "../../assets/theme_pattern.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {

  // useEffect(() => {
  //   gsap.to(".about-left", {
  //     x: -600,
  //     duration: 2,
  //     // rotate: 360,
  //     yoyo: true,
  //     repeat: 1,
  //     ease: "back.out",
  //     scrollTrigger: {
  //       trigger: ".about-left", // The element to observe
  //       start: "top 80%",      // Trigger animation when the element reaches 80% from the top of the viewport
  //       end: "bottom 60%",     // End of the trigger area
  //       toggleActions: "play pause resume reset", // Play/pause actions
  //     },
  //   });
  // }, []);

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_Pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img
            src="https://thumbs.dreamstime.com/b/cartoon-stick-drawing-conceptual-illustration-smiling-cheerful-man-looking-himself-mirror-cartoon-smiling-cheerful-129384604.jpg"
            alt=""
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced MERN stack developer with good problem solving
              skill along with creating user friendly websites.I have had the
              privilege of collaborating with prestigious organization,
              contributing to their success and growth.
            </p>
            <p>
              My passion for Software development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>DataBases</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.2</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>TECHNICAL CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
};

export default About;
