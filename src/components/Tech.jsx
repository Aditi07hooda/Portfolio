import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [hoveredTechnology, setHoveredTechnology] = useState(null);

  const handleMouseEnter = (technology) => {
    setHoveredTechnology(technology);
  };

  const handleMouseLeave = () => {
    setHoveredTechnology(null);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28"
          key={technology.name}
          onMouseEnter={() => handleMouseEnter(technology)}
          onMouseLeave={handleMouseLeave}
        >
          <BallCanvas icon={technology.icon} />
          <div
            className="ball-container"
            style={{ position: "relative", display: "inline-block" }}
          >
            {hoveredTechnology === technology && (
              <span
                className="tooltip"
                style={{
                  visibility: "visible",
                  opacity: "1",
                  width: "max-content",
                  backgroundColor: "#333",
                  color: "#fff",
                  textAlign: "center",
                  padding: "5px",
                  borderRadius: "5px",
                  position: "absolute",
                  zIndex: "1",
                  bottom: "125%",
                  left: "50%",
                  marginLeft: "-30px", // Adjust this value to center the tooltip
                  transition: "opacity 0.3s",
                }}
              >
                {technology.name}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
