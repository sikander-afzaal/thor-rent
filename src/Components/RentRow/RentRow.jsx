import React from "react";
import "./RentRow.css";
import heimdall from "../../Assets/rented/heimdall-rented.png";
import freya from "../../Assets/rented/freya-rented.png";
import odin from "../../Assets/rented/odin-rented.png";
import thor from "../../Assets/rented/thor-rented.png";
import RentedNft from "../rentedNft/rentedNft";
import Box from "@mui/material/Box";
function RentRow() {
  return (
    <Box className="row-rented-nft">
      <RentedNft
        name={"heimdall"}
        img={heimdall}
        text={"Heimdall #0001"}
        btn={"RETURN NFT"}
      />
      <RentedNft
        name={"freya"}
        img={freya}
        text={"Freya #0002"}
        btn={"RETURN NFT"}
      />
      <RentedNft
        name={"thor"}
        img={thor}
        text={"Thor #0003"}
        btn={"RETURN NFT"}
      />
      <RentedNft
        name={"odin"}
        img={odin}
        text={"Odin #0004"}
        btn={"RETURN NFT"}
      />
    </Box>
  );
}

export default RentRow;
