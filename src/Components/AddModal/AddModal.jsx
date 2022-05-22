import React from "react";
import "./AddModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import NftBox from "../NftBox/NftBox";
import ReCAPTCHA from "react-google-recaptcha";
function AddModal() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div className="overlay-modal"></div>
      <div className="add-modal">
        <FontAwesomeIcon icon={faXmark} className="cross-add" />
        <h2 className="kanit">Select an NFT to Rent</h2>
        <div className="add-nft-row">
          <NftBox btn={"SELECT"} select={true} />
          <NftBox btn={"SELECT"} select={true} />
          <NftBox btn={"RENTED"} rented={true} />
          <NftBox btn={"RENTED"} rented={true} />
        </div>
        <div className="bottom-add-modal">
          <div className="percentage">
            <div className="input-row">
              <p className="kanit gold">You</p>
              <div className="input-div">
                <input type="number" className="gold-input kanit" />
                <p className="kanit gold">%</p>
              </div>
            </div>
            <div className="input-row">
              <p className="kanit">Renter</p>
              <div className="input-div">
                <input type="number" className="kanit" />
                <p className="kanit">%</p>
              </div>
            </div>
            <p className="note kanit">Total % must equal 100%</p>
          </div>
          <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
          <button className="rent long-rent">SUBMIT</button>
        </div>
      </div>
    </>
  );
}

export default AddModal;
