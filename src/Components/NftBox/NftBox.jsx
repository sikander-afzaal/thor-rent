import React, { useState } from "react";
import "./NftBox.css";
import heimdall from "../../Assets/nft/heimdall.png";
import energy from "../../Assets/nft/energy.svg";
import user from "../../Assets/nft/user.svg";
function NftBox({ rented, btn, select }) {
  const [active, setActive] = useState(false);
  return (
    <div className="nft-box">
      <div className="top-nft">
        <img src={heimdall} alt="" />
        <p className="noto-sans">Heimdall #0001</p>
      </div>
      <div className="bottom-nft">
        <div className="specs-nft">
          <div className="spec-row">
            <img src={user} alt="" />
            <p className="noto-sans">Heimdall</p>
          </div>
          <div className="spec-row">
            <img src={energy} alt="" />
            <p className="noto-sans">70/30</p>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default NftBox;
