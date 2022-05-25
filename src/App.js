import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Header from "./Layout/Header/Header";
import RentRow from "./Components/RentRow/RentRow";
import NftBox from "./Components/NftBox/NftBox";
import Footer from "./Layout/Footer/Footer";
import RetrieveRow from "./Components/RetrieveRow/RetrieveRow";
import RentModal from "./Components/RentModal/RentModal";
import AddModal from "./Components/AddModal/AddModal";
import FilterModal from "./Components/FilterModal/FilterModal";
import { openFilterModal } from "./store/actions/uiActions";
import clsx from "clsx";

function App() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dispatch = useDispatch();
  const {
    listingCards,
    filterModal: {
      nameFilter: { heim, freya, thor, odin },
    },
  } = useSelector((state) => state.ui);
  const location = useLocation();
  const link1 = useRef();
  const link2 = useRef();

  useEffect(() => {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    if (location.pathname === "/") {
      link1.current.classList.add("active");
    } else if (location.pathname === "/Retrieve") {
      link2.current.classList.add("active");
    }
  }, [location.pathname]);

  return (
    <Box className="App">
      <Box className="top-app-cont">
        <Box className="top-app">
          <Header />
          <Box className="top-app__bottom">
            <Box className="row-rent-selection">
              <Link ref={link1} to={"/"} className="kanit active">
                Rented NFTs
              </Link>
              <Link ref={link2} to={"/Retrieve"} className="kanit">
                Rent out NFT
              </Link>
            </Box>
            <Routes>
              <Route path="/" element={<RentRow />} />
              <Route path="/Retrieve" element={<RetrieveRow />} />
            </Routes>
          </Box>
        </Box>
      </Box>
      <Box className="bottom-app-cont">
        <Box className="overlay"></Box>
        <Box className="bottom-app">
          <Box className="filter-row">
            <p
              className="kanit"
              onClick={() => {
                dispatch(openFilterModal());
              }}
            >
              Filter by <FontAwesomeIcon icon={faChevronDown} />
            </p>
            <p
              onClick={() => setOpenDropDown((prev) => !prev)}
              className="kanit"
            >
              Sort by{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={clsx(openDropDown && "rotate-arrow")}
              />
            </p>
            <div
              className={clsx(
                "sort-drop-down",
                openDropDown && "open-drop-down"
              )}
            >
              <p className="drop-item kanit">Recently Listed</p>
              <p className="drop-item kanit">Recently Minted</p>
              <p className="drop-item kanit">Recently Sold</p>
              <p className="drop-item kanit">Price (Lowest to Highest)</p>
              <p className="drop-item kanit">Price (Highest to Lowest)</p>
              <p className="drop-item kanit">Highest Last Sale</p>
            </div>
          </Box>
          <Box className="nft-grid">
            {listingCards.map((el, idx) => {
              const name = el.name.toLowerCase();

              const key = "nft-box" + idx;

              let toShow = false;

              // If heim filter is selected and the name container "heimdall"

              if (heim && name.includes("heimdall")) {
                toShow = true;
              }

              // If Freya filter is selected and the name container "freya"

              if (!toShow && freya && name.includes("freya")) {
                toShow = true;
              }

              // If thor filter is selected and the name container "thor"

              if (!toShow && thor && name.includes("thor")) {
                toShow = true;
              }

              // If odin filter is selected and the name container "odin"

              if (!toShow && odin && name.includes("odin")) {
                toShow = true;
              }

              // If Freya filter is selected and the name container "freya"

              if (!toShow) {
                return <React.Fragment key={key} />;
              }

              return <NftBox key={key} {...el} />;
            })}
          </Box>
        </Box>
        <FilterModal />
        <AddModal />
        <RentModal />
      </Box>
      <Footer />
      <div
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        className="scroll-top-btn"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </Box>
  );
}

export default App;
