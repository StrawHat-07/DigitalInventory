import React, { useEffect, useState, useRef } from "react";
import "./SearchbarDropdown.css";
const SearchDropdown = (props) => {
  const { options, onInputChange, setChanges } = props;
  const [value, setValue] = useState("");
  const ulRef = useRef();
  const inputRef = useRef();
  //   console.log("Value:", value);
  //   setChanges(value);
  useEffect(() => {
    console.log("mount");
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange(event);
      //   console.log("input clicked");
    });
    try {
      //Code to test for error comes here
      document
        .getElementById("container")
        .addEventListener("click", (event) => {
          //   console.log("document clicked");
          ulRef.current.style.display = "none";
        });
      //Self created error can be made here
    } catch (error) {
      //Code to handle error comes here
      console.log("Error", error);
      console.log("End of try catch");
    }
  }, []);

  return (
    <div className="search-bar-dropdown">
      <input
        type="text"
        className="form-control search-bar"
        placeholder="Search"
        ref={inputRef}
        onChange={(e) => {
          onInputChange(e);
          setValue(e.target.value);
          setChanges(e.target.value);
        }}
        value={value}
      />
      <div className="img"></div>

      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
                setValue(option);
                setChanges(option);
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
  defaultOptions.push(`option ${i}`);
  defaultOptions.push(`suggesstion ${i}`);
  defaultOptions.push(`advice ${i}`);
}

function Searchbar(props) {
  const { values, set } = props;
  //   console.log("Values :", values);
  //   console.log("Default options : ", defaultOptions);
  const [options, setOptions] = useState([]);
  //   const [value, setValue] = useState("");
  //   useEffect(() => setOptions(values), [values]);
  const onInputChange = (event) => {
    // console.log(event.target.value);
    setOptions(values.filter((option) => option.includes(event.target.value)));
    // console.log("Value : ", value);
  };
  const servinate = () => {};
  return (
    <div className="mt-2 mb-3">
      <SearchDropdown
        options={options}
        onInputChange={onInputChange}
        setChanges={(s) => set(s)}
      />

      {/* <button className="btn btn-dark">Go</button> */}
    </div>
  );
}
export default Searchbar;
