import React, { useState, useEffect } from "react";
import axios from "axios";

const GetData = () => {
  const [num, setNum] = useState();
  useEffect(() => {
    async function Data() {
      const res = await axios.get(`http://localhost:8081/inventory/`);
      console.log(res);
    }
    Data();
  });
  return (
    <>
      <h1>Hey there! Pew Die Pie! Write {num}</h1>
      <select
        value={num}
        onChange={(event) => setNum(event.target.value)}
      ></select>
    </>
  );
};

export default GetData;
