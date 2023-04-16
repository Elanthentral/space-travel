import React, { useState } from "react";
import NavBar from "../../navbar/NavBar";
import moon from "../../../assets/destination/image-moon.png";
import moonweb from "../../../assets/destination/image-moon.webp";
import "./destination.css";
import { PageData } from "../PageData";

function Destination() {
  const [selectedtab, setSelectedtab] = useState(0);
  const handleTabClicktabs = (index) => {
    setSelectedtab(index);
  };
  return (
    <div className="destination bg">
      <NavBar />
      <main className="grid-container grid-container--destination flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Pick your destination
        </h1>
        {PageData.destinations.map((destination, index) => (
          <React.Fragment key={destination.name}>
            <picture id="moon-image">
              <source
                media="(min-width: 1024px)"
                srcset={selectedtab === index ? destination.images.webp : ""}
                type="image/webp"
              />
              <img src={selectedtab === index ? destination.images.png : ""} />
            </picture>
          </React.Fragment>
        ))}
        <div className="tab-list underline-indicators flex">
          {PageData.destinations.map((destination, index) => (
            <>
              <button
                key={destination.name}
                className={`uppercase ff-sans-cond text-accent letter-spacing-2  ${
                  selectedtab === index ? "active" : ""
                }`}
                onClick={() => handleTabClicktabs(index)}
              >
                {destination.name}
              </button>
            </>
          ))}
        </div>

        <article className="destination-info">
          <h2 className="fs-800 uppercase ff-serif">
            {PageData.destinations[selectedtab].name}
          </h2>

          <p>{PageData.destinations[selectedtab].description}</p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="fs-500 ff-serif uppercase">
                {" "}
                {PageData.destinations[selectedtab].distance}
              </p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="fs-500 ff-serif uppercase">
                {PageData.destinations[selectedtab].travel}
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
export default Destination;
