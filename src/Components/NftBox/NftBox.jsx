import React, { useState } from "react";
import "./NftBox.css";
import heimdall from "../../Assets/nft/heimdall.png";
import energy from "../../Assets/nft/energy.svg";
import user from "../../Assets/nft/user.svg";
import Box from "@mui/material/Box";
function NftBox({ rented, btn, select }) {
  const [active, setActive] = useState(false);
  return (
    <Box className="nft-box">
      <Box className="top-nft">
        <img src={heimdall} alt="" />
        <p className="noto-sans">Heimdall #0001</p>
      </Box>
      <Box className="bottom-nft">
        <Box className="specs-nft">
          <Box className="spec-row">
            <img src={user} alt="" />
            <p className="noto-sans">Heimdall</p>
          </Box>
          <Box className="spec-row">
            <img src={energy} alt="" />
            <p className="noto-sans">70/30</p>
          </Box>
        </Box>
        {select ? (
          <button
            onClick={() => setActive((prev) => !prev)}
            className={`select ${active ? "active-btn" : ""} kanit ${
              rented ? "grey-rent" : ""
            }`}
          >
            {active ? "Selected" : rented ? "Rented" : btn}
          </button>
        ) : (
          <button className={`rent kanit ${rented ? "grey-rent" : ""}`}>
            {rented ? "Rented" : btn}
          </button>
        )}
      </Box>
    </Box>
  );
}

export default NftBox;
