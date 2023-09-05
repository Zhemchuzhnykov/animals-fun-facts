import { React } from "react";
import { createRoot } from "react-dom/client";
import { animals } from "./data/animals";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);
const title = "";
const images = [];

const showBackground = true;
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpeg" />
);

const animalFacts = (
  <div className="container">
    <h1 className="header">{title || "Click an animal for a fun fact"}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);

for (let animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const factContainer = document.getElementById("fact");

  const name = e.target.alt;
  const selectedAnimal = animals[name];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = animals[name].facts[optionIndex];

  factContainer.innerHTML = funFact;
}
