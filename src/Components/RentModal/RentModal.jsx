import React from "react";
import "./RentModal.css";
import union from "../../Assets/Union.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function RentModal() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div className="overlay-modal"></div>
      <div className="modal-rent">
        <FontAwesomeIcon icon={faXmark} className="cross" />
        <div className="modal-row">
          <p className="kanit">Rent</p>
          <h2 className="kanit">Heimdall #0001</h2>
        </div>
        <img src={union} alt="" className="union" />
        <div className="modal-row">
          <p className="kanit">You earn</p>
          <h2 className="kanit">30%</h2>
        </div>
        <img src={union} alt="" className="union" />
        <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
        <button className="rent long-rent">RENT</button>
      </div>
    </>
  );
}

export default RentModal;
