import React, { useState } from "react";
import "./RentModal.css";
import union from "../../Assets/Union.svg";
import tick from "../../Assets/tick.svg";
import loaderGif from "../../Assets/loader.gif";
import ReCAPTCHA from "react-google-recaptcha";
import Box from "@mui/material/Box";
import cross from "../../Assets/cross.svg";
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
      <Box className="overlay-modal"></Box>
      <Box className="modal-rent">
        {loader ? (
          <Box className="loader-Box">
            {/* <Box className="shadow-char"></Box> */}
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Please Wait</h2>
            <img src={loaderGif} alt="" className="loader" />
            <img src={union} alt="" className="union" />
          </Box>
        ) : complete ? (
          <Box className="complete-Box">
            {/* <Box className="shadow-char"></Box> */}
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Complete</h2>
            <img src={tick} alt="" className="loader" />
            <img src={union} alt="" className="union" />
            <button className="rent long-transaction">View Transaction</button>
          </Box>
        ) : (
          <>
            <img src={cross} alt="" className="cross" />
            <Box className="modal-row">
              <p className="kanit">Rent</p>
              <h2 className="kanit">Heimdall #0001</h2>
            </Box>
            <img src={union} alt="" className="union" />
            <Box className="modal-row">
              <p className="kanit">You earn</p>
              <h2 className="kanit">30%</h2>
            </Box>
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
      </Box>
    </>
  );
}

export default RentModal;
