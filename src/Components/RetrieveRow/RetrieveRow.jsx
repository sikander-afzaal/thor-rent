import React from "react";
import RentedNft from "../rentedNft/rentedNft";
import "./RetrieveRow.css";
import heimdall from "../../Assets/rented/heimdall-rented.png";
import freya from "../../Assets/rented/freya-rented.png";
import thor from "../../Assets/rented/thor-rented.png";
import add from "../../Assets/add.svg";
import Box from "@mui/material/Box";
function RetrieveRow() {
  return (
    <Box className="row-rented-nft">
      <Box className="add-box">
        <img src={add} alt="" />
      </Box>
      <RentedNft
        name={"heimdall"}
        img={heimdall}
        text={"Heimdall #0001"}
        btn={"RETRIEVE NFT"}
      />
      <RentedNft
        name={"freya"}
        img={freya}
        text={"Freya #0002"}
        btn={"RETRIEVE NFT"}
      />
      <RentedNft
        name={"thor"}
        img={thor}
        text={"Thor #0003"}
        btn={"RETRIEVE NFT"}
      />
    </Box>
  );
}

export default RetrieveRow;
