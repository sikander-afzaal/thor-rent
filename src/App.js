import "./App.css";
import Header from "./Layout/Header/Header";
import RentRow from "./Components/RentRow/RentRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NftBox from "./Components/NftBox/NftBox";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="top-app-cont">
        <div className="top-app">
          <Header />
          <div className="top-app__bottom">
            <div className="row-rent-selection">
              <p className="kanit active">Rented NFTs</p>
              <p className="kanit">Rent out NFT</p>
            </div>
            <RentRow />
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
            <NftBox />
            <NftBox rented={true} />
            <NftBox rented={true} />
            <NftBox rented={true} />
            <NftBox rented={true} />
            <NftBox />
            <NftBox rented={true} />
            <NftBox rented={true} />
            <NftBox rented={true} />
            <NftBox rented={true} />
            <NftBox />
            <NftBox rented={true} />
            <NftBox rented={true} />
            <NftBox rented={true} />
            <NftBox rented={true} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
