import React, { useState } from "react";
import "./RentModal.css";
import union from "../../Assets/Union.svg";
import tick from "../../Assets/tick.svg";
import loaderGif from "../../Assets/loader.gif";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function RentModal() {
  const [loader, setLoader] = useState(false);
  const [complete, setcomplete] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const loadHandler = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setcomplete(true);
    }, 2000);
  };
  return (
    <>
      <div className="overlay-modal"></div>
      <div className="modal-rent">
        {loader ? (
          <div className="loader-div">
            {/* <div className="shadow-char"></div> */}
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Please Wait</h2>
            <img src={loaderGif} alt="" className="loader" />
            <img src={union} alt="" className="union" />
          </div>
        ) : complete ? (
          <div className="complete-div">
            {/* <div className="shadow-char"></div> */}
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Complete</h2>
            <img src={tick} alt="" className="loader" />
            <img src={union} alt="" className="union" />
            <button className="rent long-transaction">View Transaction</button>
          </div>
        ) : (
          <>
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
            {/* <p style={{ marginTop: "20px" }} className="note">
          Heimdall #00001 has been rented
        </p> */}
            <button onClick={loadHandler} className="rent long-rent">
              RENT
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default RentModal;
