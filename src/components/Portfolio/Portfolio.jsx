import React from "react";
import Card from "../Card/Card.jsx";
import details from "../details.json";
import Layout from "../Layout/Layout.jsx";
import "./Portfolio.css"


function Portfolio() {
  const cards = details;

  return (
    <Layout>
    <div className="portfolio-title-div">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {cards.map((card) => (
            <Card
              id={card.id}
              key={card.id}
              name={card.name}
              tools={card.tools}
              summary={card.summary}
              image={card.image}
              gitHub={card.gitHub}
              deploy={card.deploy}
            />
          ))}
        </div>
      </div>
      </div>
      </Layout>
  );
}

export default Portfolio;
