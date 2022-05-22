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
    <div className="App">
      <div className="top-app-cont">
        <div className="top-app">
          <Header />
          <div className="top-app__bottom">
            <div className="row-rent-selection">
              <Link ref={link1} to={"/"} className="kanit active">
                Rented NFTs
              </Link>
              <Link ref={link2} to={"/Retrieve"} className="kanit">
                Rent out NFT
              </Link>
            </div>
            <Routes>
              <Route path="/" element={<RentRow />} />
              <Route path="/Retrieve" element={<RetrieveRow />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="bottom-app-cont">
        <div className="overlay"></div>
        <div className="bottom-app">
          <div className="filter-row">
            <p className="kanit">
              Filter by <FontAwesomeIcon icon={faChevronDown} />
            </p>
            <p className="kanit">
              Sort by <FontAwesomeIcon icon={faChevronDown} />
            </p>
          </div>
          <div className="nft-grid">
            <NftBox btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
            <NftBox rented={true} btn={"RENT"} />
          </div>
        </div>
        <FilterModal />
        {/* <AddModal /> */}
        {/* <RentModal /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
