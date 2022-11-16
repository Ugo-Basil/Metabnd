import React from "react";
import "./products.css";

import { FaStar, FaHeart } from "react-icons/fa";

const Products = (props) => {
  return (
    <>
      {/* <h1 className="card-heading">Inspiration for your next adventure</h1> */}
      <div className="productList">
        <div key={props.id} className="productCard">
          <img src={props.image} alt="product-img" className="productImage" />
          <FaHeart className="heart" />
          <div className="productCard__content">
            <div className="displayStack__1">
              <div className="productName">{props.name}</div>
              <div className="productSales">{props.totalSales}</div>
            </div>
            <div className="displayStack__2">
              <div className="productAway">{props.kmAway}</div>
              <div className="productAval">{props.available}</div>
            </div>
            <div className="displayStack__3">
              <div className="productRating">
                {[...Array(props.rating)].map((index) => (
                  <FaStar className="star" id={index + 1} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
