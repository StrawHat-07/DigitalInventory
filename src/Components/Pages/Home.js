import React from "react";
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

  //   Get Current Table Entries
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = server.slice(indexOfFirstEntry, indexOfLastEntry);

  console.log("Current Entries: ", currentEntries);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //     console.log("PageNumber: ", pageNumber);
  //   };

  return (
    <>
      <PrimarySearchAppBar />
      <div className="container mt-4">
        <Table
          server={currentEntries}
          loading={loading}
          currentPage={currentPage}
        />
        <div className="text-center text-dark">
          <Pagination
            entriesPerPage={entriesPerPage}
            totalEntries={server.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
