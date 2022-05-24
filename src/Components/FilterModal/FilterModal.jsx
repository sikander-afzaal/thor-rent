import React, { useState } from "react";
import "./FilterModal.css";
import heimdallImg from "../../Assets/filter/heimdall.png";
import thorImg from "../../Assets/filter/thor.png";
import freyaImg from "../../Assets/filter/freya.png";
import odinImg from "../../Assets/filter/odin.png";
import Box from "@mui/material/Box";
import RangeSlider from "../RangeSlider/index";
import cross from "../../Assets/cross.svg";
function FilterModal() {
  const [active, setActive] = useState([false, false, false, false]);
  const [heim, setHeim] = useState(false);
  const [freya, setFreya] = useState(false);
  const [thor, setThor] = useState(false);
  const [odin, setOdin] = useState(false);
  const [status, setStatus] = useState(null);

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

  return (
    <>
      <Box className="overlay-modal"></Box>
      <Box className="filter-modal">
        <img src={cross} alt="" className="cross-filter" />
        <h2 className="kanit">Filter By</h2>
        <Box className="filter-row-modal">
          <h3 className="kanit">Character</h3>
          <Box className="character-row">
            <Box
              onClick={() => {
                // setActive((prev) => {
                //   prev[0] = !prev[0];
                //   return prev;
                // });
                setHeim((prev) => !prev);
              }}
              className={`${heim ? "heimdall-modal" : ""}`}
            >
              <img src={heimdallImg} alt="" className="char" />
            </Box>
            <Box
              onClick={() =>
                // setActive((prev) => {
                //   prev[1] = !prev[1];
                //   return prev;
                // })
                setFreya((prev) => !prev)
              }
              className={`${freya ? "freya-modal" : ""}`}
            >
              <img src={freyaImg} alt="" className="char" />
            </Box>
            <Box
              onClick={() =>
                // setActive((prev) => {
                //   prev[2] = !prev[2];
                //   return prev;
                // })
                setThor((prev) => !prev)
              }
              className={`${thor ? "thor-modal" : ""}`}
            >
              <img src={thorImg} alt="" className="char" />
            </Box>
            <Box
              onClick={() =>
                // setActive((prev) => {
                //   prev[3] = !prev[3];
                //   return prev;
                // })
                setOdin((prev) => !prev)
              }
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
