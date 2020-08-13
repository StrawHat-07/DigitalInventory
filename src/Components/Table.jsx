import React from "react";
import { capitalize } from "./Helpers/HelperFunctions";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import { FULL_STATISTICS, TABLE_STATISTICS } from "./Helpers/Constants";

const Table = ({ server, loading, currentPage }) => {
  if (loading) return <h1>Loading ....</h1>;
  console.log("Current Page: ", currentPage);
  return (
    <table class="table border shadow table-hover table-sm table-responsive{-sm|-md|-lg|-xl} text-center">
      <thead class="thead-dark">
        {/* Header Cell */}
        <th scope="col">#</th>
        {TABLE_STATISTICS.map((server, index) => (
          <th scope="col">{capitalize(server)}</th>
        ))}
        <th></th>
      </thead>
      <tbody>
        {server.map((unit, index) => (
          <tr>
            <th scope="row">{index + 1 + (currentPage - 1) * 100}</th>
            {TABLE_STATISTICS.map((server, index) => {
              console.log(unit["ip"]);
              return <td>{unit[server]}</td>;
            })}
            <td>
              <Link to={`/viewServer/${unit["ip"]}`}>
                <Button size="small">
                  <VisibilityIcon color="primary" />
                </Button>
              </Link>

              <Link to={`/editServer/${unit["ip"]}`}>
                <Button size="small">
                  <EditIcon color="action" />
                </Button>
              </Link>

              {/* <Button size="small">
                  <DeleteOutlineIcon color="secondary" />
                </Button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
