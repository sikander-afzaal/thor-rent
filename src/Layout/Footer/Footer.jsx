import React from "react";
import "./Footer.css";
import logo from "../../Assets/foot-logo.png";
import discord from "../../Assets/discord-grey.svg";
import twitter from "../../Assets/twitter-grey.svg";
import circles from "../../Assets/circles-grey.svg";
import Box from "@mui/material/Box";
function Footer() {
  return (
    <Box className="footer">
      <Box className="logo-div">
        <img src={logo} alt="" />
      </Box>
      <h1 className="trajan">Join The Community</h1>
      <Box className="social-div">
        <a target={"blank"} href="https://discord.gg/thorfinancial">
          <img src={discord} alt="..." />
        </a>
        <a target={"blank"} href="https://twitter.com/GodsofAsgardP2E">
          <img src={twitter} alt="..." />
        </a>
        <a target={"blank"} href="https://thornodes.medium.com/">
          <img src={circles} alt="..." />
        </a>
      </Box>
      <h2 className="noto-sans">
        ©Gods of Asgard{" "}
        <a target={"blank"} href="https://thor.financial/">
          {" "}
          Powered by Thor Financial
        </a>
        . All rights reserved.
      </h2>
    </Box>
  );
}

export default Footer;
