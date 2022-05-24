import "./App.css";
import React, { useRef, useEffect } from "react";
import Header from "./Layout/Header/Header";
import RentRow from "./Components/RentRow/RentRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NftBox from "./Components/NftBox/NftBox";
import Footer from "./Layout/Footer/Footer";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import RetrieveRow from "./Components/RetrieveRow/RetrieveRow";
import RentModal from "./Components/RentModal/RentModal";
import AddModal from "./Components/AddModal/AddModal";
import FilterModal from "./Components/FilterModal/FilterModal";
import Box from "@mui/material/Box";
function App() {
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
            <p className="kanit">
              Filter by <FontAwesomeIcon icon={faChevronDown} />
            </p>
            <p className="kanit">
              Sort by <FontAwesomeIcon icon={faChevronDown} />
            </p>
          </Box>
          <Box className="nft-grid">
            <NftBox btn={"RENT"} name={"Heimdall"} />
            <NftBox rented={true} btn={"RENT"} name={"Heimdall"} />
            <NftBox rented={true} btn={"RENT"} name={"Heimdall"} />
            <NftBox rented={true} btn={"RENT"} name={"Heimdall"} />
            <NftBox rented={true} btn={"RENT"} name={"Freya"} />
            <NftBox btn={"RENT"} name={"Freya"} />
            <NftBox rented={true} btn={"RENT"} name={"Freya"} />
            <NftBox rented={true} btn={"RENT"} name={"Freya"} />
            <NftBox rented={true} btn={"RENT"} name={"Odin"} />
            <NftBox rented={true} btn={"RENT"} name={"Odin"} />
            <NftBox btn={"RENT"} name={"Odin"} />
            <NftBox rented={true} btn={"RENT"} name={"Odin"} />
            <NftBox rented={true} btn={"RENT"} name={"Thor"} />
            <NftBox rented={true} btn={"RENT"} name={"Thor"} />
            <NftBox rented={true} btn={"RENT"} name={"Thor"} />
          </Box>
        </Box>
        <FilterModal />
        {/* <AddModal /> */}
        {/* <RentModal /> */}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
