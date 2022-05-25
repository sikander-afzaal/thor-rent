import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import clsx from "clsx";

import "./NftBox.css";
import heimdall from "../../Assets/nft/heimdall.png";
import energy from "../../Assets/nft/energy.svg";
import user from "../../Assets/nft/user.svg";
import { setRentModal } from "../../store/actions/uiActions";

function NftBox({
  idx,
  rented,
  btn = "RENT",
  select,
  name,
  you = "70",
  renter = "30",
  addModalBox,
  active,
  setActive,
}) {
  const [activeState, setActiveState] = useState();
  const {
    addModal: { you: youState, renter: renterState },
  } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const openRentModal = () => {
    dispatch(setRentModal(name, rented));
    document.querySelector("body").classList.add("overflow");
    const bottomApp = document.querySelector(".bottom-app");
    bottomApp.scrollIntoView(true);
  };

  const btnClickHandler = (idx, bool) => {
    if (select) {
      setActive(idx, bool);
    }
    if (!addModalBox) {
      openRentModal();
    }
  };

  useEffect(() => {
    setActiveState(active);
  }, [idx, active]);

  return (
    <Box className="nft-box">
      <Box className="top-nft">
        <img src={heimdall} alt="" />
        <p className="noto-sans">{name} #0001</p>
      </Box>
      <Box className="bottom-nft">
        <Box className="specs-nft">
          <Box className="spec-row">
            <img src={user} alt="" />
            <p className="noto-sans">{name}</p>
          </Box>
          <Box className="spec-row">
            <img src={energy} alt="" />
            <p className="noto-sans">
              {activeState ? (
                <>
                  {youState}/{renterState}
                </>
              ) : (
                <>
                  {you}/{renter}
                </>
              )}
            </p>
          </Box>
        </Box>

        <button
          onClick={() => btnClickHandler(idx, !activeState)}
          className={clsx(
            "kanit",
            !select && "rent",
            rented && "grey-rent",
            select && "select",
            select && activeState && "active-btn"
          )}
        >
          {activeState && select && "Selected"}
          {!activeState && select && "Select"}
          {!activeState && !select && rented && "Rented"}
          {!activeState && !select && !rented && btn}
        </button>
      </Box>
    </Box>
  );
}

export default NftBox;
