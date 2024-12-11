import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import Services_Data from "../../assets/services_data";
import { useState } from "react";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Pattern"/>
      </div>
      <div className="service-container">
        {Services_Data.map((service, index) => {
          const isExpanded = expandedIndex === index;
          const previewText = service.s_desc.substring(0, 60); // Show only first 100 characters
          return (
            <div
              key={index}
              className={`services-format ${isExpanded ? "expanded" : ""}`}
            >
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p className={`description-${isExpanded ? "small-text" : ""}`}>
                {isExpanded ? service.s_desc : `${previewText}...`}
              </p>
              <div
                className="services-readmore"
                onClick={() => toggleReadMore(index)}
              >
                 <p>{isExpanded ? "Read Less" : "Read More"}</p>
                <img
                  src={arrow_icon}
                  alt="Arrow Icon"
                  className={isExpanded ? "rotate-icon" : ""}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
