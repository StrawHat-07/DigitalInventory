import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import QueryCard from "../QueryCard";
import axios from "axios";
import {
  TABLE_STATISTICS,
  capitalize,
  API_ROOT_URL,
} from "../Helpers/Constants";
// import { capitalize } from "../Helpers/HelperFunctions";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import PrimarySearchAppBar from "../Layout/PrimaryNavbar";
import Table from "../Table";
import Pagination from "../Pagination";

const Home = () => {
  const [server, setServer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(100);
  const [search, setSearch] = useState("");
  const [lobModule, setLobModule] = useState(false);
  const [lob, setLob] = useState("");
  const [module, setModule] = useState("");
  const [goHit, setGoHit] = useState(false);

  useEffect(() => {
    console.log("kya haalchal");
    async function Data() {
      setLoading(true);
      const res = await axios.get(`${API_ROOT_URL}`);
      setServer(res.data);
      setLoading(false);
    }
    Data();
  }, []);
  const searcher = ["ip", "lob", "module"];
  let computedData = server;
  let abc = server;
  const searchData = useMemo(() => {
    if (lobModule) {
      // console.log(server[0]["ip"].toLowerCase().includes(search.toLowerCase()));

      // console.log(server[1]["lob"].toLowerCase().includes(search));
      // console.log(search.toLowerCase());
      // console.log(
      //   'Computing data according to lob and module: with lob "',
      //   lob,
      //   '"'
      // );
      computedData = server.filter((data) => {
        let value = false;
        let flag = false;

        // console.log(unit);
        //Check for lob
        if (data["lob"] == null) {
          value = false;
        } else value = data["lob"].toLowerCase().includes(lob.toLowerCase());
        if (value) flag = true;

        if (flag) return true;
        else return false;
      });

      computedData = computedData.filter((data) => {
        let value = false;
        let flag = false;
        //Check for module
        if (data["module"] == null) {
          value = false;
        } else
          value = data["module"].toLowerCase().includes(module.toLowerCase());
        if (value) flag = true;
        else flag = false;
        // console.log(unit, "", value);

        if (flag) return true;
        else return false;
      });
    }

    if (search) {
      // console.log(server[0]["ip"].toLowerCase().includes(search.toLowerCase()));

      // console.log(server[1]["lob"].toLowerCase().includes(search));
      // console.log(search.toLowerCase());
      computedData = computedData.filter((data) => {
        let value = false;
        let flag = false;
        TABLE_STATISTICS.map((unit) => {
          // console.log(unit);
          if (data[unit] == null) {
            value = false;
          } else
            value = data[unit].toLowerCase().includes(search.toLowerCase());
          if (value) flag = true;
          // console.log(unit, "", value);
        });

        if (flag) return true;
        else return false;
      });
    }

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = computedData.slice(
      indexOfFirstEntry,
      indexOfLastEntry
    );

    return currentEntries;
  }, [server, currentPage, search, lob, module]);

  // setServer(computedData);

  //   Get Current Table Entries

  //   console.log("Current Entries: ", currentEntries);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const servinate = (s) => setSearch(s);
  const lobModulate = () => {
    // console.log("Inside lob module function");
    setLobModule(true);
    setGoHit(true);
  };
  const lobinate = (lob) => {
    // console.log("Setting lob from query!");
    setLob(lob);
    console.log("Lob :", lob);
  };
  const modulate = (module) => {
    // console.log("Setting module from query!");
    setModule(module);
    console.log("Module:", module);
  };

  //     console.log("PageNumber: ", pageNumber);
  //   };
  //   console.log(server.length);
  // var myArray = computedData;
  // console.log(computedData);
  // var unique = myArray.filter((v, i, a) => a.indexOf(v["lob"]) === i);
  // console.log(unique);
  let uniqueLobs = [...new Set(computedData.map((item) => item.lob))];
  uniqueLobs = uniqueLobs.filter(function (el) {
    return el != null;
  });
  // console.log(uniqueLobs); // [ 'A', 'B']
  let uniqueModules = [...new Set(computedData.map((item) => item.module))];
  uniqueModules = uniqueModules.filter(function (el) {
    return el != null;
  });
  // console.log(uniqueModules); // [ 'A', 'B']

  return (
    <>
      <PrimarySearchAppBar paginate={paginate} servinate={servinate} />

      <div id="container" className="container mt-4">
        <QueryCard
          lobModulate={lobModulate}
          lobinate={lobinate}
          modulate={modulate}
          paginate={paginate}
          defaultlobs={uniqueLobs}
          defaultmodules={uniqueModules}
        />
        <Table
          server={searchData}
          loading={loading}
          currentPage={currentPage}
          goHit={goHit}
        />
        <div className="text-center text-dark">
          <Pagination
            entriesPerPage={entriesPerPage}
            totalEntries={computedData.length}
            paginate={paginate}
            currentPage={currentPage}
            goHit={goHit}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
