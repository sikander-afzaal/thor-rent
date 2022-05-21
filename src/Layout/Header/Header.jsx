import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="" />
      <div className="header-right">
        <div className="price-thor">
          <p className="kanit">
            34.712 <span className="trajan">ASG</span>
          </p>
          <div className="rule"></div>
          <p className="kanit">
            34.712 <span className="trajan">THOR</span>
          </p>
        </div>
        <p className="address segoe">0x1051…AgD2</p>
      </div>
    </div>
  );
}

export default Header;
