import React, { useState } from "react";
import "./FilterModal.css";
import heimdallImg from "../../Assets/filter/heimdall.png";
import thorImg from "../../Assets/filter/thor.png";
import freyaImg from "../../Assets/filter/freya.png";
import odinImg from "../../Assets/filter/odin.png";
function FilterModal() {
  const [active, setActive] = useState([false, false, false, false]);
  const [heim, setHeim] = useState(false);
  const [freya, setFreya] = useState(false);
  const [thor, setThor] = useState(false);
  const [odin, setOdin] = useState(false);
  return (
    <>
      <div className="overlay-modal"></div>
      <div className="filter-modal">
        <h2 onClick={() => console.log(active)} className="kanit">
          Filter By
        </h2>
        <div className="filter-row-modal">
          <h3 className="kanit">Character</h3>
          <div className="character-row">
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
          </div>
        </div>
        <div className="filter-row-modal">
          <h3 className="kanit">Rarity</h3>
          <div className="rare-row">
            <div className="form-group">
              <input type="checkbox" id="Legendary" />
              <label className="kanit" htmlFor="Legendary">
                Legendary
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="Common" />
              <label className="kanit" htmlFor="Common">
                Common
              </label>
            </div>
          </div>
        </div>
        <p className="stats kanit">Stats coming soon</p>
      </div>
    </>
  );
}

export default FilterModal;
