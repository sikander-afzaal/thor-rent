import React from "react";
import "./rentedNft.css";
function RentedNft({ text, img, name, btn }) {
  return (
    <div className={`rent-box ${name}`}>
      <div className="cooldown-bar"></div>
      <div className="hover-box">
        <p className="kanit">Return Cooldown</p>
        <p className="kanit">4 Hours</p>
      </div>
      <img src={img} alt="" className="abs-rented" />
      <div className="main-box-rent">
        <div className="desc-nft noto-sans">{text}</div>
        <button className="return kanit">{btn}</button>
      </div>
    </div>
  );
}

export default RentedNft;
