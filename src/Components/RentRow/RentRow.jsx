import React from "react";
import "./RentRow.css";
import heimdall from "../../Assets/rented/heimdall-rented.png";
import freya from "../../Assets/rented/freya-rented.png";
import odin from "../../Assets/rented/odin-rented.png";
import thor from "../../Assets/rented/thor-rented.png";
import RentedNft from "../rentedNft/rentedNft";
function RentRow() {
  return (
    <div className="row-rented-nft">
      <RentedNft name={"heimdall"} img={heimdall} text={"Heimdall #0001"} />
      <RentedNft name={"freya"} img={freya} text={"Freya #0002"} />
      <RentedNft name={"thor"} img={thor} text={"Thor #0003"} />
      <RentedNft name={"odin"} img={odin} text={"Odin #0004"} />
    </div>
  );
}

export default RentRow;
