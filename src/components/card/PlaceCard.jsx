import React from "react";
import Products from "../products/Products";
import placeContent from "../products/placeContent";
import "./card.css";
import PlaceMenu from "../placemenu/PlaceMenu";

export const PlaceCard = () => {
  return (
      <>
      <PlaceMenu/>
      <div className="Cards">
        {placeContent.map((content) => (
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
