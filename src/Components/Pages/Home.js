import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TABLE_STATISTICS } from "../Helpers/Constants";
import { capitalize } from "../Helpers/HelperFunctions";
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

  useEffect(() => {
    console.log("kya haalchal");
    async function Data() {
      setLoading(true);
      const res = await axios.get(`http://localhost:8081/inventory/`);
      console.log(res);
      setServer(res.data);
      setLoading(false);
    }
    Data();
  }, []);
  const searcher = ["ip", "lob", "module"];
  let computedData = server;
  const searchData = useMemo(() => {
    if (search) {
      // console.log(server[0]["ip"].toLowerCase().includes(search.toLowerCase()));

      // console.log(server[1]["lob"].toLowerCase().includes(search));
      // console.log(search.toLowerCase());
      computedData = server.filter((data) => {
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
  }, [server, currentPage, search]);

  // setServer(computedData);

  //   Get Current Table Entries

  //   console.log("Current Entries: ", currentEntries);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const servinate = (s) => setSearch(s);

  //     console.log("PageNumber: ", pageNumber);
  //   };
  //   console.log(server.length);

  return (
    <>
      <PrimarySearchAppBar paginate={paginate} servinate={servinate} />
      <div className="container mt-4">
        <Table
          server={searchData}
          loading={loading}
          currentPage={currentPage}
        />
        <div className="text-center text-dark">
          <Pagination
            entriesPerPage={entriesPerPage}
            totalEntries={computedData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
