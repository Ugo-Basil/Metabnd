import React from "react";
import Products from "../products/Products";
import contents from "../products/content";
import "./card.css";

export const Card = () => {
  return (
    <>
      <h1 className="cardHeading">Inspiration for your next adventure</h1>
      <div className="Cards">
        {contents.map((content) => (
          <Products
            key={content.id}
            image={content.image}
            name={content.name}
            totalSales={content.totalSales}
            kmAway={content.kmAway}
            available={content.available}
            rating={content.rating}
          />
        ))}
      </div>
    </>
  );
};
