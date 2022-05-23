import React from "react";
import "./rentedNft.css";
import Box from "@mui/material/Box";
function RentedNft({ text, img, name, btn }) {
  return (
    <Box className={`rent-box ${name}`}>
      <Box className="cooldown-bar"></Box>
      <Box className="hover-box">
        <p className="kanit">Return Cooldown</p>
        <p className="kanit">4 Hours</p>
      </Box>
      <img src={img} alt="" className="abs-rented" />
      <Box className="main-box-rent">
        <Box className="desc-nft noto-sans">{text}</Box>
        <button className="return kanit">{btn}</button>
      </Box>
    </Box>
  );
}

export default RentedNft;
