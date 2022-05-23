import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
import Box from "@mui/material/Box";
function Header() {
  return (
    <Box className="header">
      <img src={logo} className="logo" alt="" />
      <Box className="header-right">
        <Box className="price-thor">
          <p className="kanit">
            34.712 <span className="trajan">ASG</span>
          </p>
          <Box className="rule"></Box>
          <p className="kanit">
            34.712 <span className="trajan">THOR</span>
          </p>
        </Box>
        <p className="address segoe">0x1051…AgD2</p>
      </Box>
    </Box>
  );
}

export default Header;
