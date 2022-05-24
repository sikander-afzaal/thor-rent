import React from "react";
import "./AddModal.css";
import NftBox from "../NftBox/NftBox";
import ReCAPTCHA from "react-google-recaptcha";
import Box from "@mui/material/Box";
import cross from "../../Assets/cross.svg";
function AddModal() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <Box className="overlay-modal"></Box>
      <Box className="add-modal">
        <img src={cross} alt="" className="cross-add" />
        <h2 className="kanit">Select an NFT to Rent</h2>
        <Box className="add-nft-row">
          <NftBox btn={"SELECT"} select={true} name={"Heimdall"} />
          <NftBox btn={"SELECT"} select={true} name={"Heimdall"} />
          <NftBox btn={"RENTED"} rented={true} name={"Heimdall"} />
          <NftBox btn={"RENTED"} rented={true} name={"Heimdall"} />
        </Box>
        <Box className="bottom-add-modal">
          <Box className="percentage">
            <Box className="input-row">
              <p className="kanit gold">You</p>
              <Box className="input-div">
                <input type="number" className="gold-input kanit" />
                <p className="kanit gold">%</p>
              </Box>
            </Box>
            <Box className="input-row">
              <p className="kanit">Renter</p>
              <Box className="input-div">
                <input type="number" className="kanit" />
                <p className="kanit">%</p>
              </Box>
            </Box>
            <p className="note kanit">Total % must equal 100%</p>
          </Box>
          <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
          <button className="rent long-rent">SUBMIT</button>
        </Box>
      </Box>
    </>
  );
}

export default AddModal;
