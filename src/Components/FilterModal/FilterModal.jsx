import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";

import "./FilterModal.css";
import heimdallImg from "../../Assets/filter/heimdall.png";
import thorImg from "../../Assets/filter/thor.png";
import freyaImg from "../../Assets/filter/freya.png";
import odinImg from "../../Assets/filter/odin.png";
import RangeSlider from "../RangeSlider/index";
import cross from "../../Assets/cross.svg";
import { closeModals, setNameFilters } from "../../store/actions/uiActions";

function FilterModal() {
  const dispatch = useDispatch();
  const {
    active,
    nameFilter: { heim, freya, thor, odin },
  } = useSelector((state) => state.ui?.filterModal);
  const [status, setStatus] = useState(null);

  const closeModal = () => {
    dispatch(closeModals());
  };

  const nameFilterChangeHandler = (name) => {
    dispatch(setNameFilters(name));
  };

  const statusData = [
    {
      label: "LEGENDARY",
      activeClass: "r_box goldRadio",
    },
    {
      label: "COMMON",
      activeClass: "r_box greyRadio",
    },
  ];

  if (!active) {
    return <></>;
  }

  return (
    <>
      <Box onClick={closeModal} className="overlay-modal"></Box>
      <Box className="filter-modal">
        <img onClick={closeModal} src={cross} alt="" className="cross-filter" />
        <h2 className="kanit">Filter By</h2>
        <Box className="filter-row-modal">
          <h3 className="kanit">Character</h3>
          <Box className="character-row">
            <Box
              onClick={() => {
                nameFilterChangeHandler("heim");
              }}
              className={`${heim ? "heimdall-modal" : ""}`}
            >
              <img src={heimdallImg} alt="" className="char" />
            </Box>
            <Box
              onClick={() => {
                nameFilterChangeHandler("freya");
              }}
              className={`${freya ? "freya-modal" : ""}`}
            >
              <img src={freyaImg} alt="" className="char" />
            </Box>
            <Box
              onClick={() => {
                nameFilterChangeHandler("thor");
              }}
              className={`${thor ? "thor-modal" : ""}`}
            >
              <img src={thorImg} alt="" className="char" />
            </Box>
            <Box
              onClick={() => {
                nameFilterChangeHandler("odin");
              }}
              className={`${odin ? "odin-modal" : ""}`}
            >
              <img src={odinImg} alt="" className="char" />
            </Box>
          </Box>
        </Box>
        <RangeSlider />
        <Box className="filter-row-modal">
          <h3 className="kanit">Rarity</h3>
          <Box className="rare-row">
            {statusData.map((d, i) => {
              return (
                <Box
                  key={i}
                  className="s_main"
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    onClick={() => setStatus((prev) => (prev === i ? null : i))}
                    className={d.activeClass}
                  >
                    {status === i ? <Box></Box> : ""}
                  </Box>
                  <h5 className="kanit">{d.label}</h5>
                </Box>
              );
            })}
          </Box>
        </Box>
        <p className="stats kanit">Stats coming soon</p>
      </Box>
    </>
  );
}

export default FilterModal;
