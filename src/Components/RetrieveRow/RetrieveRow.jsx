import React from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import RentedNft from "../rentedNft/rentedNft";
import "./RetrieveRow.css";
import heimdall from "../../Assets/rented/heimdall-rented.png";
import freya from "../../Assets/rented/freya-rented.png";
import thor from "../../Assets/rented/thor-rented.png";
import add from "../../Assets/add.svg";
import { openAddModal } from "../../store/actions/uiActions";

function RetrieveRow() {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(openAddModal());
  };
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
            <Box className="add-box" onClick={openModal}>
              <img src={add} alt="" />
            </Box>
          </SplideSlide>
          <SplideSlide>
            <RentedNft
              name={"heimdall"}
              img={heimdall}
              text={"Heimdall #0001"}
              btn={"RETRIEVE NFT"}
            />
          </SplideSlide>
          <SplideSlide>
            <RentedNft
              name={"freya"}
              img={freya}
              text={"Freya #0002"}
              btn={"RETRIEVE NFT"}
            />
          </SplideSlide>
          <SplideSlide>
            <RentedNft
              name={"thor"}
              img={thor}
              text={"Thor #0003"}
              btn={"RETRIEVE NFT"}
            />
          </SplideSlide>
        </Splide>
      </div>

      <div className="desktop-row">
        <Box className="add-box" onClick={openModal}>
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
      </div>
    </Box>
  );
}

export default RetrieveRow;
