import React, { useState } from "react";
import { PageData } from "../PageData";
import NavBar from "../../navbar/NavBar";
import "./Technology.css";

function Technology() {
  const [techselectTab, setTechselectTab] = useState(0);
  const handleTechclick = (index) => {
    setTechselectTab(index);
  };
  return (
    <div className="tech bg ">
      <NavBar />
      <main id="main" className="grid-container grid-container--tech flow">
        <h1 className="numbered-title text-nowrap">
          <span aria-hidden="true">04</span> Technology
        </h1>

        <div className="number-indicators flex">
          {PageData.technology.map((tech, index) => (
            <>
              <button
                className={techselectTab === index ? " active " : ""}
                aria-selected={techselectTab === index ? "true" : "false"}
                onClick={() => handleTechclick(index)}
              >
                {tech.no} <span className="sr-only">{tech.name}</span>
              </button>
            </>
          ))}
        </div>
        <article className="tech-details">
          <header class="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">
              {PageData.technology[techselectTab].name}
            </h2>
            {/* <p className="fs-700 uppercase ff-serif">
            {PageData.technology[techselectTab].role}
          </p> */}
            <p>
              {PageData.technology[techselectTab].description}
              {console.log(PageData.technology[techselectTab].description)}
            </p>
          </header>
        </article>
        {PageData.technology.map((technology, index) => (
          <>
            <img
              src={techselectTab === index ? technology.images.portrait : ""}
              alt={techselectTab === index ? technology.images.landscape : ""}
            />
          </>
        ))}
      </main>
    </div>
  );
}
export default Technology;
