import React from "react";
import "./placemenu.css";
import { FaSlidersH } from "react-icons/fa";
import { Dropdown } from '../dropdownmenu/Dropdown'
const PlaceMenu = () => {
  return (
    <div className="menu__Container">
      <div className="menu__Item">
        <div className="item">
          <li>
            <a href="/">Restaurant</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="/">Cottage</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="/">Castle</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="/">fantasy city</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="/">beach</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="/">gardens</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="/">off-grids</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="/">farm</a>
          </li>
        </div>
        <div className="item">
          <button>
            Location <FaSlidersH />
          </button>
        </div>
      </div>

      <div className="dropdown">
        <Dropdown />
      </div>
    </div>
  );
};

export default PlaceMenu;
