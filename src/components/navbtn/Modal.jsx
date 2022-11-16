import React, { useState } from "react";

import { BiX } from "react-icons/bi";
import { Btn } from "./navbtn.styles";

import {FaChevronRight} from 'react-icons/fa'
import "./modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Btn onClick={toggleModal}>Connect Wallet</Btn>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-heading">Connect Wallet</h2>

              <button className="close-modal" onClick={toggleModal}>
                <BiX size={30} />
              </button>
            </div>
            <p className="wallet-p">Choose your preferred wallet:</p>
            <div className="modal-body">
              <div className="modal-body__item">
                <img
                  className="image"
                  src="https://cdn.worldvectorlogo.com/logos/metamask.svg"
                  alt="metamask"
                />
                <a className="modal-link" href="/">
                  Metamask
                </a>
                <FaChevronRight className="arrow" size={25} />
              </div>
              <div className="modal-body__item">
                <img
                  className="image"
                  src="https://cdn.worldvectorlogo.com/logos/metamask.svg"
                  alt="metamask"
                />
                <a className="modal-link" href="/">
                  WalletConnect
                </a>
                <FaChevronRight className="arrow" size={25} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
