import React, { useState } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";

import "./RentModal.css";
import union from "../../Assets/Union.svg";
import tick from "../../Assets/tick.svg";
import loaderGif from "../../Assets/loader.gif";
import ReCAPTCHA from "react-google-recaptcha";
import cross from "../../Assets/cross.svg";
import { closeModals } from "../../store/actions/uiActions";

function RentModal() {
  const dispatch = useDispatch();
  const {
    ui: {
      rentModal: { active, name, rented },
    },
  } = useSelector((state) => state);
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

    setTimeout(() => {
      setcomplete(false);
      closeModal();
    }, 4000);
  };

  const closeModal = () => {
    dispatch(closeModals());
  };

  if (!active) {
    return <></>;
  }

  return (
    <>
      <Box className="overlay-modal" onClick={closeModal}></Box>
      <Box className="modal-rent">
        {loader ? (
          <Box className="loader-div">
            {/* <Box className="shadow-char"></Box> */}
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Please Wait</h2>
            <img src={loaderGif} alt="" className="loader" />
            <img src={union} alt="" className="union" />
          </Box>
        ) : complete ? (
          <Box className="complete-div">
            {/* <Box className="shadow-char"></Box> */}
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Complete</h2>
            <img src={tick} alt="" className="loader" />
            <img src={union} alt="" className="union" />
            <button className="rent long-transaction">View Transaction</button>
          </Box>
        ) : (
          <>
            <img onClick={closeModal} src={cross} alt="" className="cross" />
            <Box className="modal-row">
              <p className="kanit">Rent</p>
              <h2 className="kanit">{name} #0001</h2>
            </Box>
            <img src={union} alt="" className="union" />
            <Box className="modal-row">
              <p className="kanit">You earn</p>
              <h2 className="kanit">30%</h2>
            </Box>
            <img src={union} alt="" className="union" />
            <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
            {rented && (
              <p style={{ marginTop: "20px" }} className="note">
                Heimdall #00001 has been rented
              </p>
            )}
            <button
              disabled={rented}
              onClick={loadHandler}
              className={clsx("rent long-rent", rented && "grey-rent")}
            >
              RENT
            </button>
          </>
        )}
      </Box>
    </>
  );
}

export default RentModal;
