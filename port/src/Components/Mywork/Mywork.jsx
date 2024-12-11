import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg"; 
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { useState } from "react";

const Mywork = () => {
  const [showAll, setshowAll] = useState(false);

  function handleShowMore() {
    setshowAll((prev) => !prev);
  }

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {(showAll ? mywork_data : mywork_data.slice(0, 3)).map((work, index) => (
          <div key={index} className="mywork-item">
            <img src={work.w_img} alt={work.w_name} />
            <div className="overlay">
              <a
                href={work.live} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-live"
              >
                Live Demo
              </a>
              <a
                href={work.source} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-source"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
      <div onClick={handleShowMore} className="mywork-showmore">
        <p>{showAll ? "Show Less" : "Show More"}</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
