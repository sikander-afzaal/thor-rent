import React from "react";
import "./rentedNft.css";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
function RentedNft({ text, img, name, btn }) {
  return (
    <Box className={`rent-box ${name}`}>
      <Box className="tooltip_wrap">
        <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          value={5}
          max={10}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => (
            <Box className="hover-box">
              <p className="kanit">Return Cooldown</p>
              <p className="kanit">{value} Hours</p>
            </Box>
          )}
        />
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
