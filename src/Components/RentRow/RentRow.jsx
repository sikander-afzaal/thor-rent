import React from "react";
import Box from "@mui/material/Box";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./RentRow.css";
import heimdall from "../../Assets/rented/heimdall-rented.png";
import freya from "../../Assets/rented/freya-rented.png";
import odin from "../../Assets/rented/odin-rented.png";
import thor from "../../Assets/rented/thor-rented.png";
import RentedNft from "../rentedNft/rentedNft";
function RentRow() {
  return (
    <Box className="row-rented-nft">
      <div className="mobile-row">
        <Splide
          options={{
            perPage: 1,
            perMove: 1,
            rewind: true,
            width: "100%",
            loop: "loop",
            direction: "ltr",
            arrows: false,
            pagination: false,
            drag: true,
          }}
          className="mobile-slider-row"
        >
          <SplideSlide>
            <RentedNft
              name={"heimdall"}
              img={heimdall}
              text={"Heimdall #0001"}
              btn={"RETURN NFT"}
            />
          </SplideSlide>
          <SplideSlide>
            <RentedNft
              name={"freya"}
              img={freya}
              text={"Freya #0002"}
              btn={"RETURN NFT"}
            />
          </SplideSlide>
          <SplideSlide>
            <RentedNft
              name={"thor"}
              img={thor}
              text={"Thor #0003"}
              btn={"RETURN NFT"}
            />
          </SplideSlide>
          <SplideSlide>
            <RentedNft
              name={"odin"}
              img={odin}
              text={"Odin #0004"}
              btn={"RETURN NFT"}
            />
          </SplideSlide>
        </Splide>
      </div>

      <div className="desktop-row">
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
      </div>
    </Box>
  );
}

export default RentRow;
