import React, { useState } from "react";
import "./QueryStyle.css";

const QuerySearch = ({ values }) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("All");
  return (
    <>
      <div className="select-box">
        <div
          className={!active ? "options-container" : "optionsContainer active"}
        >
          {values.map((lob) => {
            return (
              <>
                <div className="option" onClick={() => setSelected(lob)}>
                  <input
                    type="radio"
                    className="radio"
                    id={lob}
                    name="category"
                  />
                  <label for={lob}>{lob}</label>
                </div>
              </>
            );
          })}
          <div className="option">
            <input
              type="radio"
              className="radio"
              id="automobiles"
              name="category"
            />
            <label for="automobiles">Automobiles</label>
          </div>
        </div>
        <div className="selected" onClick={() => setActive(!active)}>
          {selected}
        </div>
      </div>
    </>
  );
};

export default QuerySearch;
