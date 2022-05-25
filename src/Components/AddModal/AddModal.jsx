import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";

import "./AddModal.css";
import NftBox from "../NftBox/NftBox";
import ReCAPTCHA from "react-google-recaptcha";
import cross from "../../Assets/cross.svg";
import {
  closeModals,
  setAddModalVal,
  addListingCards,
} from "../../store/actions/uiActions";

function AddModal() {
  const dispatch = useDispatch();
  const {
    addModal: { you, renter },
  } = useSelector((state) => state.ui);
  const [cardsState, setCardsState] = useState([
    {
      active: false,
      addModalBox: true,
      btn: "SELECT",
      name: "Heimdall",
      select: true,
    },
    {
      active: false,
      addModalBox: true,
      btn: "SELECT",
      name: "Heimdall",
      select: true,
    },
    {
      active: false,
      addModalBox: true,
      btn: "RENTED",
      name: "Heimdall",
      rented: true,
    },
    {
      active: false,
      addModalBox: true,
      btn: "RENTED",
      name: "Heimdall",
      rented: true,
    },
  ]);
  const {
    addModal: { active },
  } = useSelector((state) => state.ui);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    dispatch(setAddModalVal(name, value));
  };

  const setBoxActive = (idx, bool) => {
    setCardsState((prevState) => {
      const newState = [...prevState];
      newState[idx].active = bool;

      return newState;
    });
  };

  const submitHandler = () => {
    const filteredCards = cardsState.filter((el) => {
      el.you = you;
      el.renter = renter;
      return el.active;
    });
    const mappedCards = filteredCards.map((el) => {
      return {
        name: el.name,
        rented: el.rented,
        you: el.you,
        renter: el.renter,
      };
    });
    dispatch(addListingCards(mappedCards));
  };

  if (!active) {
    return <></>;
  }

  const closeModal = () => {
    document.querySelector("body").classList.remove("overflow");
    return dispatch(closeModals());
  };

  return (
    <>
      <Box className="overlay-modal" onClick={closeModal}></Box>
      <Box className="add-modal">
        <img onClick={closeModal} src={cross} alt="" className="cross-add" />
        <h2 className="kanit">Select an NFT to Rent</h2>
        <Box className="add-nft-row">
          {cardsState.map((el, idx) => {
            return (
              <NftBox
                idx={idx}
                key={"add-modal-box" + idx}
                {...el}
                setActive={setBoxActive}
              />
            );
          })}
        </Box>
        <Box className="bottom-add-modal">
          <Box className="percentage">
            <Box className="input-row">
              <p className="kanit gold">You</p>
              <Box className="input-div">
                <input
                  type="number"
                  className="gold-input kanit"
                  name="you"
                  onChange={inputChangeHandler}
                  value={you}
                />
                <p className="kanit gold">%</p>
              </Box>
            </Box>
            <Box className="input-row">
              <p className="kanit">Renter</p>
              <Box className="input-div">
                <input
                  type="number"
                  className="kanit"
                  name="renter"
                  onChange={inputChangeHandler}
                  value={renter}
                />
                <p className="kanit">%</p>
              </Box>
            </Box>
            <p className="note kanit">Total % must equal 100%</p>
          </Box>
          <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
          <button className="rent long-rent" onClick={submitHandler}>
            SUBMIT
          </button>
        </Box>
      </Box>
    </>
  );
}

export default AddModal;
