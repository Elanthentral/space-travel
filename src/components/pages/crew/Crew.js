import React, { useState } from "react";
import NavBar from "../../navbar/NavBar";
import crew from "../../../assets/crew/image-douglas-hurley.png";
import "./crew.css";
import { PageData } from "../PageData";

function Crew() {
  const [crewselectedTab, setCrewselectedTab] = useState(0);
  const handleCrewclick = (index) => {
    setCrewselectedTab(index);
  };
  return (
    <div className="crew bg ">
      <NavBar />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Meet your crew
        </h1>

        <div className="dot-indicators flex">
          {PageData.crew.map((crew, index) => (
            <>
              <button
                aria-selected={crewselectedTab === index ? "true" : "false"}
                className={crewselectedTab === index ? "active" : ""}
                onClick={() => handleCrewclick(index)}
              >
                <span className="sr-only">{crew.name}</span>
              </button>
            </>
          ))}
        </div>
        <article className="crew-details">
          <header class="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase text-nowrap">
              {PageData.crew[crewselectedTab].name}
            </h2>
            <p className="fs-700 uppercase ff-serif text-nowrap">
              {PageData.crew[crewselectedTab].role}
            </p>
          </header>
          <p>{PageData.crew[crewselectedTab].bio}</p>
        </article>
        {PageData.crew.map((crew, index) => (
          <>
            {/* <img
              src={crewselectedTab === index ? crew.images.png : ""}
              alt={crewselectedTab === index ? crew.images.png : ""}
            /> */}
            <picture id="moon-image">
              <source
                media="(min-width: 1024px)"
                srcset={crewselectedTab === index ? crew.images.webp : ""}
                type="image/webp"
              />
              <img
                src={crewselectedTab === index ? crew.images.png : ""}
                alt={crewselectedTab === index ? crew.images.png : ""}
              />
            </picture>
          </>
        ))}
      </main>
    </div>
  );
}
export default Crew;
