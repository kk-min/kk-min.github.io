import React, { Dispatch, useEffect, useState } from "react";
import "../css/TabContent.css";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

export interface PropTypes {
  loading: boolean;
  error: false;
  activeTab: string;
  setActiveTab: Dispatch<string>;
}

export default function TabContent(props: PropTypes) {
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFirstRender((prev) => false);
      const homeContainer = document.getElementById("home-container");
      if (homeContainer) {
        homeContainer.style.overflow = "visible";
      }
    }, 2500);
  }, []);

  return (
    <div className="content-container" id="content-container">
      {props.activeTab === "About Me" ? (
        <AboutMe firstRender={firstRender} />
      ) : props.activeTab === "Projects" ? (
        <Projects />
      ) : (
        <Contact />
      )}
    </div>
  );
}
