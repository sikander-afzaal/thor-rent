import "./App.css";
import Header from "./Layout/Header/Header";
import RentRow from "./Components/RentRow/RentRow";
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
    </div>
  );
}

export default App;
